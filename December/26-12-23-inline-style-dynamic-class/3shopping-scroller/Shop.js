
import React from 'react';
import  { useEffect, useState } from "react";
import './App.css';

function App() {
    const [text, setText] = useState("");
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true); // Set loading state to true before fetching data
            const res = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${page}&limit=5`);
            const artnews = await res.json();
            console.log(page, "-> ", artnews);
            // Only set the fetched data when page is 1, otherwise append to existing data
            setArticles(prevArticles => page === 1 ? [...artnews] : [...prevArticles, ...artnews]);
            setIsLoading(false); // Set loading state to false after data is fetched
        } catch (error) {
            console.log(error);
            setIsLoading(false); // Set loading state to false if there's an error
        }
    }
    
    useEffect(() => {
        setPage(1);
        setArticles([]); // Clear articles when text changes
        fetchData();
    }, [text]);

    useEffect(() => {
        fetchData();
    }, [page]); // Fetch data only when page state changes

    const handlechange = (event) => {
        setText(event.target.value);
        setPage(1); // Reset page to 1 when text state changes
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight && !isLoading) {
            console.log("scrolled");
            setPage(prevPage => prevPage + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <h1 className="shop-title">Shopping Scroll App</h1>
            <label className="shop-label">Search for aritcles</label>
            <input className="shop-input" type="text" placeholder="Enter a keyword" onChange={handlechange} />
            <div className="shop-articles">
                {articles.filter(article => article.title.toLowerCase().includes(text.toLowerCase())).map(article => (
                    <div className="article" key={article.id}>
                            <h2 className="article-title">{article.title}</h2>
                       
                        <p>{article.price}</p>
                        <p>{article.category}</p>
                        <p>{article.description}</p>
                        <img className="img" src={article.image} alt={article.title} />
                        <p>{article.rating.rate}, {article.rating.count}</p>
                    </div>
                ))}
            </div>
            {isLoading && <div>Loading...</div>}
        </>
    )
}
export default App;