import "./ParkItem.css"
import { useEffect, useState } from "react";

function ParkItem(props) {
  const [added, setAdded] = useState(false)

  const handleOnClick = () => {
    setAdded(!added)
    props.onClick(props.item)
  }

  useEffect(() => {
    setAdded(props.added)
  }, [props.added])

  return (<div className="ParkItem">
    <h3>{props.item.name} State Park</h3>
    <h4>{props.item.region}</h4>
    <img src={props.item.image}></img>
    <p className="description">{props.item.description}</p>
    <p>{props.item.wifi ? 'Wifi available' : 'No wifi available'}</p>
    <p>{props.item.admission == 0 ? 'Free' : '$' + props.item.admission + "/adult"}</p>
    <button onClick={handleOnClick}>{!added ? "Add to trip" : "Remove from trip"}</button>
  </div>)
}

export default ParkItem;