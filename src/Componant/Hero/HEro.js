import React from 'react'
import '../Hero/Hero.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const slider1 = "https://m.media-amazon.com/images/G/31/img21/MA2024/JanART/Stealdeals/Topscroll/Jackets-sweatshirts_3000x800_3._CB584213459_.png"
    const slider2 = "https://m.media-amazon.com/images/G/31/img21/MA2024/JanART/Stealdeals/Topscroll/GRAB-or-GONE-Offer_3000x800_9._CB584213459_.png"
    const slider3 = "https://m.media-amazon.com/images/G/31/img21/MA2024/JanART/Stealdeals/Topscroll/MFA_PC._CB584070827_.png"
  return (
    <div>

         
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={slider1} style={{width: '100%'}} />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slider2}  style={{width: '100%'}}/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slider3}  style={{width: '100%'}}/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    </div>
  )
}

export default Hero;