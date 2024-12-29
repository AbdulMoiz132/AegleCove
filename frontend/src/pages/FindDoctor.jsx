import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import styles from '../styles/finddoctor.module.css';
import Logo from '../components/Logo';
import PopOut from '../components/PopOut';

const FindDoctor = () => {
  const [city, setCity] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 33.5353, lng: 73.1741 });
  const [showPopout , setShowPopout] = useState(false);
  const handleSearch = async () => {
    if (!city) {
      alert('Please enter a city!');
      return;
    }

    try {

      const verifyResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${city}+Pakistan&format=json&limit=1`
      );
      const verifyData = await verifyResponse.json();

      if (verifyData.length === 0) {
        setShowPopout(true)
        setTimeout(() => {
          setShowPopout(false)
        }, 3000);
        return;
      }

      // Fetch hospitals in the city
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=hospitals+in+${city}+Pakistan&format=json&limit=500`
      );
      const data = await response.json();

      if (data.length > 0) {
        const hospitalData = data.map((place) => ({
          name: place.display_name,
          geometry: {
            location: { lat: parseFloat(place.lat), lng: parseFloat(place.lon) },
          },
          formatted_address: place.display_name,
        }));

        setHospitals(hospitalData);

        // Set the map center to the first hospital's location
        setMapCenter({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
        });
      } else {
        console.log('No hospitals found in this city.');
        setHospitals([]);
      }
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  return (
    <div className={styles.findDoctorPage}>

      <Logo/>
      {showPopout && <PopOut message='Sorry, we are currently available in Pakistan'/>}
      <h1>Find a Doctor</h1>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Enter city in Pakistan"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.inputField}
        />
        <button  onClick={handleSearch} onSubmit={handleSearch} className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.mapContainer}>
        <LoadScript googleMapsApiKey="AIzaSyDorSJW4zFjg1o-WXNwbZR0OOcPvQvipMU">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={mapCenter}
            zoom={12}
          >
            {hospitals.map((hospital, index) => (
              <Marker
                key={index}
                position={{
                  lat: hospital.geometry.location.lat,
                  lng: hospital.geometry.location.lng,
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className={styles.hospitalList}>
        {hospitals.map((hospital, index) => (
          <div key={index} className={styles.hospitalItem}>
            <h3>{hospital.name}</h3>
            <p>{hospital.formatted_address}</p>
            <Link
              to={`https://www.google.com/maps/dir/?api=1&destination=${hospital.geometry.location.lat},${hospital.geometry.location.lng}`}
              target="_blank"
              className={styles.directionsLink}
            >
              Get Directions
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindDoctor;
