import React from 'react'

function Button(type, label) {
  return (
    <button className={`button ${type}`}>{label}</button>
  )
}

export default Button