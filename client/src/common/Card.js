import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'


export default function Card(props) {
  return (
    <> 
    
    <div className='icon-container'>
      <FontAwesomeIcon icon={props.iconElement} />
          </div>
      <p className='title'>{props.title}</p>
      <p className='description'>{props.description}</p>
    
    </>
  )
}
