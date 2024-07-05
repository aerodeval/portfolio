import React from 'react';
import './Home.css';
import Cat from './Cat';
import Lego from './Lego';
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardHeader, CardBody,  Heading, Text, Image, Stack } from '@chakra-ui/react'
import { FaHtml5, FaReact, FaNodeJs, FaPython, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoLogoFirebase } from "react-icons/io5";
import {  DiCss3, } from 'react-icons/di';
import { SiMongodb, SiOpencv } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';
import pdf from '../elements/sydney-5019122.pdf';
import got1 from "../elements/got1.jpg";
import got2 from "../elements/got2.jpg";
import gow1 from "../elements/gow1.jpg";
import ds1 from "../elements/ds1.jpg";
import ds2 from "../elements/ds2.jpg";
import uc1 from "../elements/uc1.jpg";
import arch from "../elements/arch.jfif";
import projdemo from "../elements/pdemo.mp4";
import nammock from "../elements/namo-mock.png";
import gdown from "../elements/googleplay_en.png"
import sbmock from "../elements/sbyte-mockup.png";
import cymock from "../elements/cyforge-mock.png";
import tameimpala from "../elements/tame-impala.png";
import sydmem from "../elements/sydneys-memoir.png";
import exclusive from "../elements/exclusive.gif";
import grpphoto from "../elements/grp.jfif"
import Carousel from 'nuka-carousel';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiTailwindcss } from "react-icons/si";
import Autoplay from 'embla-carousel-autoplay'


