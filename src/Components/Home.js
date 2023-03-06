import '../assets/css/main.css'
import React from 'react'
import Header from './Header'
import AbouteMe from './Aboutme'
import Footer from './Footer'
import Cards from './cards'

import Me_Home from '../assets/images/emojiME.jpg'

export default function Home() {
  return (
    <>
    
      <section>
        <div className='Container'>

          <span className="stars" ></span>
          <span className="stars"></span>
          <span className="stars" ></span>
          <span className="stars" ></span>
          <span className="stars" ></span>
          <span className="stars" ></span>
          <span className="stars"></span>
          <span className="stars"></span>

          <div className='welcome-container'>

            <div className='welcomeblock1'>
              <div className='welcometext'>
                <p className='welcome-inhalt-p'>Hello,</p>
                <h1 className='welcome-inhalt-h1 '>I'm Nico Ihle</h1>
                <h2 className='AbouteMe-third'>Software Developer and <u>Day Dreamer</u></h2>
                {/* <p className='welcome-inhalt-p'>i love to create things...</p> */}
              </div>
              {/* <Typical className="Animations_Text" steps={['React-Native and Ios', 2000, 'Developer', 3000, ]} loop={Infinity} /> */}
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

          <AbouteMe />
          <Cards />
        </div>
      </section>
      <Footer />
    </>

  )
}