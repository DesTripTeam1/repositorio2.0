import React, { useState } from 'react'
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'
import { provincesSpain } from '../assets/provincesSpain'
import PopOver from './PopOver'
import FichaTecnica from './FichaTecnica'

const posicion = 43
const queProvinciaEs = provincesSpain.features[posicion]


const style = {
  width: '100vw',
  height: '85vh',
}
// HASTA AQUI LA PRUEBA AAAAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAA AAAAAAAAAAA
function AllProvinces() {
  const [provinciaState, setProvinciaState] = useState('')
  const [comAut, setComAut] = useState('')
  const [fichaTecnica, setFichaTecnica] = useState('')
  
  return (
    <>
    {provinciaState ? <PopOver provincia={provinciaState} comAut={comAut}/> : null}
    {fichaTecnica ? <FichaTecnica provinceInfo={fichaTecnica} setFichaTecnica={setFichaTecnica} comAut={comAut}/> : null}
    <MapContainer 
      center={[35.80786, -9.50983]} 
      zoom={5}
      style={style}
      scrollWheelZoom={false}>
        <TileLayer 
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=isS2PeyfRxdadSKBUjC7'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'  
        /> 
        
      {provincesSpain.features.map((provincia) => {   
        return (provincia.fields.geo_shape.type === 'MultiPolygon')

        ? provincia.fields.geo_shape.coordinates.map((nivel1, index) => {
          const MultiPolygonCoordinates = nivel1[0].map((item) => [item[1], item[0]])
          return (<Polygon
            key={provincia.fields.provincia + index}
            pathOptions={{
              fillColor: '#FD8D3C',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: 'white',
            }}
            positions={MultiPolygonCoordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillColor: '#E86A08',
                  fillOpacity: 0.7,
                  weight: 5,
                  dashArray: '3',
                  color: 'white',
                })
                setProvinciaState(provincia.fields.provinceInfo)
                setComAut(provincia.fields.ccaa)
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillColor: '#FD8D3C',
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: '3',
                  color: 'white',
                })
                setProvinciaState('')
                setComAut('')
              },
              click: (e) => {
                setFichaTecnica(provincia.fields.provinceInfo)
              }
            }}
          />)
        })
        : <Polygon
            key={provincia.fields.provincia}
            pathOptions={{
              fillColor: '#FD8D3C',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: 'white',
            }}
            positions={provincia.fields.geo_shape.coordinates[0].map((item) => [item[1], item[0]])}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillColor: '#E86A08',
                  fillOpacity: 0.7,
                  weight: 5,
                  dashArray: '3',
                  color: 'white',
                })
                setProvinciaState(provincia.fields.provinceInfo)
                setComAut(provincia.fields.ccaa)
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillColor: '#FD8D3C',
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: '3',
                  color: 'white',
                })
                setProvinciaState('')
                setComAut('')
              },
              click: (e) => {
                setFichaTecnica(provincia.fields.provinceInfo)
              }
            }}
          />
        })
      }
    </MapContainer>
    </>
  )
}

export default AllProvinces