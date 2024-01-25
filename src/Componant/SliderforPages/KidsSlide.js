import React from 'react'
import '../Hero/Hero.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const KidsSlide = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const slider1 = "https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Hero/Wedding-Fits-For-Lil-Ones-Salwar-Suits-Kurta-Sets-more_3000x800_8._SX3000_QL85_FMpng_.png"
  const slider2 = "https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Hero/Top-rated-Winterwear_3000x800_10._SX3000_QL85_FMpng_.png"
  const slider3 = "https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Hero/Bestsellers_3000x800_0._SX3000_QL85_FMpng_.png"
  const slider4 = "https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Hero/Bestsellers_3000x800._SX3000_QL85_FMpng_.png"
  const slider5 = "https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Hero/Disney-T-shirts-Sweatshirts_3000x800_4._SX3000_QL85_FMpng_.png"
  const slider6 = "https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Hero/Wedding-Fits-For-Lil-Ones-Salwar-Suits-Kurta-Sets-more_3000x800_8._SX3000_QL85_FMpng_.png"



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
      <Carousel.Item>
      <img src={slider4}  style={{width: '100%'}}/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slider5}  style={{width: '100%'}}/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slider6}  style={{width: '100%'}}/>
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

export default KidsSlide