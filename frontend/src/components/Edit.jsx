import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:3000/edit/${id}`);
      const data = await res.json();
      const { author, title, content } = data;
      setAuthor(author);
      setTitle(title);
      setContent(content);
      // console.log('author', author, 'content', content, 'title', title);
    };
    getData();
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter author name"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter title"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            name="content"
            id="content"
            value={content}
            rows={5}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Write your content here..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              await fetch(`http://localhost:3000/edit/${id}`, {
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
              navigate("/home");
            }}
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:ring-offset-2 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
