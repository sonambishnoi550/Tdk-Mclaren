import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Features from './components/features/Features';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
