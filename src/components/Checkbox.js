import "./Checkbox.css"
import { useEffect, useState } from "react";

function Checkbox(props) {
  const [checked, setChecked] = useState(true)
  
  const handleChange = e => {
    props.filter(e)
    setChecked(!checked)
  }

  useEffect(() => {
    setChecked(true)
  }, [props.reset])

  return (<div className="checkbox">
    <input type="checkbox" name={props.name} id={props.id} value={props.value} checked={checked} onChange={handleChange}/>
    <label htmlFor={props.id}>{props.label}</label>
  </div>)
}

export default Checkbox;