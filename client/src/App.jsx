import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import BlogContent from "./pages/BlogContent"
import BlogUpload from "./pages/BlogUpload"
import Projects from "./pages/Projects"
import ProjectContent from "./pages/ProjectContent"
import Loader from './components/Loader'
import Contacts from "./pages/Contacts"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/blogs/blog" Component={BlogContent} />
        <Route path="/blogUpload" Component={BlogUpload} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contacts" Component={Contacts} />
        <Route path="/projects/:projectID" Component={ProjectContent} />

      </Routes>
    </>
  )
}

export default App
