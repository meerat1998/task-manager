import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>Please <Link to='/login'>login</Link> or <Link to='/signup'>signup</Link> to continue.</p>
    </div>
  );
};

export default Home;
