import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import styles from '../styles/finddoctor.module.css';
import Logo from '../components/Logo';
import PopOut from '../components/PopOut';

const FindPharmacy = () => {
  const [city, setCity] = useState('');
  const [pharmacies, setPharmacies] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 33.5353, lng: 73.1741 });
  const [showPopout, setShowPopout] = useState(false);

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
        setShowPopout(true);
        setTimeout(() => {
          setShowPopout(false);
        }, 3000);
        return;
      }

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=pharmacies+in+${city}+Pakistan&format=json&limit=500`
      );
      const data = await response.json();

      if (data.length > 0) {
        const pharmacyData = data.map((place) => ({
          name: place.display_name,
          geometry: {
            location: { lat: parseFloat(place.lat), lng: parseFloat(place.lon) },
          },
          formatted_address: place.display_name,
        }));

        setPharmacies(pharmacyData);

        // Set the map center to the first pharmacy's location
        setMapCenter({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
        });
      } else {
        console.log('No pharmacies found in this city.');
        setPharmacies([]);
      }
    } catch (error) {
      console.error('Error fetching pharmacies:', error);
    }
  };

  return (
    <div className={styles.findPage}>
      <Logo />
      {showPopout && <PopOut message='Sorry, we are currently available in Pakistan' />}
      <h1>Find a Pharmacy</h1>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Enter city in Pakistan"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.inputField}
        />
        <button onClick={handleSearch} onSubmit={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      <div className={styles.mapContainer}>
        <LoadScript googleMapsApiKey="AIzaSyDorSJW4zFjg1o-WXNwbZR0OOcPvQvipMU">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={mapCenter}
            zoom={12}
          >
            {pharmacies.map((pharmacy, index) => (
              <Marker
                key={index}
                position={{
                  lat: pharmacy.geometry.location.lat,
                  lng: pharmacy.geometry.location.lng,
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className={styles.pharmaciesList}>
        {pharmacies.map((pharmacy, index) => (
          <div key={index} className={styles.item}>
            <h3>{pharmacy.name}</h3>
            <p>{pharmacy.formatted_address}</p>
            <Link
              to={`https://www.google.com/maps/dir/?api=1&destination=${pharmacy.geometry.location.lat},${pharmacy.geometry.location.lng}`}
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

export default FindPharmacy;
