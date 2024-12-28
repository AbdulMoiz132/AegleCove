import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Charul from '../components/Charul';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AegleCoveStore';
import SearchBar from '../components/SearchBar';
import Styles from '../styles/medicines.module.css';
import { searchItems } from '../utilities/helperfunctions';

const Diseases = () => {
  const diseases = useAegleCoveStore((state) => state.diseases);
  const setDiseases = useAegleCoveStore((state) => state.setDiseases);
  const [filteredDiseases, setFilteredDiseases] = useState([]);
  const { char } = useParams();

  const fetchDiseases = async () => {
   
      setDiseases([]);
      const response = await fetch(`http://localhost:8080/diseases/${char}`);
      if (!response.ok) {
        throw new Error('Failed to fetch diseases');
      }
      const data = await response.json();
      setDiseases(data);
      setFilteredDiseases(data);
  
  };

  useEffect(() => {
    fetchDiseases();
  }, [char]);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilteredDiseases(diseases); // Reset to original diseases list if search input is cleared
    } else {
      setFilteredDiseases(searchItems(e.target.value, diseases));
    }
  };

  return (
    <div className={Styles.medicinespage}>
      <Logo />
      <div className={Styles.container}>
        <Charul page='diseases' char={char} />
        <div className={Styles.sectionA}>
          <div className={Styles.medicinesHeader}>
            <div className={Styles.searchBar}>
              <SearchBar handlechange={handleSearch} handleclick={handleSearch} />
            </div>
          </div>
          <div className={Styles.medicines}>
            <ul className={Styles.list}>
              {filteredDiseases?.length > 0 ? (
                filteredDiseases.map((disease) => (
                  <Link to={`/disease/${disease.id}`} key={disease.id} className={Styles.medlistli}>
                    {disease.name}
                  </Link>
                ))
              ) : (
                <p>No diseases found!</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseases;
