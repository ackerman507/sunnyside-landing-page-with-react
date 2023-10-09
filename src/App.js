import facebook from './img/icon-facebook.svg';
import pinterest from './img/icon-pinterest.svg';
import twitter from './img/icon-twitter.svg';
import instagram from './img/icon-instagram.svg';
import orange from './img/image-header.jpg';
import transform from './img/image-transform.jpg';
import stand from './img/image-stand-out.jpg';
import graphic from './img/image-graphic-design.jpg';
import photography from './img/image-photography.jpg';
import emily from './img/image-emily.jpg';
import thomas from './img/image-thomas.jpg';
import jennie from './img/image-jennie.jpg';
import milkbottles from './img/image-gallery-milkbottles.jpg';
import gorange from './img/image-gallery-orange.jpg';
import cone from './img/image-gallery-cone.jpg';
import sugar from './img/image-gallery-sugarcubes.jpg';
import arrow from './img/icon-arrow-down.svg'
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import DivImg from './components/DivImg';

function App() {
  const testimonials = [
    { url: emily, class: 'rounded-circle', 'name': 'Emily R.', 'position': 'Marketing Director', text: 'We put our trust in Sunnyside and they deliverd, making sure our needs were met and deadlines were always hit.' },
    { url: thomas, class: 'rounded-circle', 'name': 'Thomas S.', 'position': 'Chief Operating Officer', text: 'Sunnyside´s enthusiasm coupled with their keen interest in our brand´s success made it a satisfying and enjoyable experience.' },
    { url: jennie, class: 'rounded-circle', 'name': 'Jennie F.', 'position': 'Business Owner', text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' },
  ];
  return (
    <div className="App">
      <Nav />
      <div className='container-fluid p-0'>
        <div className='row m-0 position-relative'>
          <div className='col-md-12 p-0 position-relative'>
            <div className='col-12 d-flex align-items-start justify-content-center text-white'>
              <div className='position-absolute z-3'>
                <h1 className='fraunces z-3 pt-lg-5 fraunces'>WE ARE CREATIVES</h1>
                <img className='z-3 pt-lg-5 arrow' src={arrow} />
              </div>
              <DivImg url={orange} />
            </div>

          </div>

          <div className='col-md-6 m-0 d-flex align-items-center justify-content-center flex-column'>
            <div className='col-7  text-start py-5'>
              <h2>Transform your <br></br> brand</h2>
              <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
              <a href='#' className='fraunces learnyellow'>LEARN MORE</a>
            </div>

          </div>
          <div className='col-md-6 p-0'>
            <DivImg url={transform} />
          </div>
          <div className='col-md-6 p-0'>
            <DivImg url={stand} />
          </div>
          <div className='col-md-6 m-0 d-flex align-items-center justify-content-center flex-column'>
            <div className='col-7  text-start py-5'>
              <h2>Stand out to the right audience</h2>
              <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters. we'll build and extend your brand in digital places.</p>
              <a href='#' className='fraunces learnpink'>LEARN MORE</a>
            </div>
          </div>
          <div className='col-md-6 p-0 position-relative'>
            <div className='col-12 d-flex align-items-end justify-content-center text-info-app'>
              <div className='position-absolute z-3'>
                <h5 className='fraunces z-3 text-center '>Graphic Design</h5>
                <p className='z-3 mb-4'>Great design makes you memorable. We deliver <br></br> artwork that underscores your brand message <br></br>  and captures potentials client's attention.</p>
              </div>
              <DivImg url={graphic} />
            </div>
          </div>
          <div className='col-md-6 p-0 position-relative'>
            <div className='col-12 d-flex align-items-end justify-content-center text-blue'>
              <div className='position-absolute z-3'>
                <h5 className='fraunces z-3 text-center '>Photography</h5>
                <p className='z-3 mb-4'>Increase your credibility by getting the most <br></br> stunning. high-quality photos that improve your <br></br> business image.</p>
              </div>
              <DivImg url={photography} />
            </div>
          </div>
        </div>
        <div className='row m-0'>
          <div className='col-md-12 m-0 text-center my-5'>
            <h5 className='text-secondary mt-5'>CLIENT TESTIMONIALS</h5>
          </div>
          {testimonials.map((testimonial, index) => (
            <div className='col-md-4 m-0 ' key={index}>
              <div className='row d-flex justify-content-center'>
                <div className='col-3 my-4'>
                  <DivImg url={testimonial.url} class={testimonial.class} />
                </div>
                <div className='col-10 mb-5'>
                  <p>{testimonial.text} </p>
                  <h6>{testimonial.name}</h6>
                  <p className='text-muted'>{testimonial.position}</p>
                </div>
              </div></div>
          ))}

          <div className='col-md-3 col-6 p-0'>
            <DivImg url={milkbottles} />
          </div>
          <div className='col-md-3 col-6 p-0'>
            <DivImg url={gorange} />
          </div>
          <div className='col-md-3 col-6 p-0'>
            <DivImg url={cone} />
          </div>
          <div className='col-md-3 col-6 p-0'>
            <DivImg url={sugar} />
          </div>
          <div className='col-md-12 p-0 bg-info-subtle pt-5 text-info-app'>
            <h3>sunnyside</h3>
            <div className='d-inline'>
              <a className='me-5' href='#'>About</a>
              <a className='me-5' href='#'>Services</a>
              <a className='' href='#'>Projects</a>
            </div>
          </div>
          <div className='col-md-12 bg-info-subtle pt-3 pb-5 text-info-app'>
            <div className='d-inline'>
              <a href='#'> <img src={facebook} className="me-3" alt="logo" /></a>
              <a href='#'> <img src={instagram} className="me-3" alt="logo" /></a>
              <a href='#'> <img src={twitter} className="me-3" alt="logo" /></a>
              <a href='#'> <img src={pinterest} className="me-3" alt="logo" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
