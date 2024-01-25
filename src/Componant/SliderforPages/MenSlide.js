import React from 'react'
import '../Hero/Hero.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MenSlide = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const slider1 = "https://m.media-amazon.com/images/G/31/img21/MA2023/AFrevamp_winterflip/Menhero/Wimter_bestseller_3000x800._SX3000_QL85_FMpng_.png"
    const slider2 = "https://m.media-amazon.com/images/G/31/img21/MA2023/AFrevamp_winterflip/Menhero/output_t-shirts-shirts-more_3000x800_4._CB574367716_.gif"
    const slider3 = "https://m.media-amazon.com/images/G/31/img21/MA2023/AFrevamp_winterflip/Menhero/output_winter-men-1_3000x800_6._CB574367716_.gif"


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

export default MenSlide;