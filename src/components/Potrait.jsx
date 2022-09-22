import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img1 from './Img1';
import Img2 from './Img2';
import Img3 from './Img3';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

function Potrait() {
 

  return (
    <div className="mb-8">
      <Carousel 
      responsive={responsive}
        swipeable={true}
  draggable={true}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  >
      <div className='w-full'>
        <Img1/>
       
      </div >
      <div className='w-full'> <Img2/></div>
      <div className='w-full'> <Img3/> </div>
      <div>Item 4</div>
      </Carousel>
    </div>
  );
}

export default Potrait;
