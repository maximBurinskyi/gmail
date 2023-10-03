import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
// import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
// import {
//   // createBrowserRouter,
//   // RouterProvider,
//   Route,
//   Link,
// } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <RouterProvider>
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />

        <Routes>
          <Route path="/mail" element={<Mail />} />
          <Route path="/" element={<EmailList />} />
        </Routes>
      </div>
    </div>
    // </RouterProvider>
  );
}

export default App;
