import "./About.css";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

export default function About({ setSelectedOption }) {
    return (
        <>
            <div className="doctor-info-container">
                <div className="doctor-info">
                    <div className="doctor-info-content">
                        <div className="doctor-image">
                            <img src="doctor.jpeg" alt="doctor" />
                        </div>
                        <div className="doctor-details">
                            <div className="doctor-info-title">Meet the Doctor</div>
                            <div className="doctor-name">Dr. Mrs. Jaineet Kaur</div>
                            <div className="doctor-education">BHMS, M.D. (HOM) DU, DNHE (IGNOU)</div>
                            <div className="doctor-specialization">HOMOEOPATHIC PHYSICIAN AND DIET CONSULTANT </div>

                            <div className="doctor-description">Dr Jaineet Kaur is a consultant homoeopath practicing Classical Homoeopathy for the last 12 years. She completed her B.H.M.S from Nehru Homoeopathic Medical College and Hospital affiliated to Delhi University in 2002 with a Gold Medal. Later she also did her M.D.(Hom) in ‘organon of medicine and homoeopathic philosophy’ from the same institution.Her degrees are recognized and accredited by many international organizations and professional bodies including Central Council for Research in Homoeopathy (CCH) ,Govt of India. She has been an ardous worker. She  has  worked  with B.jain Publishers in editing various books on homoeopathy. She has also had her case studies  published in “ The Homoeopathic Heritage” in June 2011 and again in October 2011.</div>
                        </div>
                    </div>
                    <div>
                        <div className="doctor-description-continue">It has been her quest for knowledge and dedication to provide the best that homoeopathy has to offer that has urged her to take up the immensely challenging task of  doing research and compiling dissertation on the topic “Second Prescription in Bronchial Asthma through BogerBoeninghausen Characteristics and Repertory".</div>
                    </div>
                </div>
            </div>
            <div className="clinic-info-container">
                <div className="clinic-info">
                    <div className="clinic-title">
                        About the Clinic
                    </div>
                    <div className="clinic-description">
                        <div>At our homeopathy clinic in the heart of West Delhi, we believe in providing comprehensive and personalized care to each of our patients. We understand that true wellness encompasses not only the absence of physical ailments but also the harmony of mind, body, and spirit. That's why we offer a range of homeopathy services tailored to address your individual needs and promote holistic healing.</div>
                    </div>
                </div>
                <div className="clinic-images-carousel-container">
                    <CCarousel controls>
                        
                        <CCarouselItem>
                            <div className="clinic-images-carousel">
                                    <CImage className="clinic-images" src="/clinic.jpeg" alt="clinic" />
                            </div>
                        </CCarouselItem>
                        <CCarouselItem>
                            <div className="clinic-images-carousel">
                                <CImage className="clinic-images" src="/clinic1.jpeg" alt="clinic" />
                            </div>
                        </CCarouselItem>
                        <CCarouselItem>
                            <div className="clinic-images-carousel">
                                <CImage className="clinic-images" src="/clinic2.jpeg" alt="clinic" />
                            </div>
                        </CCarouselItem>
                        <CCarouselItem>
                            <div className="clinic-images-carousel">
                                <CImage className="clinic-images" src="/clinic3.jpeg" alt="clinic" />
                            </div>
                        </CCarouselItem>
                    </CCarousel>
                </div>
            </div>
            <div className="services-info-container">
                <div className="services-info">
                    <div className="services-title">
                        <div>Curious about homeopathy? Come by our clinic to learn more!</div>
                        <div>
                            <button className="book-button" onClick={() => setSelectedOption("Book Online")}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}