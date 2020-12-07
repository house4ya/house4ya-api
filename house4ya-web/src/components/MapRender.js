import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

function MapRender(props) {
  return (
      <GoogleMap defaultZoom={18} defaultCenter={{ lat: Number(props.latitude), lng: Number(props.longitude) }}>
      <Marker onClick={() => alert('dont touch me biatch')} position={{lat:Number(props.latitude),lng: Number(props.longitude)}}></Marker>
  <h>{props.latitude}</h>
    </GoogleMap>
    
    
  
  ) 
  
}

const WrapMap  = withScriptjs(withGoogleMap(MapRender))

function WrappedMap(props) {
 console.log(props)
  return (
    <div style= {{ height:'70vh', width:'70vw'}}>
    <WrapMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} 
    loadingElement={<div style= {{ height:"100%" }} />}
    containerElement={<div style= {{ height:"100%" }} />}
    mapElement={<div style= {{ height:"100%" }} />}
    latitude={props.lat}
    longitude={props.lng}
    />
    
    
  </div>
  )
 
} 

//-37.840184913966134, 144.93118995236625
export default  WrappedMap 