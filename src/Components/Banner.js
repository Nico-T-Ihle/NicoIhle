import '../assets/css/main.css'
import React from 'react'
import { useState, useEffect } from "react";

export default function Home() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["apps", "iot projekts", ""];
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
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
            <section>


                <div class="cursor"></div>


                <div className='Container'>

                    <span className="stars"></span>
                    <span className="stars"></span>
                    <span className="stars"></span>
                    <span className="stars"></span>
                    <span className="stars"></span>
                    <span className="stars"></span>
                    <span className="stars"></span>
                    <span className="stars"></span>

                    <div className='welcome-container'>

                        <div className='welcomeblock1'>
                            <div className='welcometext'>
                                <p className='welcome-inhalt-p'>Hello,</p>
                                <h1 className='welcome-inhalt-h1 '>I'm Nico Ihle</h1>
                                <h2 className='AbouteMe-third'>Software Developer and <u>Day Dreamer</u></h2>
                                <div className="ConectBTN">
                                    <a className='contactBTN' href="https://github.com/Nico-T-Ihle" target="_blank">Github</a>
                                    <a className='contactBTN' href="https://www.linkedin.com/in/nico-ihle?original_referer=http%3A%2F%2Flocalhost%3A3000%2F" target="_blank">Linkedin</a>
                                    <a className='contactBTN' href="https://www.instagram.com/nico.yuy/" target="_blank">Instagram</a>
                                </div>
                            </div>

                        </div>

                        <div className='welcomeblock2'>
                            <div class="iphonex">
                                <div class="front">
                                    <div class="screen">

                                        <div class="screen__front">
                                            <div class="screen__front-speaker"></div>
                                            <div class="screen__front-camera"></div>
                                        </div>
                                    </div>
                                    <div class="front__line"></div>
                                    <div class="front__line front__line-second"></div>
                                </div>
                                <div class="phoneButtons phoneButtons-right"></div>
                                <div class="phoneButtons phoneButtons-left"></div>
                                <div class="phoneButtons phoneButtons-left2"></div>
                                <div class="phoneButtons phoneButtons-left3"></div>
                                <div class="back"></div>
                            </div>

                            <div className='home-animation-container'>
                                <div className='moon'>
                                    <div className='crater crater-1'> </div>
                                    <div className='crater crater-2'> </div>
                                    <div className='crater crater-3'> </div>
                                    <div className='crater crater-4'> </div>
                                    <div className='crater crater-5'> </div>
                                    <div className='shadow'></div>
                                    <div className='eye eye-l'></div>
                                    <div className='eye eye-r'></div>
                                    <div className='mouth'></div>
                                    <div className='blush blush-1'></div>
                                    <div className='blush blush-2'></div>
                                </div>
                                <div className='orbit'>
                                    <div className='rokcet'>
                                        <div className='window'></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>

    )
}