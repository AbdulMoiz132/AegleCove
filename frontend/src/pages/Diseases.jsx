import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Charul from '../components/Charul';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AeglcoveStore';


const Diseases = () => 
{
  const diseases= useAegleCoveStore((state)=>state.diseases)
  const setDiseases = useAegleCoveStore((state)=>state.setDiseases)
  const { char } = useParams();
  const navigate = useNavigate();

  const fetchDiseases = async () => {
    try {
      if (char) {
        const response = await fetch(`https://example.com/api/medicine/${char}`);
        if (!response.ok) throw new Error('Failed to fetch medicines');
        const data = await response.json();
        setDiseases(data);
      }
    } catch (err) {
      console.error(err);
      alert(
        'The medicines are not available at the moment. Redirecting you to the main medicines page.'
      );
      navigate('/diseases');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    
    fetchDiseases();
  }, [char]); 

  return (
    <div className="container">
      <Logo title='Diseases'/>
        <div>
          <Charul />
          <h2>Character: {char}</h2>
          <ul>
            {diseases.length > 0 ? (
              diseases.map((med) => <li key={med.id}>{med.name}</li>)
            ) : (
              <p>No medicines found.</p>
            )}
          </ul>
        </div>
      
    </div>
  );
};

export default Diseases;
