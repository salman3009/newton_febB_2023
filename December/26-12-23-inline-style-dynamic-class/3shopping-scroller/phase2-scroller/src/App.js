
import React from 'react';
import  { useEffect, useState } from "react";

function App() {
    const [text, setText] = useState("");
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);


    const fetchData = async () => {
        try {
            const res = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${page}&limit=5`);
            const artnews = await res.json();
            setArticles(prevArticles => [...prevArticles, ...artnews]);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();
    }, [page]); // Fetch data only when page state changes


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight) {
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
        </>
    )
}
export default App;