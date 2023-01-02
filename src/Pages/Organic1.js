import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Extreame from '../components/Extreame'
import Offer from '../components/Offer'
import TreandingProducts from '../components/TreandingProducts'
import Healthy from '../components/Healthy'
import FlashDeal from '../components/FlashDeal'
import TopRating from '../components/TopRating'
import TopSelling from '../components/TopSelling'
import Kitchen from '../components/Kitchen'
import Discover from '../components/Discover'


const Organic1 = () => {
  return (
    <div>
        <Header></Header>
        <Menu></Menu>
        <Extreame></Extreame>
        <Offer></Offer>
        <TreandingProducts></TreandingProducts>
        <Healthy></Healthy>
        <FlashDeal></FlashDeal>
        <TopRating></TopRating>
        <TopSelling></TopSelling>
        <Kitchen></Kitchen>
        <Discover></Discover>
    </div>
  )
}

export default Organic1