import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {AiFillStar} from 'react-icons/ai'
const Discover = () => {
  return (
    <section id='disco'>
        <Container>
            <Row className=' text-center'>
                <Col>
                    <div className="disco_head">
                        <h2>Discover Our Products</h2>
                        <ul className=' d-flex m-0 p-0 justify-content-center'>
                            <li><button>Fruits</button></li>
                            <li><button>Vegetable</button></li>
                            <li><button>Juice</button></li>
                            <li><button>Meat</button></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <div className="dis_pro_item d-flex align-items-center">
                        <div className="dis_pro_img">
                            <img src="images/disco (1).png" alt="" />
                        </div>
                        <div className="dis_pro_text w-100">
                            <h6>Organic  Vegetables</h6>
                            <ul className=' d-flex m-0 p-0'>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <p>$8.00&nbsp; <del>$10.00</del></p>
                        </div>
                        <div className="dis_over"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Discover