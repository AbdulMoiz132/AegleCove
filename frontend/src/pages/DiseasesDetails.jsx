import React, { useEffect,useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import useAegleCoveStore from '../store/AegleCoveStore.js';
import Styles from '../styles/medicinedetails.module.css';

// Example raw data for a medicine


function DiseasesDetails() {
  const { id } = useParams();
  const diseasedetails = useAegleCoveStore((state) => state.diseasedetails);
  const setDiseaseDetails = useAegleCoveStore((state) => state.setDiseaseDetails);
  const [message , setMessage] = useState('');
  const fetchDiseases = async () => {
    try {
      const response = await fetch(`http://localhost:8080/data/disease/${id}`);
      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message)
        console.log(message);
        throw new Error("Diseases not found");
      }
      console.log(data)
      setDiseaseDetails(data);
   
    } catch (error) {
      setMessage('Network Error please check Internet')
    }
  };

  useEffect(() => {
    fetchDiseases()
  }, [id]);

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
        {diseasedetails?.name ? (
          <div>
            <h1 className={Styles.diseasename}>{diseasedetails.name}</h1>
            <h4 className={Styles.diseasedescription}>{diseasedetails.description}</h4>
            <h4 className={Styles.diseaseSymptoms}>Symptoms</h4>
            {diseasedetails?.symptoms?.map((symptom, index) => (
              <strong key={index}>
                <li className={Styles.diseaseSymptomsList}>{symptom}</li>
              </strong>
            ))}
            <h4 className={Styles.diseaseTreatment}>Treatment:</h4>
            {diseasedetails?.treatment?.map((treatment, index) => (
              <strong key={index}>
                <li className={Styles.diseaseTreatmentList}>{treatment}</li>
              </strong>
            ))}
            
            <h4 className={Styles.preventiveMeasure}>Prevention:</h4>
            {diseasedetails?.preventiveMeasures?.map((preventiveMeasures, index) => (
              <strong key={index}>
                  <li className={Styles.preventiveMeasureList}>{preventiveMeasures}</li>
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
