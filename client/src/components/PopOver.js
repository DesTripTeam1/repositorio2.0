import React from 'react'
import '../styles/popOver.css'

const PopOver = ({provincia, comAut}) => {
  return (
    <div className='containerPopOverProvincia'>
      <h1 className='provincia'>{provincia.nombre}</h1>
      <br />
      <h4>Comunidad Autonoma: </h4>
      <p>{comAut}</p>
      <br />
      <h4>Número de habitantes: </h4>
      <p>{provincia.habitantes}</p>
      <br />
      <h4>Pueblos que visitar:</h4>
      <ul className='uList'>
        {provincia.pueblosDestacados.map((pueblo, index) => <li key={index}>{pueblo}</li>)}
      </ul>
    </div>
  )
}

export default PopOver