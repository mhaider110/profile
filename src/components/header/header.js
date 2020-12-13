import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faBriefcase,
    faAddressCard
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    return (
        <div>
            <div className="nav-bar" id="home">
                <div className="brand-name">mh</div>
                <div className={"menu__toggle-button" + (isMenuOpen ? ' open' : '')} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul className="menu__list-large">
                    <li className="menu__list-item"><a href="#skills"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Skills</a></li>
                    <li className="menu__list-item"><a href="#work"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon> Recent work</a></li>
                    <li className="menu__list-item"><a href="#contact"><FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon> Contact</a></li>
                </ul>
            </div>
            <div>
                <ul className={"menu__list" + (isMenuOpen ? ' show' : '')}>
                    <li className="menu__list-item"><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                    <li className="menu__list-item"><a href="#work" onClick={toggleMenu}>Recent work</a></li>
                    <li className="menu__list-item"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </div>

    )
}
