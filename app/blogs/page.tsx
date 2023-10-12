import React from 'react';
import config from '../config'

const fetchBlogs = async () =>{
  const reqOptions ={
    headers:{
      Authorization:`Bearer ${process.env.API_TOKEN}`
    }
  }

  const request = await fetch(`${config.api}/api/blog?populate=*`,reqOptions);
  const response = await request.json();
  return response;
}

const Blogs = async () => {

  const blogs = await fetchBlogs();
  console.log(blogs);

  return (
    <div className="flex min-h-screen container flex-col items-center justify-between py-24 px-8">
      <h1>Blogs Page</h1>
    </div>
  );
};

export default Blogs;