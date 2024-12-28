import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Charul from '../components/Charul';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AegleCoveStore';
import SearchBar from '../components/SearchBar';
import Styles from '../styles/medicines.module.css';
import { searchItems } from '../utilities/helperfunctions';

const Medicines = () => {
  const medicines = useAegleCoveStore((state) => state.medicines);
  const setMedicines = useAegleCoveStore((state) => state.setMedicines);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const { char } = useParams();

  const fetchMedicines = async () => {
    try {
      setMedicines([]);
      const response = await fetch(`http://localhost:8080/data/medicines/${char}`);
      if (!response.ok) {
        throw new Error('Failed to fetch medicines');
      }
      const data = await response.json();
      setMedicines(data);
      setFilteredMedicines(data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, [char]);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilteredMedicines(medicines); // Reset to original medicines list if search input is cleared
    } else {
      setFilteredMedicines(searchItems(e.target.value, medicines));
    }
  };

  return (
    <div className={Styles.medicinespage}>
      <Logo />
      <div className={Styles.container}>
        <Charul page='medicines' char={char} />
        <div className={Styles.sectionA}>
          <div className={Styles.medicinesHeader}>
            <div className={Styles.searchBar}>
              <SearchBar handlechange={handleSearch} handleclick={handleSearch} />
            </div>
          </div>
          <div className={Styles.medicines}>
            <ul className={Styles.list}>
              {filteredMedicines?.length > 0 ? (
                filteredMedicines.map((med) => (
                  <Link to={`/medicinesdetails/${char}/${med.id}`} key={med.id} className={Styles.medlistli}>
                    {med.name}
                  </Link>
                ))
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
