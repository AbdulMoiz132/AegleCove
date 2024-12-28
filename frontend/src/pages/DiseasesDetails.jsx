import React, { useEffect,useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AegleCoveStore.js';
import Styles from '../styles/medicinedetails.module.css';

// Example raw data for a medicine


function DiseasesDetails() {
  const { name } = useParams();
  const diseasesdetails = useAegleCoveStore((state) => state.diseasesdetails);
  const setDiseasesDetails = useAegleCoveStore((state) => state.setDiseasesDetails);
  const [message , setMessage] = useState('');

  const fetchDiseases = async () => {
    try {
      const response = await fetch(`http://localhost:5000/disease/${name}`);
      const data = await response.json();
      if (!response.ok) {

        setMessage(data.message)
        throw new Error("Diseases not found");
      }
      setDiseasesDetails(data);
    } catch (error) {
      setMessage('Network Error please check Internet')
    }
  };

  useEffect(() => {
    fetchDiseases()
  }, [name]);

  return (
    <div className={Styles.diseasesdeatilspage}>
      <Logo />
      <Link to='/diseases/a' className={Styles.diseasespagelink}>
        <div className={Styles.diseasepagerouter}>
          <p>&gt;</p>
          <p className={Styles.linktext}>Diseases</p>
        </div>
      </Link>
      <div className={Styles.diseasedetails}>
        {diseasesdetails?.name ? (
          <div>
            <h1 className={Styles.diseasename}>{diseasesdetails.name}</h1>
            <h4 className={Styles.diseasedescription}>{diseasesdetails.description}</h4>
            <h4 className={Styles.diseasedosage}>Symptoms</h4>
            {diseasesdetails.symptoms.map((symptom, index) => (
              <strong key={index}>
                <li className={Styles.diseaseSymptomsList}>{symptom}</li>
              </strong>
            ))}
            <h4 className={Styles.diseasesTreatment}>Treatment:</h4>
            {diseasesdetails.treatment.map((treatment, index) => (
              <strong key={index}>
                <li className={Styles.diseasesTreatmentList}>{treatment}</li>
              </strong>
            ))}
            
            <h4 className={Styles.preventive_measure}>Alternatives:</h4>
            {diseasesdetails.preventive_measure.map((preventive_measure, index) => (
              <strong key={index}>
                <Link to='#' className={Styles.preventive_measureList}>
                  <li>{preventive_measure}</li>
                </Link>
                <br />
              </strong>
            ))}
          </div>
        ) : (
          <div className={Styles.medicinenotfound}>
            <h2 className={Styles.medicinenotfoundmessage}>Diseases not found. Check the list of Diseases by clicking the button below:</h2>
            <Link to="/diseases/a" className={Styles.medicinespageroute}>Diseases</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiseasesDetails;
