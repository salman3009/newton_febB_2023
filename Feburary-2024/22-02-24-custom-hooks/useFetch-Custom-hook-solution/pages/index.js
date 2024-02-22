import React from 'react';
import useFetch from '../components/useFetch';

function Home() {
  const { data, loading, error } = useFetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=1");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      {/* {document.write(data)} */}
      <ul>
      {data && data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}

      </ul>
    </div>
  );
}

export default Home;
