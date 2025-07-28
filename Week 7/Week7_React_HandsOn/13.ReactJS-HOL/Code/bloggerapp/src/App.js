import React from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  const courses = [
    { id: 1, cname: 'Angular', duration: '4/5/2021' },
    { id: 2, cname: 'React', duration: '6/3/2021' },
  ];

  const books = [
    { id: 1, bname: 'Master React', price: '670' },
    { id: 2, bname: 'Deep Dive into Angular 11', price: '800' },
    { id: 3, bname: 'Mongo Essentials', price: '450'},
  ];

  const blogs = [
    { id: 1, title: 'React Learning', author: 'Stephen Biz', stat: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', author: 'Schewzdenier', stat: 'You can install React from npm.'},
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
      <div style={{ display: 'flex', gap: '30px' }}>
        <div>
          <CourseDetails courses={courses} />
        </div>

        <div style={{ borderLeft: '3px solid green', height: 'auto' }} />

        <div>
          <BookDetails books={books} />
        </div>

        <div style={{ borderLeft: '3px solid green', height: 'auto' }} />

        <div>
          <BlogDetails blogs={blogs} />
        </div>
      </div>
    </div>
  );
}


export default App;
