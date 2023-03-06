import React from 'react';
import '../assets/css/cards.css';
import reactLogo from '../assets/svg/react-logo.svg';
import digital from '../assets/svg/digital-marketing.svg';
import brackets from '../assets/svg/brackets.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cards() {

    AOS.init();
    return (
        <>
            <div className="Home_container3">
                <div className="services-card-wrapper">
                    <div class="services-card interface aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <img src={reactLogo} alt="" />
                        </div>
                        <h5 className='cardsheadline'>React Native</h5>
                        <p>The reason why i love to create apps is the possibility you have when you open a app. And i think a app open something you didnt know beforehand.</p>
                    </div>

                    <div class="services-card development aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                        <div>
                            <img src={brackets} alt="" />
                        </div>
                        <h5 className='cardsheadline'>Website Development</h5>
                        <p> I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts. </p>
                    </div>

                    <div class="services-card marketing aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                        <div>
                            <img src={digital} alt="" />
                        </div>
                        <h5 className='cardsheadline' >Learning</h5>
                        <p> I identify love to explore new things that blows my mind so that i can read everything to be my best to understand and develop new things. </p>
                    </div>
                </div>
            </div>
        </>
    )
}