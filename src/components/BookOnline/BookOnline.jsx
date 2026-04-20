import "./BookOnline.css";
import ConsultationForm from "../ConsultationForm/ConsultationForm";

export default function BookOnline() {
    return (
        <>
            <div className="book-online-container">
                <div className="book-online-content">
                    <div className="book-online-title">Consultation Form</div>
                    <div className="book-online-description">Please fill in the following, to give us a general idea of your problem. We will send a personalized questionnaire to the provided email address. Thank you!</div>
                    <div className="book-online-form">
                        <ConsultationForm />
                    </div>
                </div>
            </div>
            {/* <ConsultationForm /> */}
        </>
    );
}