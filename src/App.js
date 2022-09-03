import { useEffect, useState } from 'react';
import Axios from 'axios';
import Map from './Map';
import './App.css';

function App() {

const [ipDetails, setIpDetails] = useState([]);
const [lat, setLat] = useState("");
const [lon, setLon] = useState("");


useEffect(() => {
	Axios.get('https://ipapi.co/json/').then((res) => {
	setIpDetails(res.data);
	setLat(res.data.latitude);
	setLon(res.data.longitude);
	});
}, [])

return (
  <div className='App'>
    <div className='heading-box'>
      <h1 className="heading">IP Geolocation</h1>
    </div>
    <div className="main-container">
      <div className="details">
          <p className='top-row'>Your IPv4 address:</p>
          <p className='top-row' id="ip"><b>{ipDetails.ip}</b></p>
          <p className='row'>Latitude:</p>
          <p className='row'>{lat}</p>
          <p className='row'>Longitude:</p>
          <p className='row'>{lon}</p>
          <p className='row'>Country: </p>
          <p className='row'>{ipDetails.country_name}</p>
          <p className='row'>Region: </p>
          <p className='row'>{ipDetails.region}</p>
          <p className='row'>City: </p>
          <p className='row'>{ipDetails.city}</p>
          <p className='bottom-row'>Internet Service Provider:</p>
          <p className='bottom-row'>{ipDetails.org}</p>
      </div>
      <Map lat={lat} lon={lon} />
    </div>
  </div>
);
}

export default App;
