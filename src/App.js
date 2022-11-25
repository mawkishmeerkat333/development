import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import parkData from "./assets/park-data.json";
import ParkItem from "./components/ParkItem";
import Checkbox from './components/Checkbox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const filters = ["Coast", "Midlands", "Mountains", "true", "false"]
  const [type, setType] = useState(filters);
  const [sorted, setSorted] = useState(false)
  const [aggregator, setAggregator] = useState({})
  const [reset, setReset] = useState(true)

  // sort is in place, so need to copy parkData
  const sortedData = [...parkData].sort((a, b) => { return a.admission - b.admission; })

  const matchesFilterType = item => {
    return (type.includes(item.region) && type.includes(item.wifi.toString())) ? true : false
  }

  // ternary op to decide whether to filter sorted park data or regular park data
  const filteredData = (sorted ? sortedData : parkData).filter(matchesFilterType)  

  const handleOnClick = item => {
    const key = item.name
    // deep copy of aggregator
    let newAggregator = structuredClone(aggregator)
    // if the button is clicked and the key is in the dict, then we want to remove it
    if (key in aggregator) {
      delete newAggregator[key]
    } else {
      newAggregator[key] = item.admission
    }
    setAggregator(newAggregator)
  }

  const selectFilterType = e => {
    // make deep copy of old list
    let newType = [...type]
    const filter = e.target.value
    // set the state of the list to the updated copy
    if (newType.includes(filter)) {
      newType.splice(newType.indexOf(filter), 1)
    } else {
      newType = [...type, filter]
    }
    setType(newType)
  }

  const resetType = () => {
    setReset(!reset)
    setType(filters)
  }

  const handleSort = () => {
    setSorted(!sorted)
  }

  return (
    <div className="App">
      <Navbar className="Navbar" expand="lg" sticky="top">
        <Container className="Navbar-content">
          <Navbar.Brand href="#home">
            <img className="logo" src="images/south-carolina-parks-logo.png"></img>
          </Navbar.Brand>
          <h1>TRIP PLANNER</h1>
        </Container>
      </Navbar>
      <Container className="content">
        <Row>
          <Col xs={8}>
            <div>
              {filteredData.map(item => (
                <ParkItem key={item.name} item={item} onClick={handleOnClick} added={Object.keys(aggregator).includes(item.name)}></ParkItem>
              ))}
            </div>
          </Col>
          <Col xs={4}>
            <div className='wrapper'>
              <div className='filters-wrapper'>
                <h2>Filters & Sorting</h2>
                <div>
                  <h4>Regions</h4>
                  <Checkbox name="region" id="coast" value="Coast" label="Coast" filter={selectFilterType} reset={reset}/>
                  <Checkbox name="region" id="midlands" value="Midlands" label="Midlands" filter={selectFilterType} reset={reset}/>
                  <Checkbox name="region" id="mountains" value="Mountains" label="Mountains" filter={selectFilterType} reset={reset}/>
                </div>
                <div>
                  <h4>Wifi availablity</h4>
                  <Checkbox name="wifi" id="wifi" value="true" label="Wifi available" filter={selectFilterType} reset={reset}/>
                  <Checkbox name="wifi" id="nowifi" value="false" label="No wifi available" filter={selectFilterType} reset={reset}/>
                </div>
                <div className='reset-button-wrapper'>
                  <button onClick={resetType}>Reset filters</button>
                </div>
                <div name="sort-wrapper">
                  <h4>Sort</h4>
                  <div>
                    <input type="radio" name="sorted" id="Unsorted" onChange={handleSort} defaultChecked/>
                    <label htmlFor="Unsorted">Alphabetical</label>
                  </div>
                  <div>
                    <input type="radio" name="sorted" id="Sorted" onChange={handleSort}/>
                    <label htmlFor="Sorted">Ticket Price</label>
                  </div>
                </div>
              </div>
              <div className='aggregator'>
                <h2>Total cost of trip</h2>
                <h4>${Object.values(aggregator).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}/adult</h4>
                {Object.keys(aggregator).map((item) => (
                <p>{item} State Park: ${aggregator[item]}/adult</p>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;