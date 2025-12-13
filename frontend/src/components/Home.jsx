import React, { useState, useEffect } from "react";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:3000/blogs");
      const res = await data.json();
      console.log(res);
      setBlogs([...res]);
    };
    getData();
  }, []);

  return (
    <div className="mt-14 mb-14">
      <ul>
        {blogs &&
          blogs.map((blog, index) => {
            return (
              <div
                key={index}
                className="border border-gray-300 w-5/12 p-5 mx-auto mt-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <li className="list-none space-y-3">
                  <p className="text-xl font-bold text-gray-800">
                    {blog.title}
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    {blog.content}
                  </p>

                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Author -
                    </span>{" "}
                    {blog.author}
                  </p>
                  <div
                    onClick={async () => {
                      const res = await fetch(`http://localhost:3000/delete/${blog.id}`, {
                        method: "DELETE",
                      });
                      const data = await res.json();
                      setBlogs([...data]);
                    }}
                    className="cursor-pointer flex items-center w-6"
                  >
                    💀
                  </div>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default Home;
