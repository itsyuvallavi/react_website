import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-top">
                {/* Add any top section content here if needed */}
            </div>
            <div className="footer-bottom">
                <div>yuvalavi12@gmail.com</div>
                <div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <p>
                        Yuval Lavi. <span className="year">{new Date().getFullYear()}</span> All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;