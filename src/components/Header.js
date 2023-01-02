import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Header = () => {
  return (
    <section id='head'>
        <Container>
        <Row>
            <Col>
                <header>
                    <p>Welcome To Our Organsio Store.</p>
                </header>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Header