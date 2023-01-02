import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col lg={3}>
                    <div className="footer_logo">
                        <a href="#f">Organic</a>
                        <p>Calista Wise 7292 Disctum Av.</p>
                        <p>New York.USA</p>
                        <p>(02)-800-5145-88</p>
                        <p>info@gmail.com</p>
                        <p>www.website.com</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="footer_head">
                        <h5>Customer Service</h5>
                        <ul>
                            <li><a href="#f">Contact us</a></li>
                            <li><a href="#f">Track your order</a></li>
                            <li><a href="#f">Return policy</a></li>
                            <li><a href="#f">Delivery Information</a></li>
                            <li><a href="#f">Help & FAQ</a></li>
                            <li><a href="#f">Warranty & Repair</a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={2}>
                <div className="footer_head">
                        <h5>Categories</h5>
                        <ul>
                            <li><a href="#f">Fruitls & Vegetables</a></li>
                            <li><a href="#f">Dairy Products</a></li>
                            <li><a href="#f">Package Foods</a></li>
                            <li><a href="#f">Beverage</a></li>
                            <li><a href="#f">Health & Wellness</a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="footer_head">
                        <h5>Newsletter</h5>
                        <p>Signup and get a voucher of worth $250.00</p>
                        <div className="footer_input d-flex">
                            <input type="text" placeholder='Your email address' />
                            <div className="footer_btn">
                                <a href="#f">Send</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer