import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AegleCoveStore.js';
import Styles from '../styles/medicinedetails.module.css';

function MedicineDetails() {
  const {id } = useParams();
  const medicinesdetails = useAegleCoveStore((state) => state.medicinesdetails);
  const setMedicinesDetails = useAegleCoveStore((state) => state.setMedicinesDetails);

  const fetchMedicine = async () => {
    try {
      const response = await fetch(`http://localhost:8080/data/medicine/${id}`);
      if (!response.ok) {
        throw new Error("Medicine not found");
      }
      const data = await response.json();
      console.log(data)
      setMedicinesDetails(data);
    } catch (error) {
      console.error('Error fetching medicine:', error);
    }
  };

  useEffect(() => {
     fetchMedicine();
  }, [id]);

  return (
    <div className={Styles.medicinesdeatilspage}>
      <Logo />
      <Link to='/medicines/a' className={Styles.medicinespagelink}>
        <div className={Styles.medicinepagerouter}>
          <p>&gt;</p>
          <p className={Styles.linktext}>Medicines</p>
        </div>
      </Link>
      <div className={Styles.medicinedetails}>
        {medicinesdetails.name ? (
          <div>
            <h1 className={Styles.medicinename}>{medicinesdetails.name}</h1>
            <h2 className={Styles.medicineformula}>{medicinesdetails.formula}</h2>
            <h4 className={Styles.medicinedescription}>{medicinesdetails.description}</h4>
            <h4 className={Styles.medicinedosage}>Recommended Dosage:</h4>
            {medicinesdetails.recommendedDosage.children&&<h5 className={Styles.dosageforchildren}>Children</h5>}
            <p className={Styles.dosageforchildren}>{medicinesdetails.recommendedDosage.children}</p>
            {medicinesdetails.recommendedDosage.adults&&<h5 className={Styles.dosageforchildren}>Adults</h5>}
            <p className={Styles.dosageforchildren}>{medicinesdetails.recommendedDosage.adults}</p>
            <h4 className={Styles.medicinesideeffects}>Side Effects:</h4>
            {medicinesdetails.sideEffects.map((sideEffect, index) => (
              <strong key={index}>
                <li className={Styles.medicinesideeffectslist}>{sideEffect}</li>
                <br />
              </strong>
            ))}
            <h4 className={Styles.medicinealternatives}>Alternatives:</h4>
            {medicinesdetails.alternativeMedicines.map((alternative, index) => (
              <strong key={index}>
                  <li className={Styles.medicinealternativeslist}>{alternative}</li>
              </strong>
            ))}
          </div>
        ) : (
          <div className={Styles.medicinenotfound}>
            <h2 className={Styles.medicinenotfoundmessage}>Medicine not found. Check the list of medicines by clicking the button below:</h2>
            <Link to="/medicines/a" className={Styles.medicinespageroute}>Medicines</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MedicineDetails;
