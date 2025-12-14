import React from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import { Routes, Route, Link } from "react-router-dom";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-4 bg-gray-900 shadow-md">
        <h1 className="text-xl font-semibold text-white">Blog App</h1>

        <div className="flex items-center gap-4">
          <Link
            to="/home"
            className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition"
          >
            All Blogs
          </Link>

          <Link
            to="/new"
            className="flex items-center px-4 py-2 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add Blog
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<Form />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
