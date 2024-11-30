import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Charul from './Charul';
import Logo from '../../Logo/Logo';


const Medicines = () => {
  const [medicine, setMedicine] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const { char } = useParams();
  const navigate = useNavigate();

  const fetchMedicines = async () => {
    try {
      if (char) {
        const response = await fetch(`https://example.com/api/medicine/${char}`);
        if (!response.ok) throw new Error('Failed to fetch medicines');
        const data = await response.json();
        setMedicine(data);
      }
    } catch (err) {
      console.error(err);
      alert(
        'The medicines are not available at the moment. Redirecting you to the main medicines page.'
      );
      navigate('/medicines');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMedicines();
  }, [char]); 

  return (
    <div className="container">
      <Logo title='Medicines' src='/images/medicines.png'/>
    
        <div>
          <Charul />
          <h2>Character: {char}</h2>
          <ul>
            {medicine.length > 0 ? (
              medicine.map((med) => <li key={med.id}>{med.name}</li>)
            ) : (
              <p>No medicines found.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Medicines;
