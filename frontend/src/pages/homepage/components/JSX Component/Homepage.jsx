import React from 'react';
import Card from "./Card";
import Cardtype2 from "./Cardtype2";
import Cardtype3 from "./Cardtype3";
import Feedback from "./Feedback";
import List from "./List";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './homepage.css'
import Header from './Header'
import Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Homepage() {
    // Data for cards to reduce repetition
    const featuredCards = [
        { title: "Flu Vaccine", description: "Find out about the flu vaccine, who should get it, when to get it, and common side effects.",link:'/medicines/' },
        { title: "Shingles Vaccine", description: "Find out about the shingles vaccine, who should get it, when it's recommended, and common side effects.",link:'/medicines/' },
        { title: "HPV Vaccine", description: "Discover details about the HPV vaccine, including who should receive it, how it prevents certain cancers, and the recommended age range for vaccination.",link:'/medicines' },
        { title: "Women's health", description: "Information and support on health, wellbeing, conditions and screening." ,link:'/medicines/'},
        { title: "Men's Health", description: "Learn about key health issues affecting men, including prostate health, heart disease, and others." ,link:'/medicines/'},
        { title: "Sexual Health", description: "Find information about sexually transmitted infections (STIs), sexual wellbeing, and where to get testing and treatment.",link:'/medicines/' },
        { title: "Mental Health", description: "Find information and support for managing mental health conditions, including anxiety, depression, and stress.",link:'/medicines/' },
        { title: "Diabetes", description: "Get advice on managing diabetes, including symptoms, treatments, dietary advice, and monitoring blood sugar levels.",link:'/medicines/' },
    ];
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
        height: '70vh'
    };
    return (
        <div>
            <main>
                <Header />
                <hr />
                {/* feedbackcomponent */}
                <Feedback />
                <div className="slide-container">
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
                                <div style={{ ...divStyle, 'backgroundImage': `url(${pic.url})` }}>
                                    <Cardtype2 title={pic.title} description={pic.desc}  className="cardtype2" />
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
                {/* cards to display */}
                <div className="cards">
                    <div className="card1">
                        <Card title="Health A to Z" description="Find out about conditions, symptoms and treatments, including what to do and when to get help"  />
                    </div>
                    <div className="card1">
                        <Card title="Medicines A to Z" description="Find out about conditions, symptoms and treatments, including what to do and when to get help" link='/medicines/A' />
                    </div>
                </div>
                {/* cards to display */}
                <div className="belowcard">
                    <List />
                    <Cardtype3
                        title="🤔 Concerned About a Symptom? We're Here to Help! 🌟"
                        description="If you're feeling uneasy about a symptom and don't know what to do next, AegleCove is just a click away!"
                        description2="🌐 Visit: "
                        link="mailto:AegleCove@outlook.com"
                        description3="Your health matters for AegleCove..💙"
                        className="card2"
                    />
                </div>
                <div className="feature">
                    <h1 className="Showcasedheading">Featured For Better Health Awareness</h1>
                    <div className="featured">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        > 
                            {featuredCards.map((card, index) => (
                                 
                                <SwiperSlide> <Card key={index} title={card.title} description={card.description} link={card.link.concat(card.title)} className="Card1" /> </SwiperSlide>
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
