export default function Testimonials({name, location, testimonial, image}) {
    return (
        <div className="testimonials-container">
            <div className="testimonials-content">
                <div className="testimonials-content-item">
                    <div className="testimonials-content-item-image">
                        <img className="carousel-image" src={image} alt="testimonials"/>
                    </div>
                    <div className="testimonials-content-item-text">
                        <p className="testimonial-text">{testimonial}</p>
                        <div className="testimonials-contacts">
                            <p className="testimonial-contact-name">{name}</p>
                            <p className="testimonial-contact-location">{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


