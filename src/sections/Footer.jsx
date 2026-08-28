import React from 'react'
import { socialImgs } from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <a href="/CV_HugoMunoz_OC.pdf"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:text-white transition-colors"
                    >
                        Download CV
                    </a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath} alt={img.name} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} MUNOZ Hugo | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
