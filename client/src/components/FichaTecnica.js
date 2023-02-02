import React from 'react'
import '../styles/fichaTecnica.css'

const FichaTecnica = ({provinceInfo, setFichaTecnica, comAut}) => {

    return (
     <div className='divFichaTecnica'>
         <div className='imgLanding' style={{ backgroundImage: `url(${provinceInfo.img})` }}>
             <div className='closeBTN' onClick={() => setFichaTecnica('')}>
                <p className="xBTN">X</p>
             </div>
         </div>
         <div className="provinciaInfo">
            <p className="title">{provinceInfo.nombre}</p>
            <hr />
            <div className='habYcom'>
                <p className="ccaa">Comunidad Autonoma</p>
                <p className="dato">{provinceInfo.ccaa}</p>
                <p className="hab">Habitantes</p>
                <p className="dato">{provinceInfo.habitantes} habitantes</p>
            </div>
         </div>
         <div className="listas">
                <ul className='pueblos'>
                    <p>Pueblos destacados</p>
                    {provinceInfo.pueblosDestacados.map((pueblo, index) => <li key={index}>{pueblo}</li>)}
                </ul>
                <ul className='fiestas'>
                    <p>Fiestas populares</p>
                    {provinceInfo.fiestasPopulares.map((fiesta, index) => <li key={index}>{fiesta}</li>)}
                </ul>
                <ul className='platos'>
                    <p>Platos típicos</p>
                    {provinceInfo.platosTipicos.map((plato, index) => <li key={index}>{plato}</li>)}
                </ul>
            </div>
     </div>
  )
}

export default FichaTecnica

{/* <div class="card">
        <div class="card_landing" style="--i:url(Plaza_españa_178.jpg)">
            <h6>plaza españa</h6>
        </div>
        <div class="card_info">
            <div class="head">
                <p class="title">Plaza España</p>
                <div class="description">
                    <div class="item">
                        <p>⏱️</p>
                        <p>40 min</p>
                    </div>
                    <div class="item">
                        <p>🧑‍🍳</p>
                        <p>4</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <p class="title">Ingredientes:</p>
                <ul class="lista">
                    <li>Ingrediente 1</li>
                    <li>Ingrediente 2</li>
                    <li>Ingrediente 3</li>
                    <li>Ingrediente 4</li>
                    <li>Ingrediente 5</li>
                    <li>Ingrediente 6</li>
                </ul>
            </div>
            <div class="action">
                <a href="#" class="btn">Ver Receta</a>
            </div>
        </div>
    </div> */}






// import React from 'react'
// import '../styles/fichaTecnica.css'

// const FichaTecnica = ({provinceInfo, setFichaTecnica}) => {

//     return (
//     <div className='divFichaTecnica'>
//         <div className='infoFicha'>
//             <span className='closeBTN' onClick={() => setFichaTecnica('')}>X</span>
//             <div>{`La provincia de ${provinceInfo.nombre} tiene ${provinceInfo.habitantes} habitantes`}</div>
//             <div className='listados'>
//                 <ul>
//                     {provinceInfo.pueblosDestacados.map((pueblo, index) => <li key={index}>{pueblo}</li>)}
//                 </ul>
//                 <ul>
//                     {provinceInfo.platosTipicos.map((plato, index) => <li key={index}>{plato}</li>)}
//                 </ul>
//                 <ul>
//                     {provinceInfo.fiestasPopulares.map((fiesta, index) => <li key={index}>{fiesta}</li>)}
//                 </ul>
//             </div>
//             <img src={provinceInfo.img} alt={`img de ${provinceInfo.nombre}`} />
//         </div>
//     </div>
//   )
// }

// export default FichaTecnica