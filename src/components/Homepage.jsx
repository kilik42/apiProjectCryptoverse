import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
// import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '.';
// import Loader from './Loader';

const Homepage = () => {
  return (
    <>
     <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title> 
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
        <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/news">Show More</Link></Typography.Title>
      </div>
    
    </>
  )
}

export default Homepage
