import React from 'react';
import Posts from "./pages/Posts.jsx";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";
import Navbar from "./components/Ui/Navbar/Navbar.jsx";
import Error from "./pages/Error.jsx";
import AppRouter from "./components/AppRouter.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;