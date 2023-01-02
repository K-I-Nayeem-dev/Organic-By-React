import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Banner = () => {
  return (
   <section id='Banner' className=' overflow-hidden'>
    <Container>
        <Row className=' d-flex align-items-center '>
            <Col lg={6} className="p-0">
                <div className="banner_text">
                    <h1>ORGANIC FLAVORS FROM <span>FARM</span></h1>
                    <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                    <div className="bnr_btn">
                        <a href="b">Shop Now</a>
                    </div>
                </div>
            </Col>
            <Col lg={6} className=" p-0">
                <div className="banner_img">
                    <img src="images/banner.png" className='w-100 h-100' alt="" />
                </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Banner