import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Kitchen = () => {
  return (
    <section id='kicthen'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="kicthen1">
                        <div className="kicthen_text">
                            <h6>Save Up to 15%</h6>
                            <h2>Healthy Kitchen with Fresh </h2>
                            <div className="ki_btn">
                                <a href="#f">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="kicthen2">
                        <div className="kicthen2_text">
                            <h6>Save Up to 15%</h6>
                            <h2>Healthy Kitchen with Fresh </h2>
                            <div className="ki2_btn">
                                <a href="#f">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Kitchen