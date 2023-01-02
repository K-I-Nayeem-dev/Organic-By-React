import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
const Offer = () => {
  return (
    <section id='offer'>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="offer">
                        <h6>20% off</h6>
                        <h3>Everyday Fresh With Organic</h3>
                        <div className="offer_btn">
                            <a href="#shop">Shop Now</a>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="offer1">
                        <h6>20% off</h6>
                        <h3>Everyday Fresh With Organic</h3>
                        <div className="offer_btn">
                            <a href="#shop">Shop Now</a>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="offer2">
                        <h6>20% off</h6>
                        <h3>Everyday Fresh With Organic</h3>
                        <div className="offer_btn">
                            <a href="#shop">Shop Now</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Offer