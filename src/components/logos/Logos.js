import React from "react";
import "./Logos.css";
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';

const Logos = () => {
    return (
        <div className="logos">
            <div className="logo-grid-1">
                <h1 className="logo-heading">
                    We're Trusted by{" "}
                    <span className="highlight-num">2500+</span>{" "}
                    Customer
                </h1>
                <p className="logo-desc">
                    Seeing rather her you not esteem men settle genius
                    excuse. Deal say over you age from. Comparison new
                    ham melancholy son themselves.
                </p>
            </div>
            <div className="logo-grid-2">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
            </div>
        </div>
    );
};

export default Logos;
