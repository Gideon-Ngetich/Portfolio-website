import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import BlogContent from "./pages/BlogContent"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/blogs/blog" Component={BlogContent} />
      </Routes>
    </>
  )
}

export default App
