import React, { useState, useEffect } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import Charul from '../components/Charul';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AeglcoveStore';
import SearchBar from '../components/SearchBar';
import Styles from '../styles/medicines.module.css'



const Medicines = () => 
{
  const medicines = useAegleCoveStore((state)=>state.medicines)
  const setMedicines = useAegleCoveStore((state)=>state.setMedicines)
  const { char } = useParams();
  const navigate = useNavigate();
  const medicineslist = [
    "Aspirin",
    "Amoxil",
    "Augmentin",
    "Ansaid",
    "Azomax",
    "Amlor",
    "Alp",
    "Ascard",
    "Ativan",
    "Aerius",
    "Anexate",
    "Avamys",
    "Avarin",
    "Azithral",
    "Acefyl",
    "Aeri-Tab",
    "Avastin",
    "Atarax",
    "Aloxi",
    "Arinac"
  ];
  


  const fetchMedicines = async () => {
      if (char) {
        setMedicines(null);
        const response = await fetch(`https://example.com/api/medicine/${char}`);
        if (!response.ok){ 
          throw new Error('Failed to fetch medicines');
          setMedicines(medicineslist);
        }
        const data = await response.json();
        setMedicines(data);
      }
    }
  useEffect(() => {
    fetchMedicines();
  }, [char]); 

  return (
  <div className={Styles.medicinespage}>
         <Logo/>
         <h1>Medicines A to Z</h1> 
      <div className={Styles.container}>
      <Charul />
        <div className={Styles.sectionA}>
          <div className={Styles.medicinesHeader}>
            <h2>Medicines By :{char.toUpperCase()}</h2>
            <div className={Styles.searchBar}>
            <SearchBar/>
            </div>
          </div>
          <div className={Styles.medicines}>
          <ul className={Styles.list}>
            {medicineslist.length > 0 ? (
              medicineslist.map((med) => <Link to='' key={med.id} className={Styles.medlistli}>{med}</Link>)
            ) : (
              <p>No medicines found by {char.toUpperCase()}</p>
            )}
          </ul>
        </div>
        </div>
      
    </div>
    </div>
 
  );
};

export default Medicines;
