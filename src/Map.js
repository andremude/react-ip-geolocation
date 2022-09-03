import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { ImLocation2 } from 'react-icons/im';

const Map = ({ lat, lon }) => {

  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    width: '100%',
    height: '100%',
  });

  useEffect(() => {
    const a = { ...viewport };
    a.latitude = lat;
    a.longitude = lon;
    setViewport(a);
  }, [lat, lon]);

  return (
    <div className="map">
      <ReactMapGL
        mapboxAccessToken={process.env.REACT_APP_API_KEY}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11">
        <Marker latitude={lat} longitude={lon}>
          <div className="mark">
            <ImLocation2 size="35px" className='location-pin' />
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
