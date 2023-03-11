import React from 'react';
import '../assets/css/main.css'

import Image from '../assets/images/haze-programmer-writing-code-on-laptop-1.png';

import enote from '../assets/images/IMG_0207.png';
import JvJ from '../assets/images/AppIcon.png'

import Footer from './Footer';
import Banner from './Banner';
import Projects from './Projects';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Main() {

    const navLink = document.querySelector('.nav__link');

    function toggle() {

        navLink.classList.toggle('hide');
    }

    const updateProperties = (elem, state) => {
        elem.style.setProperty('--x', `${state.x}px`)
        elem.style.setProperty('--y', `${state.y}px`)
        elem.style.setProperty('--width', `${state.width}px`)
        elem.style.setProperty('--height', `${state.height}px`)
        elem.style.setProperty('--radius', state.radius)
        elem.style.setProperty('--scale', state.scale)
    }

    document.querySelectorAll('.cursor').forEach(cursor => {
        let onElement

        const createState = e => {
            const defaultState = {
                x: e.clientX,
                y: e.clientY,
                width: 40,
                height: 40,
                radius: '50%'
            }

            const computedState = {}

            if (onElement != null) {
                const { top, left, width, height } = onElement.getBoundingClientRect()
                const radius = window.getComputedStyle(onElement).borderTopLeftRadius

                computedState.x = left + width / 2
                computedState.y = top + height / 2
                computedState.width = width
                computedState.height = height
                computedState.radius = radius
            }

            return {
                ...defaultState,
                ...computedState
            }
        }

        document.addEventListener('mousemove', e => {
            const state = createState(e)
            updateProperties(cursor, state)
        })

        document.querySelectorAll('a, button').forEach(elem => {
            elem.addEventListener('mouseenter', () => (onElement = elem))
            elem.addEventListener('mouseleave', () => (onElement = undefined))
        })
    })

    return (
        <>

            <header>
                <div className="nav ">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <a className='Logo' href='#' >
                            Nico Ihle
                        </a>

                    </div>
                    <div className="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="nav-links">
                        <a href="#" >Aboute Me</a>
                        <a href="#project" >Projects</a>
                        <a href="#footer" >Contact</a>
                    </div>
                </div>
            </header>


            <div className="cursor"></div>

            <Banner />

            <div class="timeline">


                <div data-aos="fade-left" class="containerTM left">
                    <div class="content">
                        <h2>2018</h2>
                        <p>I took my first step in programming. At that point, and I had no clue what i was doing, but I found it fascinating, and that's how it all started.</p>
                    </div>
                </div>


                <div data-aos="fade-right" class="containerTM right">
                    <div class="content">
                        <h2>2019</h2>
                        <p>I started to build 2D pixel games with the game engine Unity. It was fun but also tough.</p>
                    </div>
                </div>


                <div data-aos="fade-left" class="containerTM left">
                    <div class="content">
                        <h2>2020</h2>
                        <p>I started my vocational training as a Fachinformatiker/in Anwendungsentwicklung. I learned standard web development and the basics of HTML, CSS, PHP, and a bit of WordPress.</p>
                    </div>
                </div>

                <div data-aos="fade-right" class="containerTM right">
                    <div class="content">
                        <h2>2021</h2>
                        <p>I fell in love with my first JavaScript framework called React. I had no clue what I was doing, but I tried my best to understand how things work. And also i started to Build my first Mobile App with React-Native it was so much fun.</p>
                    </div>
                </div>

                <div data-aos="fade-left" class="containerTM left">
                    <div class="content">
                        <h2>2022</h2>
                        <p>I've started to learn Swift/UI because I've always been interested in mobile development, so I started in my free time. I built some projects for iPadOS and iOS, and it was fun. I fell in love with programming in Swift.</p>
                    </div>
                </div>
            </div>


            <Projects />
            <Footer />
        </>
    );
}

export default Main;
