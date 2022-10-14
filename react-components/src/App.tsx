import React from 'react';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import MainPage from 'pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
