import React from 'react';
import '../styles/App.css';

const App = () => {
  return (
    <div>
        <nav id="navbar">
          <ul className="navbar-list">
            <li><a href="#">Football</a></li>
            <li><a href="#">Basketball</a></li>
            <li><a href="#">Tennis</a></li>
            <li><a href="#">Cricket</a></li>
          </ul>
        </nav>
        <main id="main-content" className="news-section">
          <h2>Latest Sports News</h2>
          <article>
            <img src="https://shorturl.at/ltBRY" />
            <h3>hello</h3>
            <p>para</p>
          </article>
          <article>
            <img src="https://shorturl.at/ejvNY" />
            <h3>hello</h3>
            <p>para</p>
          </article>
          <article>
            <img src="https://shorturl.at/hLQRS" />
            <h3>hello</h3>
            <p>para</p>
          </article>
        </main>
        <footer id="footer">
          <p className="footer-content">&copy; 2023 Sports Website. All rights reserved</p>
        </footer>
        {/* Navigation Bar */}

        {/* Main Content Section */}

        {/* Use Below Images for the making articles */}
        {/* Football - https://shorturl.at/ltBRY */}
        {/* Basketball - https://shorturl.at/ejvNY */}
        {/* Tennis - https://shorturl.at/hLQRS */}

        {/* Footer */}
    </div>
  );
};

export default App;
