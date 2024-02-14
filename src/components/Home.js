import React, { Component } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import './Home.css';
import Cat from './Cat';
import Lego from './Lego';
import { Card, CardHeader, CardBody, SimpleGrid, Heading, Text, Image, Stack } from '@chakra-ui/react'
import { FaHtml5, FaReact, FaNodeJs, FaPython, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { DiDjango, DiCss3, } from 'react-icons/di';
import { SiMongodb, SiMysql, SiOpencv } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';
import pdf from '../elements/sydney-5019122.pdf';
import got1 from "../elements/got1.jpg";
import got2 from "../elements/got2.jpg";
import gow1 from "../elements/gow1.jpg";
import ds1 from "../elements/ds1.jpg";
import ds2 from "../elements/ds2.jpg";
import uc1 from "../elements/uc1.jpg";
import Carousel from 'nuka-carousel';

export default class Home extends Component {
  render() {
    return (

      <div>

        <section className='section-1'>
          <div className='section-1-names'>   
           <h1>Sydney Gomes</h1>
            <p className='title'>Bachelor of Engineering in Information Technology</p>
            <h2>App Development | Web Development | UI/UX</h2>
          </div>


          <Cat className="catstyle" />
        </section>

        <section className='section-2' >


          <div>
            <h1>Who Am I?</h1></div>
          <div className='potrait'>
            <img alt="chalk arrow" src={require('../elements/chalk arrow.png')} />
            <Lego />
            <img alt="chalk text" src={require('../elements/chalktxt.png')} />
          </div>
          <div className='about-section'>
            <p>Im a Developer currently in my final year studying Information Technology, undergraduate from Mumbai university. I love developing apps and designing interactive UI for websites. I am skilled in various technologies such as Flutter, React, Firebase, Adobe XD, Figma, Adobe PS, Premiere Pro and much more.</p>
          </div>

          <div className='skill'>
            <div className='skill-1'>
              <div class="skill-bars">
                <div class="bar">
                  <div class="info">
                    <span>Flutter</span>
                  </div>
                  <div class="progress-line flutter">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>Firebase</span>
                  </div>
                  <div class="progress-line firebase">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>C++</span>
                  </div>
                  <div class="progress-line cpp">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>OpenCV</span>
                  </div>
                  <div class="progress-line opencv">
                    <span></span>
                  </div>
                </div>

              </div>

            </div>
            <div className='skill-2'>
              <div class="skill-bars">
                <div class="bar">
                  <div class="info">
                    <span>HTML</span>
                  </div>
                  <div class="progress-line html">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>CSS</span>
                  </div>
                  <div class="progress-line css">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>React</span>
                  </div>
                  <div class="progress-line jquery">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>UI/UX</span>
                  </div>
                  <div class="progress-line python">
                    <span></span>
                  </div>
                </div>

              </div>

            </div>


          </div>


        </section>

        <section>

          <div className='section-3'>
            <div className='projhead'>
              <h1> Over the Years some of my favourite projects</h1>
            </div>
            <div className='projects'>
              <SimpleGrid minChildWidth='230px' columns={3} spacingX='40px' spacingY='60px' style={{ paddingLeft: '2vw', paddingRight: '2vw', paddingTop: '5vw', paddingBottom: '5vw' }}>
                <Card style={{ background: 'rgb(255 0 142 / 55%)', color: 'white' }}>
                  <CardHeader>  <div className='heading-card'>  <Heading size='xl' style={{ display: 'flex', justifyContent: 'space-evenly' }} > <FaPython></FaPython><SiOpencv></SiOpencv></Heading></div></CardHeader>
                  <CardBody>
                    <Image
                      src='https://raw.githubusercontent.com/aerodeval/Vitrtual-Draw/main/demonstration.PNG'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Virtual Draw</Heading>
                      <Text>
                        Virtual Draw is a hands-free digital drawing canvas that utilizes OpenCV to recognize and map finger/object movements onto the screen. The drawing tool can be modified in size and color by using buttons present on the keyboard. The direction of the brush is controlled completely using open source OpenCV software which is built in a way to map the pointer finger/object onto the screen following a calibration screen to measure and record the color of the user’s hand/object.
                      </Text>

                    </Stack>
                  </CardBody>
                </Card>
                <Card style={{ background: 'rgb(160 38 253 / 52%)', color: 'white' }}>
                  <CardHeader>
                    <div className='heading-card'>  <Heading size='xl' style={{ display: 'flex', justifyContent: 'space-evenly' }} > <FaNodeJs /><FaReact /><SiMongodb></SiMongodb></Heading></div>

                  </CardHeader>
                  <CardBody>
                    <Image
                      src='https://user-images.githubusercontent.com/63533466/192144052-a6cc6e87-d30a-40c3-8f7d-47a0ec7a667f.png'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Duel.net</Heading>
                      <Text>
                        Duel.net is a tournament building website which allows user to host tournaments and participate in them, this project allows users to make draws, manage tournaments and update scores alongside also view other tournament details. Duel.net was designed to make a business model based application, here we introduced duel coin which allowed users to buy membership plans in the application.
                      </Text>

                    </Stack>
                  </CardBody>
                </Card>

                <Card style={{ background: 'rgb(219 0 223 / 49%)', color: 'white' }}>
                  <CardHeader>  <div className='heading-card'>  <Heading size='xl' style={{ display: 'flex', justifyContent: 'space-evenly' }} > <FaHtml5></FaHtml5><DiCss3></DiCss3><SiMysql></SiMysql><DiDjango></DiDjango></Heading></div></CardHeader>
                  <CardBody>
                    <Image
                      maxW={{ base: '75%' }}
                      src='https://raw.githubusercontent.com/aerodeval/Covid-19-Resource_Finder/main/Picture1.jpg'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                      style={{ alignItems: 'center' }}
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Covi-Reserve</Heading>
                      <Text>
                        Covi-Reserve we Plan to make the search for covid resources easier and prevent the deaths caused due to lack of resources in the first place. The initial motivation was a need for a proper website which allowed users to search for covid resources at one touch and make the task as easy as possible, so it saves time and makes buying resources very precise and planned as you don’t have to move from shop to shop searching for resources. This would create an easier and simple link and connect the buyer and seller thus making resource finding easier in desperate needs.
                      </Text>

                    </Stack>
                  </CardBody>
                </Card>
              </SimpleGrid>
            </div>
          </div>
        </section>

        <section className='section-5'>
        <div >
          <div className='games-ig'>
        <h1>Besides work I also</h1>
        <h1 className='game-text'>Game</h1>
        </div>
        <div className='carousel'>
     <Carousel defaultControlsConfig= {{
  nextButtonText: '>',
  prevButtonText: '<',

}} style={{marginTop:'2vw'}}>
  <img alt="game" src={got1} ></img>
  <img alt="game" src={gow1} ></img>
  <img alt="game" src={got2} ></img>
  <img alt="game" src={ds1} ></img>
  <img alt="game" src={uc1} ></img>
  <img alt="game" src={ds2} ></img>
  </Carousel></div>
<div className='instagram-section'>
        <h1>Check out my Instagram page for more</h1>

          <InstagramEmbed  url="https://www.instagram.com/p/ClNhEtRha15/" width={350} captioned />
          </div>
          </div>
        </section>
        <section className='section-4'>

          <h1>Contact Me at</h1>
          <div className='contact-us'>
         


            <div className='all-address'>
              <div className='contact'>
                <AiOutlineMail style={{    height:'50px',
    width: '82px'}}></AiOutlineMail>
                <div className='contact-icon'>
                  <span>Email</span>
                  <span>sydney223as@gmail.com</span>
                </div>


              </div>

              <div className='contact'><a href="www.linkedin.com/in/sydneygomes223">
                <FaLinkedin style={{    height:'50px',
    width: '82px'}}></FaLinkedin></a>
                <div className='contact-icon'>
                  <span>LinkedIn</span>
                  <span href="www.linkedin.com/in/sydneygomes223">www.linkedin.com/in/sydneygomes223</span>
                </div>


              </div>
              <div className='contact'><a href='https://github.com/aerodeval'>
                <FaGithub style={{    height:'50px',
    width: '82px'}}></FaGithub></a>
                <div className='contact-icon'>
                  <span>Github</span>
                  <span>https://github.com/aerodeval</span>
                </div>


              </div>
              <div className='contact'><a href="https://www.instagram.com/thatsydney/">
                <FaInstagram  style={{    height:'50px',
    width: '82px'}}></FaInstagram></a>
                <div className='contact-icon'>
                  <span>Instagram</span>
                  <span>https://www.instagram.com/thatsydney/</span>
                </div>


              </div>
            </div>

            <div className='resume-cv'>

<h2>Download my CV</h2>
<a href={pdf} download="Resume Sydney Gomes.pdf" class='btn'>Download</a>

</div>

          </div>

        </section>




      </div>

    )
  }
}
