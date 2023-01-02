import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {AiFillStar} from 'react-icons/ai'

const FlashDeal = () => {
  return (
    <section id='flash_deal'>
        <Container>
            <Row>
                <div className="flash_head text-center">
                    <h3>Flash Deals of the Week</h3>
                </div>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className="flash_item">
                        <div className="flash_img">
                            <img src="images/flash (1).png" className='w-100' alt="Flash_png" />
                        </div>
                        <div className="flash_time d-flex justify-content-between">
                            <div className="flash_timee">
                                <h6>45</h6>
                                <p>Days</p>
                            </div>
                            <div className="flash_timee">
                                <h6>20</h6>
                                <p>Hour</p>
                            </div>
                            <div className="flash_timee">
                                <h6>30</h6>
                                <p>Min</p>
                            </div>
                            <div className="flash_timee">
                                <h6>30</h6>
                                <p>Sec</p>
                            </div>
                        </div>
                        <div className="flash_text text-center">
                            <h6>Diamond Halo Stud Earrings</h6>
                            <ul className=' d-flex m-0 p-0 justify-content-center'>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>$8.00-9.00</p>
                            <div className="cart_btn">
                                <a href="#f">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="flash_item">
                        <div className="flash_img">
                            <img src="images/flash (2).png" className='w-100' alt="Flash_png" />
                        </div>
                        <div className="flash_time d-flex justify-content-between">
                            <div className="flash_timee">
                                <h6>45</h6>
                                <p>Days</p>
                            </div>
                            <div className="flash_timee">
                                <h6>20</h6>
                                <p>Hour</p>
                            </div>
                            <div className="flash_timee">
                                <h6>30</h6>
                                <p>Min</p>
                            </div>
                            <div className="flash_timee">
                                <h6>30</h6>
                                <p>Sec</p>
                            </div>
                        </div>
                        <div className="flash_text text-center">
                            <h6>Diamond Halo Stud Earrings</h6>
                            <ul className=' d-flex m-0 p-0 justify-content-center'>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>$8.00-9.00</p>
                            <div className="cart_btn">
                                <a href="#f">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default FlashDeal