import { navLinks } from '../constants/index.js';
import {useEffect, useState} from 'react'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Hugo Munoz
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Conteneur flex pour aligner les deux boutons côte à côte sans casser le reste de la navbar */}
                <div className="flex items-center gap-4">
                    <a
                        href="/CV_HugoMunoz_OC.pdf"
                        className="contact-btn group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="inner">
                            <span>Download CV</span>
                        </div>
                    </a>

                    <a href="#contact" className="contact-btn group">
                        <div className="inner">
                            <span>Contact me</span>
                        </div>
                    </a>
                </div>

            </div>
        </header>
    )
}
export default NavBar
