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

    return (
        <>
            <section>
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
                                {/* <p className='welcome-inhalt-p'>{`I love to build `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></p> */}
                                {/* <p className='welcome-inhalt-p'>i love to create things...</p> */}
                                {/* <Typical className="welcome-inhalt-p" steps={['I love to build,', 2000, 'APPS & IOT ', 2000, 'projekts', 3000,]} loop={Infinity} /> */}
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