import React from 'react'
import Banner from '../components/Banner'
import Deal from '../components/Deal'
import Detail from '../components/Detail'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Onews from '../components/Onews'
import TestiSlider from '../components/TestiSlider'
import Tproducts from '../components/Tproducts'
import TRated from '../components/TRated'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Menu></Menu>
        <Banner></Banner>
        <Detail></Detail>
        <Tproducts></Tproducts>
        <Deal></Deal>
        <TRated></TRated>
        <TestiSlider></TestiSlider>
        <Onews></Onews>
        <Footer></Footer>
    </div>
  )
}

export default Home