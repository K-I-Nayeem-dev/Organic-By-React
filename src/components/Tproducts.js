import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {FiHeart} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineEye} from 'react-icons/ai'
import {AiTwotoneStar} from 'react-icons/ai'
const Tproducts = () => {
  return (
    <section id='Tproduct'>
      <Container>
        <Row className=' text-center tp_head'>
          <h2>Trending Products Category</h2>
        </Row>
        <Row>
          <Col lg={3}>
            <div className="veg_item">
              <div className="Veg-1 d-flex align-items-center">
                <div className="veg_img">
                  <img src="images/fruit (6).png" alt="fruit" />
                </div>
                <div className="veg_text">
                  <a href="#s">Vegetable</a>
                </div>
              </div>
              <div className="Veg-1 d-flex align-items-center">
                <div className="veg_img">
                  <img src="images/fruit (1).png" alt="fruit" />
                </div>
                <div className="veg_text">
                  <a href="#s">Fruits</a>
                </div>
              </div>
              <div className="Veg-1 d-flex align-items-center">
                <div className="veg_img">
                  <img src="images/fruit (2).png" alt="fruit" />
                </div>
                <div className="veg_text">
                  <a href="#s">Green Vegetable</a>
                </div>
              </div>
              <div className="Veg-1 d-flex align-items-center">
                <div className="veg_img">
                  <img src="images/fruit (3).png" alt="fruit" />
                </div>
                <div className="veg_text">
                  <a href="#s">Onion</a>
                </div>
              </div><div className="Veg-1 d-flex align-items-center">
                <div className="veg_img">
                  <img src="images/fruit (4).png" alt="fruit" />
                </div>
                <div className="veg_text">
                  <a href="#s">Vegetable</a>
                </div>
              </div>
              <div className="Veg-1 d-flex align-items-center">
                <div className="veg_img">
                  <img src="images/fruit (5).png" alt="fruit" />
                </div>
                <div className="veg_text">
                  <a href="#s">Lemon</a>
                </div>
              </div>
            </div>
            <div className="veg_shop mb-5">
                <h4>Fruits For Live Healthy</h4>
                <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                <a href="#f">Shop Now</a>
            </div>
            <div className="veg_shopp ">
                <h4>Fruits For Live Healthy</h4>
                <p>Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                <a href="#f">Shop Now</a>
            </div>
          </Col>
          <Col lg={9}>
             <Row className='row1'>
              <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (1).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (2).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (6).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
             </Row>
             <Row className='row2'>
             <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (3).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (7).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (10).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
             </Row>
             <Row className='row3'>
             <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (4).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (8).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (11).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
             </Row>
             <Row className='row-4'>
             <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (5).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (9).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pro_item">
                  <div className="pro_img">
                    <img src="images/pro (12).png" className='w-100' alt=""/>
                    <div className="pro_over">
                      <ul>
                        <li><a href="#f"><FiHeart/></a></li>
                        <li><a href="#f"><HiOutlineShoppingBag/></a></li>
                        <li><a href="#f"><AiOutlineEye/></a></li>
                      </ul>
                    </div>
                    <div className="pro_star">
                      <ul>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                        <li><a href="#s"><AiTwotoneStar/></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro_text">
                    <h5>Organic Vegetables</h5>
                    <p>$8.00-9.00</p>
                  </div>
                </div>
              </Col>
             </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Tproducts