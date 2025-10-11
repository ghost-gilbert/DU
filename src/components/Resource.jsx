import React from 'react'
import './Resource.css'

const Resource = ({ isOpen }) => {
  return (
    <div className={isOpen ? "correct-sidebar" : "right-sidebar"}>
      <h2>Additional resources</h2>
    </div>
  )
}

export default Resource