import { useState } from 'react';
import './Faq.css';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What can homeopathy treat?",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    },
    {
      question: "What can homeopathy treat?",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    },
    {
      question: "What is Homeopathy's Holistic Approach?",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    },
    {
      question: "Prescribing and Fine Tuning",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    },
    {
      question: "But is it Scientific?",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    },
    {
      question: "I am on other drugs for my BP/diabetes, heart problems etc. Should I stop those when I take Homeo medicines?",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    },
    {
      question: "While on the Homeo drugs, if my problems aggravate or increases in intensity suddenly, should I take allopathic medication to tide over the acute crisis and then get back to Homeo medicines?",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    },
    {
      question: "Are there a lot of diet restrictions while I am on the Homeo medicines?",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    },
    {
      question: "What are the areas in which Homeopathy has had success?",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    },
    {
      question: "Where is it ineffective?",
      answer: "We are often asked whether homeopathy has a cure for diseases such as cancers, arthritis, tumors, chronic allergies, skin conditions etc. The answer to such questions is not short or clear cut.\n\nA classical homeopathic doctor will have successfully treated a few such cases, and in others might have had less success. Like the regular medical or allopathic system, homeopathy has its limitations, but again like allopathic medicine, it is a complete science in helping in acute conditions like fevers, coughs, colds, diarrhea, etc. It is also very effective in chronic allergic and longstanding disorders, but this is not the case. Homeopathic doctors successfully treat acute cases (seasonal disorders, childhood disorders, injuries etc.) as well as chronic and terminal disorders, such includes very effective palliative care."
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>What is Homeopathy?</h1>
        <div className="faq-header-content">
          <div className="faq-text">
            <p>
              Homeopathy is a system of medicine based on nature's simple principle of "what can cause can cure" - SIMILIA SIMILIBUS CURANTUR. All great discoveries in almost all sciences have been made by simply observing and mimicking nature. Homeopathy is one such science.
            </p>
            <p>
              Homeopathy believes that each person reacts differently to the same stimulus - this is called individuation, and it is a unique feature of homeopathy. People undergoing homeopathic treatment often wonder about the numerous questions posed by the physician, however, all those questions help the physician to prescribe the exact medicine by which the patient is manifesting a particular ailment, and this is the basis of homeopathy.
            </p>
          </div>
          <div className="faq-illustration">
            <div className="question-mark">
                <img src="FAQ-illustration.png" alt="FAQ Illustration" />
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Let us answer all your doubts.</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${expandedIndex === index ? 'active' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <span>{faq.question}</span>
                <span className={`faq-icon ${expandedIndex === index ? 'rotated' : ''}`}>
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </button>
              {expandedIndex === index && faq.answer && (
                <div className="faq-answer">
                  {faq.answer.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
