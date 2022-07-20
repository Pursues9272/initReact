import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <Button type="primary">
                <Link to="/home">主页</Link>
            </Button>
            <Button type="primary" danger>
              <Link to="/water">水立方</Link>
            </Button>
            <Button >
              <Link to="/buju">布局</Link>
            </Button>
            <Button type="dashed" danger>
              <Link to="/xaa">redux</Link>
            </Button>
            <Button type="dashed" danger>
              <Link to="/oneds">页面模拟</Link>
            </Button>
        </p>
        <Outlet/>
      </header>
    </div>
  );
}

export default App;
