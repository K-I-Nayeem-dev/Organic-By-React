import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {HiArrowRight} from 'react-icons/hi'

const Onews = () => {
  return (
    <section id='Onews'>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="new_img">
                        <img src="images/new (2).png" className='w-100' alt="" />
                    </div>
                    <div className="new_text_main d-flex">
                        <div className="new_box">
                            <p>16</p>
                            <p>02</p>
                        </div>
                        <div className="new_text">
                            <h6>Green Onion Knife and salad placed</h6>
                            <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. </p>
                            <div className="new_btn">
                                <a href="#f">Read More <HiArrowRight className='new_right'/></a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="new_img">
                        <img src="images/new (3).png" className='w-100' alt="" />
                    </div>
                    <div className="new_text_main d-flex">
                        <div className="new_box">
                            <p>16</p>
                            <p>02</p>
                        </div>
                        <div className="new_text">
                            <h6>Green Onion Knife and salad placed</h6>
                            <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. </p>
                            <div className="new_btn">
                                <a href="#f">Read More <HiArrowRight className='new_right'/></a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="new_img">
                        <img src="images/new (1).png" className='w-100' alt="" />
                    </div>
                    <div className="new_text_main d-flex">
                        <div className="new_box">
                            <p>16</p>
                            <p>02</p>
                        </div>
                        <div className="new_text">
                            <h6>Green Onion Knife and salad placed</h6>
                            <p>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. </p>
                            <div className="new_btn">
                                <a href="#f">Read More <HiArrowRight className='new_right'/></a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Onews