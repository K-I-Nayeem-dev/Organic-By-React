import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {AiTwotoneStar} from 'react-icons/ai'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {CgArrowLongRight} from 'react-icons/cg'
import {CgArrowLongLeft} from 'react-icons/cg'
const TestiSlider = () => {
    var settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <section id='testi'>
    <Container>
        <div className="slick_slider">
            <CgArrowLongRight className='slick-arrow slick-prev'/>
            <CgArrowLongLeft className='slick-arrow slick-prev'/>
        </div>
        <Slider {...settings}>
        <Row className=' d-flex'>
        <Col lg={{span:6, offset:1}}>
                <div className="testi_main">
                    <div className="testi_text">
                        <h3>Testimonial</h3>
                        <img src="images/testip (2).png" alt="Testi_img" />
                        <ul className=' d-flex'>
                            <li><AiTwotoneStar/></li>
                            <li><AiTwotoneStar/></li>
                            <li><AiTwotoneStar/></li>
                            <li><AiTwotoneStar/></li>
                            <li><AiTwotoneStar/></li>
                        </ul>
                        <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="testi_pro d-flex ">
                        <div className="t_pro_img">
                            <img src="images/testip (1).png" alt="" />
                        </div>
                        <div className="t_pro_text">
                            <h5>Flora Smith</h5>
                            <p>UI Designer</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={5}>
                <div className="testi_img text-center">
                    <img src="images/testip (3).png" alt="" />
                </div>
            </Col>
        </Row>
        <Row className=' d-flex'>
        <Col lg={{span:6, offset:1}}>
                <div className="testi_main">
                    <div className="testi_text">
                        <h3>Testimonial</h3>
                        <img src="images/testip (2).png" alt="Testi_img" />
                        <ul className=' d-flex'>
                            <li><AiTwotoneStar/></li>
                            <li><AiTwotoneStar/></li>
                            <li><AiTwotoneStar/></li>
                            <li><AiTwotoneStar/></li>
                            <li><AiTwotoneStar/></li>
                        </ul>
                        <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="testi_pro d-flex ">
                        <div className="t_pro_img">
                            <img src="images/testip (1).png" alt="" />
                        </div>
                        <div className="t_pro_text">
                            <h5>Flora Smith</h5>
                            <p>UI Designer</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={5}>
                <div className="testi_img text-center">
                    <img src="images/testip (3).png" alt="" />
                </div>
            </Col>
        </Row>
        </Slider>
    </Container>
   </section>
  )
}

export default TestiSlider