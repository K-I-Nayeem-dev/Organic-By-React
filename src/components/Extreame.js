import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Extreame = () => {
  return (
    <section id='extream'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="ex_text">
                            <h2>We are Extreamly <span>Organic</span></h2>
                            <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                            <div className="ex_btn">
                                <a href="#f">Shop Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col>
                                <div className="ex_text2">
                                    <div className="ex_t">
                                        <h3>Buy Fruits Online</h3>
                                        <div className="ex_t_btn">
                                            <a href="#f">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="ex_images">
                            <Row>
                            <Col lg={6}>
                                <div className="ex_1">
                                    <img src="images/Acpics (4).png" className='w-100'  alt="Acpics" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="ex_1">
                                    <img src="images/Acpics (1).png" className='w-100' alt="Acpics" />
                                </div>
                            </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default Extreame