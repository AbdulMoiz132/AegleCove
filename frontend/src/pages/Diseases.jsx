import React, {  useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Charul from '../components/Charul';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AeglcoveStore';
import SearchBar from '../components/SearchBar';
import Styles from '../styles/medicines.module.css'

const Diseases = () => 
{
  const diseases= useAegleCoveStore((state)=>state.diseases)
  const setDiseases = useAegleCoveStore((state)=>state.setDiseases)
  const { char } = useParams();


  const fetchDiseases = async () => {
  
      setDiseases([]);
      const response = await fetch(`http:localhost:8080/diseases/${char}`);
      if (!response.ok){ 

        throw new Error('Failed to fetch medicines');
        
      }
      const data = await response.json();
      setDiseases(data);
    
  }
  useEffect(() => {
    
    fetchDiseases();
  }, [char]); 

  return (
    <div className={Styles.medicinespage}>
         <Logo/>
         <h1>Diseases A to Z</h1> 
      <div className={Styles.container}>
      <Charul page='diseases'  />
        <div className={Styles.sectionA}>
          <div className={Styles.medicinesHeader}>
            <h2>Diseases By :{char.toUpperCase()}</h2>
            <div className={Styles.searchBar}>
            <SearchBar/>
            </div>
          </div>
          <div className={Styles.medicines}>
          <ul className={Styles.list}>
            {diseases.length > 0 ? (
              diseases.map((disease) => <Link to='' key={disease.id} className={Styles.medlistli}>{disease}</Link>)
            ) : (
              <p>No Diseases found by {char.toUpperCase()}</p>
            )}
          </ul>
        </div>
        </div>
      
    </div>
    </div>
 
  );
};

export default Diseases;
