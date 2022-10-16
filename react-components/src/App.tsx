import React from 'react';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import MainPage from 'pages/MainPage/MainPage';
import FormPage from 'pages/FormPage/FormPage';
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
        <Route path="/forms" element={<FormPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
