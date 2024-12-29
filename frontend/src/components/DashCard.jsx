import React from 'react';
import styles from '../styles/dashcard.module.css';
import { Link } from 'react-router-dom';
import useAegleCoveStore from '../store/AegleCoveStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const DashCard = ({ title }) => {
  const medical_history = useAegleCoveStore((state) => state.user.medical_history);

  return (
    <div className={styles.Dash_Card}>
      <h1>{title}</h1>
      {medical_history?.length > 0 ? (
        <div className={styles.Dash_Card_Container}>
          <Swiper 
            spaceBetween={20}
            centeredSlides={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {medical_history.slice(-3).map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.recentRecord}>
                  <h1 className={styles.diseaseName}>Disease Name: {item.diseasename}</h1>
                  <h3>Type: {item.type}</h3>
                  <h3>Medicines:</h3>
                  <ul>
                    {item.medicines.map((medicine, medIndex) => (
                      <li key={medIndex} className={styles.recentrecoedmedicines}>
                        {medicine}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div>
          <p>No Issues Yet</p>
          <div className={styles.btnwrapper}>
            <Link to="/medicalrecords">Add Details</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashCard;
