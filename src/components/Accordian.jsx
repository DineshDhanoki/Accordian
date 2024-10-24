import React from 'react'
import { useState } from 'react'
import './../accordian.css'

function Accordian({title, content}) {
    const [isActive, setIsActive] = useState(false)

  return (
  <section className="accordian-cards" key={Math.random()}>
    <div className="header" onClick={() => setIsActive(!isActive)}>
    <div className='cards-title'>{title}</div>
    <p className="icons"> {isActive ? '-' : '+'} </p>
    </div>
    <div className="content"> {isActive && 
    <p className="cards-info"> {content} </p>}
    </div>

  </section>
  )
}

export default Accordian