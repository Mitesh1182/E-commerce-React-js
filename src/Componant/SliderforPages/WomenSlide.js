import React from 'react'
import '../Hero/Hero.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const WomenSlide = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const slider1 = "https://m.media-amazon.com/images/G/31/img23/WA/december/p0-hero/image-1701698220054_3000x800._SX3000_QL85_FMpng_.png"
  const slider2 = "https://m.media-amazon.com/images/G/31/img23/WA/december/p0-hero/imae-1701698219960_3000x800._SX3000_QL85_FMpng_.png"



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
     
    </Carousel>

    
    </div>
  )
}

export default WomenSlide;