import React from 'react';
import '../assets/css/aboutme.css';
import ProfileImage from '../assets/images/emojiME.jpg';

export default function aboutme() {
    return (
        <>
            <div className="AboutME" >
                <div class="AboutMEInhalt">

                    <div class="section group">
                        <div class="col span_1_of_2">
                            <div className='aboutemecontainer'>
                                <h2 class="Header_About_me">Hi, I'm Nico. Nice to meet you. </h2>
                                <p class="Text_Inhalt_Aboutme">Since beginnig my journey as a Developer i created some nice Projekts.
                                    You can look on them on my Github. I have a serious passion for UI effects,
                                    animations and creating intuitive, dynamic user experiences.
                                    At the time i m learing Java and Swift.
                                    If your intressed on building something amazing then contact me.
                                </p>
                                <button class="glow-on-hover" type="button">Contact-me()</button>
                                {/* <div>
                                    <p class="Text_Inhalt_Aboutme">
                                        <a href="#" class="animated-button1">
                                            <span></span><span></span><span></span><span></span>.Contact-me()</a>
                                    </p>
                                </div> */}
                            </div>
                        </div>
                        <div data-aos="zoom-in-down" class="col span_1_of_2 aos-init aos-animate">

                            <div>
                                <img class="Me_Home" src={ProfileImage} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}