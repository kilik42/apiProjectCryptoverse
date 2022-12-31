import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';

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
                    <Route exact path="/" component={Homepage}/>
                      
                    <Route exact path="/exchanges" component={Exchanges}/>
                  
                    <Route exact path="/cryptocurrencies" component={Cryptocurrencies}/>
                    
                    <Route exact path="/crypto/:coinId" component={CryptoDetails}/>
                      
                    <Route exact path="/news" component={News}/>
                      
                  </Routes>
                </div>
            
       
      </div>
      <div className="footer">

      </div>

    </div>
  );
}

export default App;
