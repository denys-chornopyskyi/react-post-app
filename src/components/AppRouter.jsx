import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts.jsx";
import About from "../pages/About.jsx";
import Error from "../pages/Error.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/error' element={<Error/>}/>
      <Route path='/posts/:id' element={<PostIdPage/>}/>
      {/*<Route path='*' element={<Navigate to='/error'/>}/>*/}
    </Routes>
  );
};

export default AppRouter;