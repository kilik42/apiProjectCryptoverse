import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';
import 'antd/dist/reset.css';
// import 'antd/dist/antd.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        
            
                <div className="routes">
                  <Routes>
                    <Route exact path="/" component={Homepage} element={<Homepage/>}/>
                      
                    <Route exact path="/exchanges" component={Exchanges} element={<Exchanges/>}/>
                  
                    <Route exact path="/cryptocurrencies" component={Cryptocurrencies} element={<Cryptocurrencies/>}/>
                    
                    <Route exact path="/crypto/:coinId" component={CryptoDetails} element={<CryptoDetails/>}/>
                      
                    <Route exact path="/news" component={News} element={<News/>}/>
                      
                  </Routes>
                </div>
            
       
      </div>
      <div className="footer">
        <Typography.Title 
        level={5} 
        style={{color: 'white', textAlign: 'center'}}>
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>

        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>


      </div>

    </div>
  );
}

export default App;
