import React, { useState, useEffect } from 'react';
import UserConsumer from "../hooks/useDatos";

const ImageSlider = () => {

  const [imagenArray, setImagenArray] = useState("")
  const [current, setCurrent] = useState(0)
  const [saveResultFinal, setSaveResultFinal] = UserConsumer();
  


useEffect(() => {

  
  fetch(`https://pixabay.com/api/?key=32822302-e0bccee14336fc56618e7f358&q=${saveResultFinal[2]}+city&image_type=photo&pretty=true`)
  .then(response => response.json())
  .then(data =>   setImagenArray(data));
}
,[]
);

  
  return ( 
    <>

    
{!imagenArray? "" : 

  <div className="slider">
   
   { <button className="right-arrow" onClick={()=>current === imagenArray.hits.length - 1 ? "": setCurrent(current + 1)} > + </button>}
   <img onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://wallpapercave.com/wp/wp3187292.jpg";
          }} src={imagenArray.hits[current].largeImageURL} alt='travel image' className='image' /> 
   
   {   <button className="left-arrow" onClick={()=>current === 0 ? "":setCurrent(current - 1) } > - </button>}
  </div>
}
 </>
  );
}

export default ImageSlider;