import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ marginBottom: '10px' }}>
          <b>{blog.title}</b><br />
          <b>{blog.author}</b><br />
          {blog.stat}
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
