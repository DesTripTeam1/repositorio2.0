import React from 'react'
import '../styles/Cards.css'
import Card from './Card';

export default function Cards({currentIndex, slides}) {
  return (
    <div className='cards-container'>
      
      {slides && slides.map((slide, index)=>{

        const activeClass = (index === currentIndex) ? " active1" : "";
        const isGotoLeftClass = (index < currentIndex) ? " go-to-left" : "";
        const isGotoRightClass= (index > currentIndex) ? " go-to-right" : "";

        return (
        <div className={'card' + activeClass + isGotoLeftClass + isGotoRightClass} key={index}>
          <Card {...slide} />
          
        </div>)
      })
      }
    </div>
  )
}
