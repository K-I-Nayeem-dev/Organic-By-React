import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const Deal = () => {
  return (
    <section id='deal'>
        <Container>
        <Row>
            <Col lg={6}>
                <div className="deal_item">
                    <div className="deal_head">
                        <h2>Flash Deals Of The Week</h2>
                    </div>
                    <div className="deal_text">
                        <h3>Hurry Up And Get 25% Discount</h3>
                        <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                    </div>
                    <div className="deal_btn">
                        <a href="#d">Shop Now</a>
                    </div>
                    <div className="deal_countdown d-flex">
                        <div className="deal_day">
                            <h6>00</h6>
                            <p>Days</p>
                        </div>
                        <div className="deal_day">
                            <h6>00</h6>
                            <p>Hours</p>
                        </div>
                        <div className="deal_day">
                            <h6>00</h6>
                            <p>Minutes</p>
                        </div>
                        <div className="deal_day">
                            <h6>00</h6>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <img src="images/deal.png" className='w-100' alt="deal" />
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Deal