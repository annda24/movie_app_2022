import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './routes/Home';
import About from './routes/About';
import Navigation from './component/Navigation'
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/About" element={<About />}/>
        <Route path="/movie_detail" element={<Detail />}/>
        {/* 주소가 ~/~일때 해당 화면을 열게끔 기능만 생성된 것으로 Navigation에서 ~/~로 이동하는 링크/a를 생성해야함*/}
      </Routes>
    </BrowserRouter>    
  )
}

export default App