import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import './Content.css'
import Testimonials from "../Testimonials/Testimonials";
import { TESTIMONIAL_DATA } from "../../assets/data";
import { useEffect } from 'react';

export default function Content({ setSelectedOption })  {
    useEffect(() => {
        // Load Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/calendar.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const openCalendly = () => {
        // Wait a moment for the script to be ready, then show popup
        setTimeout(() => {
            if (window.Calendly) {
                window.Calendly.showPopupWidget('https://calendly.com/swarnhomoeopathy/30min');
            } else {
                // Fallback: open in new window if script not loaded
                window.open('https://calendly.com/swarnhomoeopathy/30min', '_blank');
            }
        }, 100);
    };
    return (
        <>
            <div className='first-container'>
                <div className="first-content">
                    <div className="content">
                        <h1>Natural forces within us are the true healers of disease.</h1>
                        <p>Swarn homoeopathy helps the patients to use these natural forces to heal.</p>
                        <button className="book-button" onClick={openCalendly}>Book Online</button>
                    </div>
                    <div className="image">
                        <img src="homepage1.jpeg" alt="medicine picture"/>
                    </div>
                </div>
            </div>
            <div className="divider-content">
                <h1 className="text">Take the First Step Towards Better Health Receive Compassionate, Expert Care</h1>
            </div>
            <div className='second-container'>
                <h1 className="testimonial-title">Hear it from our patients</h1>
                <div className="testimonials">
                    <CCarousel controls>
                        { TESTIMONIAL_DATA.map((testimonial, index) => (
                            <CCarouselItem key={index}>
                                <div className='d-flex justify-content-center'>
                                    <Testimonials {...testimonial} />
                                </div>
                            </CCarouselItem>
                        ))}
                    </CCarousel>
                </div>
            </div>
            <div className='third-container'>
                <div className="book-appointment">
                    <div className="appointment-image">
                        <img src="homepage2.jpeg" alt="medicine picture"/>
                    </div>
                    <div className="appointment-content">
                        <h1>Book your appointment with us today.</h1>
                        <button className="book-button" onClick={openCalendly}>Book Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}