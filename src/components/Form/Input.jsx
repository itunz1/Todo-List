import React from 'react'
import './Input.css'

function Input({ value, menu, onChange, props }) {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='input'>
      <li className='list'>
        <input type="radio" name='todoMenu' id={value} value={value} checked={menu === value} onChange={onChange} {...props} />
        <label htmlFor={value}>{capitalize(value)}</label>
      </li>
    </div>
  )
}

export default Input