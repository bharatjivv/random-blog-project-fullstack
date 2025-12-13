import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto mt-24 p-4 border rounded-lg shadow-sm space-y-3 ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Create a Blog Post
      </h2>
      <input
        type="text"
        name="title"
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="author"
        placeholder="Enter author..."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        type="text"
        name="content"
        rows="5"
        placeholder="Enter content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        onClick={async () => {
          const data = await fetch("http://localhost:3000/newblog", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              author: author,
              content: content,
            }),
          });
          const jsson = await data.json();
          console.log(jsson);
          navigate('/home');
        }}
        className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Add Blog
      </button>
    </div>
  );
}

export default Form;
