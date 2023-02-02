import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import "../styles/Controls.css";
import axios from "axios";
import {
  endPointdata,
  endPointdata2,
  endPointIA,
  datoHeader,
} from "../Config/formConfig";
import UserConsumer from "../hooks/useDatos";
import {useNavigate} from "react-router-dom"

const isFirst = (currentIndex) => {
  return currentIndex === 0;
};

const isLast = (currentIndex, slides) => {
  return currentIndex === slides.length - 1;
};
const endPointWake = "https://datadb-7o3q.onrender.com/get/ciudades";

export default function Controls({
  currentIndex,
  slides,
  setCurrentIndex,
  setSaveCiudad,
  saveCiudad,
  setSaveOption1,
  saveOption1,
  saveOption2,
  setSaveOption2,
  saveResult,
  setSaveResult,
  isError2,
  setIsError2,
  saveCustom,
  setSaveCustom,
}) {
  const [saveResultFinal, setSaveResultFinal] = UserConsumer();

  const navigate = useNavigate()

  const nextBtnOption0 = async () => {
    // setSaveCiudad("")
    // setSaveOption1("")
    // setSaveOption2("")
    try {
      const datBtnOption0 = await axios.get(endPointWake);
      console.log(datBtnOption0.status);
    } catch (err) {
      console.log(err);
    }
  };
  const nextBtnOption1 = async () => {
    const datoTravel = {
      model: "text-davinci-003",
      prompt: `Soy de ${saveCiudad}, recomiéndame un listado de 2 lugares  dentro del territotio español para viajar que tenga ${saveOption1} en el que se pueda disfrutar de ${saveOption2} in  array two objet , form JSON  "nombre", "ubicación","provincia"`,
      temperature: 0,
      max_tokens: 400,
    };

    try {
      setSaveResult("");
      setSaveResultFinal('')
      const data = await axios.post(endPointIA, datoTravel, datoHeader);

      const arrayRes = [];
      arrayRes.push(JSON.parse(data.data.choices[0].text)[0].nombre);
      arrayRes.push(JSON.parse(data.data.choices[0].text)[0].ubicación);
      arrayRes.push(JSON.parse(data.data.choices[0].text)[0].provincia);
      arrayRes.push(JSON.parse(data.data.choices[0].text)[1].nombre);
      arrayRes.push(JSON.parse(data.data.choices[0].text)[1].ubicación);
      arrayRes.push(JSON.parse(data.data.choices[0].text)[1].provincia);

      setSaveResult(arrayRes);

      setSaveResultFinal("");
    } catch (err) {
      console.log(err);
      setSaveCustom(
        <>
          <button
            className="btnForm back-icon"
            onClick={() => setCurrentIndex(1)}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          "Openai no responde , vuelva ha intentarlo mas tarde , disculpen las
          molestias"
        </>
      );
    }

    try {
      const datoInputForm = {
        provincia: saveCiudad,
        entorno: saveOption1,
        actividades: saveOption2,
      };

      if (
        datoInputForm.provincia &&
        datoInputForm.entorno &&
        datoInputForm.actividades
      ) {
        const datainIa = await axios.post(endPointdata, datoInputForm);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const nextBtnOption2 = async () => {
    try {
      const datooutput = {
        ubicacion: saveResultFinal[1],
        nombre: saveResultFinal[0],
      };
      
      saveResultFinal[0] !== undefined && await axios.post(endPointdata2, datooutput) 
      ;
    } catch (err) {
      console.log(err);
    }
  };

  const nextBtnOption3 = () =>{
    navigate('/advice')
    
  }
  
  
 

  return (
    <>
      {isError2}
      {/* {!isFirst(currentIndex) &&
    <button className='btnForm back-icon' onClick={()=> setCurrentIndex(currentIndex -1)} ><FontAwesomeIcon icon={faAngleLeft} /></button> 
    } */}
      {/* {!isLast(currentIndex, slides) &&
    <button className='btnForm next-icon' onClick={()=> setCurrentIndex(currentIndex +1)} ><FontAwesomeIcon icon={faAngleRight} /></button>
    } */}

      <button
        className="btnForm next"
        onClick={() => (
          currentIndex === 0
            ? nextBtnOption0()
            : currentIndex === 1
            ? saveCiudad && saveOption1 && saveOption2 && nextBtnOption1()
            : currentIndex === 2
            ? nextBtnOption2()
            : currentIndex === 3
            ? nextBtnOption3()
            : "",
          currentIndex <= 2 && setCurrentIndex(currentIndex + 1)
        )}
      
        disabled={
          currentIndex === 2 && !saveResultFinal ||
          currentIndex >= 1 && (!saveCiudad || !saveOption1 || !saveOption2) || currentIndex === 4
        }
      >
        {isLast(currentIndex, slides) ? "Viajar" : "Siguiente"}
      </button>
    </>
  );
}
