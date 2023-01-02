import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {AiFillStar} from 'react-icons/ai'

const TopSelling = () => {
  return (
    <section id='top_ratedd'>
        <Container>
            <Row>
                <Col>
                    <div className="top_rate_head">
                        <h2>Top Selling Products</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <div className="top_rating">
                        <div className="top_rating_img">
                             <img src="images/topr (5).png" className='w-100' alt="" />
                        </div>
                        <div className="top_rating_text text-center">
                            <h4 className=' m-0 p-0'>Organic Fresh Vegetables</h4>
                            <ul className=' d-flex justify-content-center'>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>$8.00-9.00</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="top_rating">
                        <div className="top_rating_img">
                             <img src="images/topr (6).png" className='w-100' alt="" />
                        </div>
                        <div className="top_rating_text text-center">
                            <h4 className=' m-0 p-0'>Organic Fresh Vegetables</h4>
                            <ul className=' d-flex justify-content-center'>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>$8.00 &nbsp;<del>10.00</del></p>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="top_rating">
                        <div className="top_rating_img">
                             <img src="images/topr (7).png" className='w-100' alt="" />
                        </div>
                        <div className="top_rating_text text-center">
                            <h4 className=' m-0 p-0'>Organic Fresh Vegetables</h4>
                            <ul className=' d-flex justify-content-center'>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>$8.00-9.00</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="top_rating">
                        <div className="top_rating_img">
                             <img src="images/topr (8).png" className='w-100' alt="" />
                        </div>
                        <div className="top_rating_text text-center">
                            <h4 className=' m-0 p-0'>Organic Fresh Vegetables</h4>
                            <ul className=' d-flex justify-content-center'>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>$8.00 &nbsp;<del>10.00</del></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default TopSelling