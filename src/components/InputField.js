import React from 'react'
import "../styles/InputField.css"

const InputField = (props) => {
  return (
    <div className='input_field_div row d-flex justify-content-center my-4 mx-2'>
        <input type={props.type} id={props.id} name={props.name} placeholder={props.label} className={props.className} onChange={props.onChange} value={props.value} />
    </div>
  )
}

export default InputField;