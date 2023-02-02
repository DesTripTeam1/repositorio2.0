import React from 'react'
import '../styles/Badges.css'
export default function Badges({currentIndex, slides}) {
  return (
    <ul className='CircleT'>
      {slides.map((slide, index)=>
      <li id='CircleR' className={'control' + ((index === currentIndex) ? "active" : "")}
      key={index}
      >
      </li>
      )}
    </ul>
  )
}