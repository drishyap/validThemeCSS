import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
    const [scroll, setSroll] = useState(false);
    const [activeScroll, setActiveScroll] = useState(false);

    const shrinkNavbar = () => {
        window.scrollY >= 20 ? setSroll(true) : setSroll(false)
    }

    window.addEventListener('scroll', shrinkNavbar);

    const changeActiveValue = () => {
        const scrollValue = document.documentElement.scrollTop;
        scrollValue > 800 ? setActiveScroll(true) : setActiveScroll(false)
    }

    window.addEventListener('scroll', changeActiveValue);

    return (
        <div className={scroll ? 'header header-shrink' : 'header'}>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="nav-menu">
                    <li className={activeScroll ? 'nav-items home' : 'nav-items home  active'}>
                        Home
                        <GoChevronDown className="down" />
                        <ul className={scroll ? '.nav-dropdown dropdown-on-scroll' : 'nav-dropdown'}>
                            <li>Home Version One</li>
                            <li>Home Version Two</li>
                            <li>Home Version Three</li>
                            <li>Home Version Four</li>
                            <li>Home Version Five</li>
                            <li>Home Version Six</li>
                            <li>Home Version Seven</li>
                            <li>Home Version Eight</li>
                            <li>Home Version Nine<span>New</span></li>
                            <li>Home Version Ten<span>New</span></li>
                        </ul>
                    </li>
                    <li className={activeScroll ? 'nav-items active' : 'nav-items'}> About</li>
                    <li className="nav-items">Features</li>
                    <li className="nav-items">Overview</li>
                    <li className="nav-items">Pricing</li>
                    <li className="nav-items">Team</li>
                    <li className="nav-items">Contact</li>

                    <span className="line"></span>

                    <li className="nav-items">
                        <span className="login">Login</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
