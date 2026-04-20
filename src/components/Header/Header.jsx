import './Header.css'
import { useState } from "react";
import { HEADER_BUTTONS } from "../../headerButtons"



export default function Header({ selectedOptionProp, setSelectedOption }) {
    const [selectedOption, setLocalSelectedOption] = useState(); 

    function handleClick(item) {
        console.log(`You clicked ${item}`);
        setLocalSelectedOption(item);
        setSelectedOption(item);
    }

    return (
        <>
            <header className="header">
                <div className="header-container">
                    {/* <div className="item"><HeaderTitle /></div> */}
                    <div onClick={() => handleClick("Home")} className="header-title">
                        <img src="logo.png" alt="logo" />
                        <div>SWARN HOMOEOPATHY</div>
                    </div>
                    {/* <div className="item"><HeaderContent /></div> */}
                    <div className="header-content">
                        {HEADER_BUTTONS.map((item) => (
                            <div 
                                key={item} 
                                onClick={() => handleClick(item)} 
                                className={`header-options ${selectedOptionProp === item ? "active-btn" : ""}`}
                            >{item}</div>
                        ))}
                    </div>
                </div>
                
            </header>
        </>
    )
}