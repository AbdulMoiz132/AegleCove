import React from 'react';
import Card from '../components/Card';
import CardType2 from '../components/CardType2';
import CardType3 from '../components/CardType3'; 
import List from '../components/List';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/homepage.module.css'; // Import as styles object
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Homepage() {
    // Data for cards to reduce repetition
    const featuredCards = [
        { title: "AIDS", description: "Find out about the AIDS, What affect it can cause, what treatment is best for it, and medicines.", link:'/diseasedetails/1' },
        { title: "Asthma", description: "Find out about the Asthma, What are symptoms of it, and what prevention , and common medicines for it", link:'/diseasedetails/3' },
        { title: "Appendicitis", description: "Find out about the Appendicitis, What are symptoms of it, and what prevention , and common medicines for it", link:'/diseasedetails/5' },
        { title: "Shingles", description: "Find out about the Shingles, What are symptoms of it, and what prevention , and common medicines for it" , link:'/diseasedetails/500' },
        { title: "Lung Cancer", description: "Find out about the Lungs Cancer, What are symptoms of it, and what prevention , and common medicines for it" , link:'/diseasedetails/323' },
    ]

    const backgoundpics = [
        { url: '/images/drimg3.jpeg', title: 'AegleCove For Everyone', desc: 'Discover the right treatments, doctors, and hospitals tailored to your health needs' },
        { url: '/images/image1.png', title: '', desc: 'Easily track your symptoms, get disease analysis, and find the best care options near you.' },
        { url: '/images/image2.png', title: '', desc: 'Find information and services to help you manage your health' },
        { url: '/images/image4.png', title: '', desc: 'Find reliable health resources and connect with professionals to improve your well-being.' },
    ];

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'cover',
        height: '70vh',
        width:  '100%',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <main>
                <Header />
                <hr />
                <div className={styles.slideContainer}>
                    <Slide
                        autoplay={true}
                        duration={2000}
                        transitionDuration={300}
                        infinite={true}
                        arrows={false}
                        indicators={true}
                    >
                        {backgoundpics.map((pic, index) => (
                            <div
                                key={index}>
                                <div style={{ ...divStyle, 'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pic.url})` }}>
                                    <CardType2 title={pic.title} description={pic.desc} className={styles.cardtype2} />
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
            
                <div className={styles.cards}>
                    <div className={styles.card1}>
                        <Card title="Health A to Z" description="Find out about conditions, symptoms and treatments, including what to do and when to get help" button='Diagnose Now' link='/diseases/A' />
                    </div>
                    <div className={styles.card1}>
                        <Card title="Medicines A to Z" description="Find out about medicines, dosage and Sideeffects, including what to do and when to get help" button='Search here'link='/medicines/a' />
                    </div>
                    <div className={styles.card1}>
                        <Card title="Symptom Analyzer" description="Analyze your symptoms and seek guidance for managing your condition effectively" button='Analyze Now' link='/symptomanalyzer' />
                    </div>
                </div>
       
                <div className={styles.belowcard}>
                    <List />
                    <CardType3
                        title="🤔 Concerned About a Symptom? We're Here to Help! 🌟"
                        description="If you're feeling uneasy about a symptom and don't know what to do next, AegleCove is just a click away!"
                        description2="🌐 Visit: "
                        link="mailto:AegleCove@outlook.com"
                        description3="Your health matters for AegleCove..💙"
                        className={styles.card2}
                    />
                </div>
                <div className={styles.feature}>
                    <h2 className={styles.showcasedHeading}>Featured For Better Health Awareness</h2>
                    <div className={styles.featured}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={false}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={false}
                            navigation={false}
                            indicators={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className={styles.mySwiper}
                        > 
                            {featuredCards.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <Card title={card.title} description={card.description} button='Learn More' link={card.link} className={styles.card1} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </main>
            <hr />
            <Footer />
        </div>
    );
}

export default Homepage;
