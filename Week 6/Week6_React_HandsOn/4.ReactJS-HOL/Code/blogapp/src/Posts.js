import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const data = await response.json();

      // Convert each post into a Post object
      const postsList = data.map(p => new Post(p.id, p.title, p.body));

      this.setState({ posts: postsList });
    } catch (err) {
      this.setState({ error: 'Failed to load posts' });
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <h2>Top 5 Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong><br />
              {post.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