export default function Home()  {
   const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

 
    return (

      <div>

        <section className='section-1'>
          <div className='section-1-names'>
            <h1>Sydney Gomes</h1>
            <p className='title'>Bachelor of Engineering in Information Technology</p>
            <h2 className='role'>App Development | Web Development | UI/UX</h2>
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
            <p align="center">Im a FrontEnd Developer currently working at Jio Platforms Ltd, I completed my Bachelors in IT from Mumbai university. I love developing apps and designing interactive UI for websites. I am skilled in various technologies such as Flutter, React, Angular, React Native, Figma, Adobe PS, Premiere Pro and much more.</p>
          </div>
          
          <div className='skill '>
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
                    <span>Angular</span>
                  </div>
                  <div class="progress-line firebase">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>Python</span>
                  </div>
                  <div class="progress-line cpp">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>React Native</span>
                  </div>
                  <div class="progress-line ReactNative">
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
                    <span>ReactJS</span>
                  </div>
                  <div class="progress-line jquery">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>GraphQl</span>
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

          <div className='section-3 'style={{overflow:"hidden"}} >
            <div className='projhead'>
              <h1> Over the Years some of my favourite projects</h1>
            </div>

  
            <div className='projects'>
            <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Card style={{ background: 'rgb(255 0 142 / 55%)',minHeight:"705px",  color: 'white' }}>
            <CardHeader>
              <div className='heading-card'>
                <Heading size='xl' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <FaPython /><SiOpencv />
                </Heading>
              </div>
            </CardHeader>
            <CardBody>
              <Image
                src='https://raw.githubusercontent.com/aerodeval/Vitrtual-Draw/main/demonstration.PNG'
                alt='Virtual Draw'
                borderRadius='lg'

              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Virtual Draw</Heading>
                <Text>
                  Virtual Draw is a hands-free digital drawing canvas that utilizes OpenCV to recognize and map finger/object movements onto the screen. The drawing tool can be modified in size and color by using buttons present on the keyboard. The direction of the brush is controlled completely using open-source OpenCV software which is built in a way to map the pointer finger/object onto the screen following a calibration screen to measure and record the color of the user’s hand/object.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className="embla__slide">
          <Card style={{ background: 'rgb(160 38 253 / 52%)',minHeight:"705px",  color: 'white' }}>
            <CardHeader>
              <div className='heading-card'>
                <Heading size='xl' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <FaNodeJs /><FaReact /><SiMongodb />
                </Heading>
              </div>
            </CardHeader>
            <CardBody>
              <Image
                src='https://user-images.githubusercontent.com/63533466/192144052-a6cc6e87-d30a-40c3-8f7d-47a0ec7a667f.png'
                alt='Duel.net'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Duel.net</Heading>
                <Text>
                  Duel.net is a tournament building website which allows users to host tournaments and participate in them. This project allows users to make draws, manage tournaments, update scores, and view other tournament details. Duel.net was designed to make a business model based application, introducing duel coin which allows users to buy membership plans in the application.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className="embla__slide">
          <Card  style={{ background: 'rgb(219 0 223 / 49%)', minHeight:"705px",  color: 'white' }}>
            <CardHeader>
              <div className='heading-card'>
                <Heading size='xl' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <FaHtml5 /><DiCss3 /><FaReact />
                </Heading>
              </div>
            </CardHeader>
            <CardBody>
              <Image
                src={tameimpala}
                alt='Tame Impala Project'
                borderRadius='lg'
                style={{ alignItems: 'center' }}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Tame Impala Portfolio</Heading>
                <Text>
                  This project is a tribute to Tame Impala, offering a rich and immersive user experience built with Next.js and the Aceternity UI library. By leveraging these technologies, we've created a dynamic and visually stunning website that showcases Tame Impala's music, visuals, and creative process. The seamless performance and interactive elements ensure fans can deeply engage with and explore the artistry of Tame Impala in an innovative and engaging digital environment.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className="embla__slide">
          <Card style={{ background: 'rgb(219 0 223 / 49%)',minHeight:"705px",  color: 'white' }}>
            <CardHeader>
              <div className='heading-card'>
                <Heading size='xl' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <FaHtml5 /><DiCss3 /><FaReact /><IoLogoFirebase />
                </Heading>
              </div>
            </CardHeader>
            <CardBody>
              <Image
                src={sydmem}
                alt='Sydneys Memoir'
                borderRadius='lg'
                style={{ alignItems: 'center' }}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Sydney's Memoirs</Heading>
                <Text>
                  This web app, built with Next.js and Firebase Authentication, serves as a comprehensive log for all my gaming experiences. By utilizing Next.js, the app delivers fast and smooth performance, while Firebase Authentication ensures secure and easy access. The app allows users to document, track, and review their gaming activities, creating a personalized and interactive platform for gamers to chronicle their journey and share experiences.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className="embla__slide">
          <Card style={{ background: 'rgb(219 0 223 / 49%)',minHeight:"705px",  color: 'white' }}>
            <CardHeader>
              <div className='heading-card'>
                <Heading size='xl' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <FaHtml5 /><DiCss3 /><FaReact /><SiTailwindcss />

                </Heading>
              </div>
            </CardHeader>
            <CardBody>
              <Image
                style={{width:"100%"}}
                src={exclusive}
                alt='Sydneys Memoir'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Ecommerce Website</Heading>
                <Text>
                 Ecommerce website which is a clone of Amazon using Md Rimels design. Built using Tailwind, Bootstrap and ReactJS
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
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
              <Carousel defaultControlsConfig={{
                nextButtonText: '>',
                prevButtonText: '<',

              }} style={{ marginTop: '2vw' }}>
                <img alt="game" src={got1} ></img>
                <img alt="game" src={gow1} ></img>
                <img alt="game" src={got2} ></img>
                <img alt="game" src={ds1} ></img>
                <img alt="game" src={uc1} ></img>
                <img alt="game" src={ds2} ></img>
              </Carousel></div>
            <div className='instagram-section'>
              
                <h1 align='center'>Some of the best moments captured on Playstation by me</h1>
              
            </div>
          </div>
        </section>
        <section className='section-6'>
       
          <div className='namo-app'>
           
            <div >
              <div>

                <div className='namo-banner'>
                  <div className='namo-txt'>
                    <h1>Mera Saansad - NaMo App</h1>
                    <p className='namo-desc'>The NaMo App keeps you updated about the initiatives and achievements of the government led by PM Modi.
                      Here are some designs created by me for the Mera Saansad component in the NaMo app which allows users to view data about the nations MP's and follow their activities.  These user interfaces are strategically designed to not only inform but also empower users to engage with their elected representatives, thereby enhancing social influence and fostering a stronger connection between citizens and MPs.</p>
                  </div>

                  <div className="namo-img">
                    <img alt="namo app" src={nammock} ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
       

        </section>


        <section className='section-7'>
        <Container>
          <div className='sbyte-app '>
             <div className="sb-app-content row" >

              <div className='col'>
                <img alt="sbyte app" src={sbmock} ></img>
              </div>
              <div className='col'>
                <h1 className='sb-head'>Smartbyte Notes</h1>
                <p className='sb-desc'>The Smartbyte Notes app allows students to view notes and catch up with all the study content taught by teachers in classes. All data and notes on the app is encrypted and available to students who have subscribed to the paid courses of the smartbyte.</p>
                <a href="https://play.google.com/store/apps/details?id=com.autodice&hl=en_US"> <img className="gdown-image"
                  alt="google play download" src={gdown} /></a>
              </div>

            </div>
          </div>
          </Container>

        </section>

        <section className='section-8'>
<Container>
          <div className="fy-project">
            <h1 className="cyhead" align='center'>Final Year Project</h1>

            <div className='grpph'>
              <img alt='project-group' className="grpphoto" src={grpphoto}></img>
            </div>
            <div>
              <h1 className="cyhead" align='center'>Cyforge: Forensics App (2023)</h1>
            </div>
            <p className='cy-desc' align='center'>Collaborated with Prof. Dhanushree Adsul to create Cyforge, an innovative
              forensic tool streamlining report generation for cybercrimes on chat based
              platforms. Cyforge incorporates OCR, Audio Text Recognition, Image
              Processing, Text Extraction, and Sentiment Analysis. The tool not only aids
              report creation but also empowers users to manage pastreports efficiently.
              This project significantly reduces forensics officers’ evidence-gathering time,
              automating processes and expediting report generation.
            </p><img alt='arch' className="archphoto" src={arch}></img>
            <div className='row'>

                <div className='cycontainer row'>
              <div className='cyforge-mockup col'>
                <img alt='cyforge-mockup' className="cyappmock" src={cymock}></img>
              </div>
              <div className='cyforge-demo col'>

                <h1 className="cyhead" align="center"> Cyforge: Forensics Report Generator</h1>

              </div>
              </div>

            </div>
            <div className='video-demo row'>
              <video width="800" height="500" controls >
                <source src={projdemo} type="video/mp4" />
              </video>
              <p>Project demonstration
              </p>
            </div>

          </div>
          </Container>
        </section>
              
        
        <section className='section-4'>

          <h1>Contact Me at</h1>
          <div className='contact-us'>



            <div className='all-address'>
              <div className='contact'>
                <AiOutlineMail style={{
                  height: '50px',
                  width: '82px'
                }}></AiOutlineMail>
                <div className='contact-icon'>
                  <span>Email</span>
                  <span>sydney223as@gmail.com</span>
                </div>


              </div>

              <div className='contact'><a href="www.linkedin.com/in/sydneygomes223">
                <FaLinkedin style={{
                  height: '50px',
                  width: '82px'
                }}></FaLinkedin></a>
                <div className='contact-icon'>
                  <span>LinkedIn</span>
                  <span href="https://www.linkedin.com/in/sydneygomes223">linkedin.com/in/sydneygomes223</span>
                </div>


              </div>
              <div className='contact'><a href='https://github.com/aerodeval'>
                <FaGithub style={{
                  height: '50px',
                  width: '82px'
                }}></FaGithub></a>
                <div className='contact-icon'>
                  <span>Github</span>
                  <span>https://github.com/aerodeval</span>
                </div>


              </div>
              <div className='contact'><a href="https://www.instagram.com/thatsydney/">
                <FaInstagram style={{
                  height: '50px',
                  width: '82px'
                }}></FaInstagram></a>
                <div className='contact-icon'>
                  <span>Instagram</span>
                  <span>@thatsydney</span>
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
