
import React from 'react';
import { useEffect, useState } from "react";

function App() {

    const [text, setText] = useState("");
    const [articles, setArticles] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=1&limit=5`);
            const artnews = await res.json();
            setArticles(prevArticles => [...prevArticles, ...artnews]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);



    const handlechange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <h1 className="shop-title">Shopping Scroll App</h1>
            <label className="shop-label">Search for aritcles</label>
            <input className="shop-input" type="text" placeholder="Enter a keyword" onChange={handlechange} />
            <div className="shop-articles">
                {articles.filter(article => article.title.toLowerCase().includes(text.toLowerCase())).map((article,index) => (
                    <div className="article" key={index}>
                        <h2 className="article-title">{article.title}</h2>
                    </div>
                ))}
            </div>

        </>
    )
}
export default App;