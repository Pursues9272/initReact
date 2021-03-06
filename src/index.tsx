import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import Home from './pages/Home';
// import Water from './pages/water/index';
import Buju from './pages/buju/index';
import ZhujianA from './pages/rx/zhujianA';
import {Provider} from 'react-redux';
import store from './redux/stores/index'
// import configsta from '../src/redux/stores/configureStore'
import AiMone from './pages/ymmn/AiMone';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />}></Route>
                <Route path="/home" element={<Home />}></Route>
                {/* <Route path="/water" element={<Water />}></Route> */}
                <Route path="/buju" element={<Buju />}></Route>
                <Route path="/xaa" element={<ZhujianA />}></Route>
                <Route path="/oneds" element={<AiMone />}></Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
