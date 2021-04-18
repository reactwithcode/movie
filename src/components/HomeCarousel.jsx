import React from 'react'
import { Carousel } from 'react-bootstrap';
import homeBanner1 from './Assets/homeBanner1.png';
import homeBanner2 from './Assets/homeBanner2.jpeg';
import homeBanner3 from './Assets/homeBanner3.jpeg';

const HomeCarousel = () => {
    return (
        <div>
        <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={homeBanner3}
            alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src={homeBanner1}
            alt="Second slide"
            />
            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={homeBanner2}
            alt="Third slide"
            />
            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>   
        </div>
    )
}

export default HomeCarousel;
