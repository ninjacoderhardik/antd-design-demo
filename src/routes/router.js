import React from 'react'
import Blog from '../pages/blog/Blog'
import Contact from '../pages/contact/Contact'
import Work from '../pages/work/Work'
import Allfile from './allfile/Allfile'
import { Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <div>
     <Routes>     
         <Route exact path="/" element={ <Allfile/>}/>
      <Route exact path="/blog" element={ <Blog/>}/>
        <Route exact path="/work" element={<Work/>}/> 
        <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}
export default Router
