import DonateForm from "../DonateForm/DonateForm";
import FooterTitle from "./FooterTitle";
import "./Footer.css";
import { PopupWidget } from 'react-calendly';


export default function Footer() {
    const phoneNumber = "919910538689"; // Replace with the actual number (country code + number)
    const message = encodeURIComponent("Hello, I want to book a video consultation!"); // Encode the message

    return(
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="item"><FooterTitle /></div>
                    <div className="icons-container">

                        {/* <PopupWidget
                            url="https://calendly.com/swarnhomoeopathy/30min"
                            rootElement={document.getElementById("root")}
                            text="Book an Appointment"
                            textColor="#ffffff"
                            color="#CC76A1"
                        /> */}
                       
                        <a
                            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        ><img src="/whatsapp_icon.png" alt="WhatsApp Icon" width="35" height="35" /></a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100063912821075#"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><img src="/facebook_logo.png" alt="WhatsApp Icon" width="30" height="30" /></a>
                        {/* <DonateForm /> */}
                    </div>
                </div>
            </footer>
        </>
    );
}