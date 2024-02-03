import React from 'react';
import Link from 'next/link';

const posts = [
  { name: 'Post 1', path: '/posts/1' },
  { name: 'Post 2', path: '/posts/2' },
  { name: 'Post 3', path: '/posts/3' },
  { name: 'Post 4', path: '/posts/4' },
];

function Posts() {
  return (
    <div className='posts'>
      <h1>Post List</h1>
      <ul>{posts.map((item,index)=>{
              return (<li key={index}>
                  <Link href={item.path}>{item.name}</Link>
              </li>)
      })}</ul>
    </div>
  );
}

export default Posts;
