import React from 'react'
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import houseService from '../services/HouseService'
import { useParams } from'react-router-dom'

  function Maps({match})  {
   const [address, setAdress ] = React.useState('');
   const [coordinates, setCoordinates ] = React.useState({
     lat: null,
     lng: null
   })

   const [ TheCity, setTheCity ] = React.useState( {ciudad: null} ) //error not coming from here
   

   const { owner, house } = useParams();

   const handleSelect = async (value) => {
     const results = await geocodeByAddress(value)
     // console.log(results)
     const latLng = await getLatLng(results[0])
     //const selectedCity = results[0].address_components[0].long_name
     const selectedCity = results[0].address_components
     
     setAdress(value)
     setCoordinates(latLng)
     setTheCity( {ciudad: selectedCity} )
     console.log(selectedCity)
     
     
     
     

    
   }

   

    const handleCoorsSubmit = () => {
     houseService.editLocation(owner, house, coordinates )
     houseService.editCity(owner, house, TheCity)
     console.log(`this is the city in maps : ` + TheCity.ciudad)
     
   }

   const searchOptionsx = {
    
    componentRestrictions: {country: "ES"}
   }
   
   return(
     <div>
       <PlacesAutoComplete value={address} onChange={setAdress} onSelect={handleSelect} searchOptions={ searchOptionsx } >
         {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
           <div>
             <input {...getInputProps({ placeholder: "type address"})} />
             <div>
               <p>longitude: {coordinates.lng}</p>
               <p>latitude: {coordinates.lat}</p>
               <h4>address: {address}</h4>
         {/* <h4>city: {TheCity}</h4> */}
             </div>
             <div>
               {loading ? <div>...loading results</div> : null}

               { suggestions.map(suggestion => {

                 const style = { backgroundColor: suggestion.active ? '#5FD719' : '#ffff'}
                 return <div {...getSuggestionItemProps( suggestion, { style } )}>{suggestion.description}</div>
               })}
             </div>
           </div>
         )}
       </PlacesAutoComplete>
       <div>
             <button onClick={handleCoorsSubmit} >add address</button>
       </div>
       <div>
              <p>here owner id == {match.params.owner}</p>
              <p>here house id == {match.params.house}</p>
       </div>
     </div>
   )
 }

 export default Maps