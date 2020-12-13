import React, { useState } from 'react'
import './header.css'

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
