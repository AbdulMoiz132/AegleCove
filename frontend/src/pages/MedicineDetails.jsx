import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AegleCoveStore.js';
import Styles from '../styles/medicinedetails.module.css';

// Example raw data for a medicine
const exampleMedicineData = {
  name: "Paracetamol",
  formula: "C8H9NO2",
  description: "Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature.",
  recommended_dosage: {
    adults: "500mg to 1g every 4-6 hours",
    children: "10-15mg per kg of body weight every 4-6 hours"
  },
  side_effects: [
    "Nausea",
    "Rash",
    "Liver damage (in high doses)"
  ],
  alternatives: [
    "Ibuprofen",
    "Aspirin"
  ]
};

function MedicineDetails() {
  const { char , id } = useParams();
  const medicinesdetails = useAegleCoveStore((state) => state.medicinesdetails);
  const setMedicinesDetails = useAegleCoveStore((state) => state.setMedicinesDetails);

  const fetchMedicine = async () => {
    try {
      const response = await fetch(`http://localhost:5000/medicine/${char}/${id}`);
      if (!response.ok) {
        throw new Error("Medicine not found");
      }
      const data = await response.json();
      setMedicinesDetails(data);
    } catch (error) {
      console.error('Error fetching medicine:', error);
    }
  };

  useEffect(() => {
    // For testing purposes, set the example medicine data
    setMedicinesDetails(exampleMedicineData);
    // Uncomment the line below to fetch real data from the server
    // fetchMedicine();
  }, [name, setMedicinesDetails]);

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
            <h5 className={Styles.dosageforchildren}>Children</h5>
            <p className={Styles.dosageforchildren}>{medicinesdetails.recommended_dosage.children}</p>
            <h5 className={Styles.dosageforchildren}>Adults</h5>
            <p className={Styles.dosageforchildren}>{medicinesdetails.recommended_dosage.adults}</p>
            <h4 className={Styles.medicinesideeffects}>Side Effects:</h4>
            {medicinesdetails.side_effects.map((side_effect, index) => (
              <strong key={index}>
                <li className={Styles.medicinesideeffectslist}>{side_effect}</li>
                <br />
              </strong>
            ))}
            <h4 className={Styles.medicinealternatives}>Alternatives:</h4>
            {medicinesdetails.alternatives.map((alternative, index) => (
              <strong key={index}>
                <Link to='#' className={Styles.medicinealternativeslist}>
                  <li>{alternative}</li>
                </Link>
                <br />
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
