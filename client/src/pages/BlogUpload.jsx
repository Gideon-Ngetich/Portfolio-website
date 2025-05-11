import Quill from 'quill'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const BlogUpload = () => {
    const [value, setValue] = useState('')
  return (
    <div>
        <h2>Add Blog</h2>

        <div>
            <form action="" method="post">
                <div>
                    <label>Blog Tilte</label>
                    <input type="text" placeholder='Blog Title'/>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" placeholder='Author' id='author'/>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />
                </div>
                <div>
                    <ReactQuill />
                </div>
            </form>
        </div>
    </div>
  )
}

export default BlogUpload