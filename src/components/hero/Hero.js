import React from "react";
import "./Hero.css";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="hero">
            <div className="grid-1">
                <h1 className="hero-heading">
                    It's Time To Create Your Own Business Scheme
                </h1>
                <p className="hero-desc">
                    Celebrated delightful an especially increasing
                    instrument am. Indulgence contrasted sufficient to
                    unpleasant in in insensible favourable.
                </p>
                <div className="buttons">
                    <button className="btn-pr"> Get Started</button>
                    <div className="pulse">
                        <FaPlay className="play-icon" />
                    </div>
                </div>
            </div>
            <div className="grid-2">
                <h1 className="form-heading">
                    Sign Up Today And Receive{" "}
                    <span className="highlight-text">30 Days</span>{" "}
                    FREE Trial.
                </h1>
                <form action="#" className="form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className="input"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email*"
                        className="input"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password*"
                        className="input"
                    />
                    <button className="btn-sub">
                        Register For Free
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Hero;
