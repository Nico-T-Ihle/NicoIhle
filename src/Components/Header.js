import React from 'react';
import '../assets/css/header.css'

export default function Header() {

    const [toggle, setToggle] = React.useState(false);

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    const text = () => {
        // setToggle(true)
        // if(toggle != false){
        //     document.querySelector(".home-animation-container").style.display = "none";
        // } else {
        //     document.querySelector(".home-animation-container").style.display = "block";
        // }
    }

    return (
        <header>
            <div className='nav-container'>
                <div>
                    <p className='nav-info-text'>Nico Ihle</p>
                </div>

                <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox" />
                <label for="page-nav-toggle" onClick={text}>
                    <svg className="icon--menu-toggle" viewBox="0 0 90 30">
                        <g className="icon-group">
                            <g className="icon--menu">
                                <path d="M 6 0 L 54 0" />
                                <path d="M 6 15 L 54 15" />
                                <path d="M 6 30 L 54 30" />
                            </g>
                            <g className="icon--close">
                                <path d="M 15 0 L 45 30" />
                                <path d="M 15 30 L 45 0" />
                            </g>
                        </g>
                    </svg>
                </label>

                <nav className="main-navigation">
                    <ul>
                        <li><a target="_blank" href="">Aboute Me</a></li>
                        <li><a target="_blank" href="">Projects</a></li>
                        <li><a target="_blank" href="#footer">Contact</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}