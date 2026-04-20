// W A H E G U R U

import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About";
import BookOnline from "./components/BookOnline/BookOnline";
import ContactUs from "./components/ContactUs/ContactUs";
import FAQ from "./components/Faq/Faq";
import { useState, useEffect } from "react";


function App() {
  const [selectedOption, setSelectedOption] = useState();
  
   // Scroll to the top whenever selectedOption changes
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedOption]);

  const renderContent = () => {
    console.log(selectedOption)
    switch (selectedOption) {
      case "About":
        return <About setSelectedOption={setSelectedOption}/>;
      case "Consult Online":
        return <BookOnline />;
      case "Contact Us":
        return <ContactUs setSelectedOption={setSelectedOption}/>;
      case "FAQs":
        return <FAQ />;
      default:
        return <Content setSelectedOption={setSelectedOption} />; // Default component
    }
  };

  return (
    <>
      <Header selectedOptionProp={selectedOption} setSelectedOption={setSelectedOption}/>
      {/* <Content /> */}
      {renderContent()}
      <Footer />
    </>
  );
}

export default App;
