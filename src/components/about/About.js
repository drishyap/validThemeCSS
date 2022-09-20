import React from "react";
import "./About.css";
import about from "../../assets/about.svg";
import { MdDone } from "react-icons/md";

const About = () => {
    return (
        <div className="about">
            <div className="about-grid-1">
                <img src={about} alt="#" />
            </div>
            <div className="about-grid-2">
                <h2 className="about-heading-2">WHY CHOSE US</h2>
                <h1 className="about-heading-1">
                    Designed for startups with expert developer
                </h1>
                <p className="about-desc">
                    Both rest of know draw fond post as. It agreement
                    defective to excellent. Feebly do engage of
                    narrow. Extensive repulsive belonging depending if
                    promotion be zealously as. Preference inquietude
                    ask now are dispatched led appearance. Small meant
                    in so doubt hopes.
                </p>
                <ul className="about-lists">
                    <li className="about-list-items">
                        <div className="head">
                            <MdDone className="tick" />
                            <h3>ROCKET FAST</h3>
                        </div>

                        <span className="list-points">
                            Elderly is detract tedious assured private
                        </span>
                    </li>
                    <li className="about-list-items">
                        <div className="head">
                            <MdDone className="tick" />
                            <h3>CUSTOM FRAMEWORK</h3>
                        </div>

                        <span className="list-points">
                            Do travelling companions contrasted
                        </span>
                    </li>
                    <li className="about-list-items">
                        <div className="head">
                            <MdDone className="tick" />
                            <h3>MINIMAL DESIGN</h3>
                        </div>
                        <span className="list-points">
                            Mistress strongly remember up
                        </span>
                    </li>
                </ul>
                <button className="btn-abt">Read More</button>
            </div>
        </div>
    );
};

export default About;
