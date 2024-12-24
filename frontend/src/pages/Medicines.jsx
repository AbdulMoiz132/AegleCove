import React, {  useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Charul from '../components/Charul';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AeglcoveStore';
import SearchBar from '../components/SearchBar';
import Styles from '../styles/medicines.module.css'
import { searchItems } from '../utilities/helperfunctions';


const Medicines = () => 
{
  const medicines = useAegleCoveStore((state)=>state.medicines)
  const setMedicines = useAegleCoveStore((state)=>state.setMedicines)
  const { char } = useParams();
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
      
        setMedicines(medicineslist);
        const response = await fetch(`https://example.com/api/medicine/${char}`);
        if (!response.ok){ 
          
          throw new Error('Failed to fetch medicines'); 
        }
        const data = await response.json();
        setMedicines(data);
      
    }
  useEffect(() => {
    fetchMedicines();
  }, [char]); 

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setMedicines(medicineslist); 
    } else {
      setMedicines(searchItems(e.target.value,medicineslist));
    }
  }

  return (
  <div className={Styles.medicinespage}>
         <Logo/>
         <h1>Medicines A to Z</h1> 
      <div className={Styles.container}>
      <Charul page='medicines' char={char} />
        <div className={Styles.sectionA}>
          <div className={Styles.medicinesHeader}>
            <div className={Styles.searchBar}>
            <SearchBar handlechange={handleSearch} handleclick={handleSearch}/>
            </div>
          </div>
          <div className={Styles.medicines}>
          <ul className={Styles.list}>
            {medicines.length > 0 ? (
              medicines.map((med) => <Link to='' key={med.id} className={Styles.medlistli}>{med}</Link>)
            ) : (
              <p>No medicines found!</p>
            )}
          </ul>
        </div>
        </div>
      
    </div>
    </div>
 
  );
};

export default Medicines;
