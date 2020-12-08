import React from 'react';
import '../footer/footer.css';

const Footer = () => (
    <div className="footer">
        <div className="flex">
            <div className="source">
                <h2>Source</h2>
                <p>All information on this webpage are up to date and retrieved from Covid-19 Api. Images were downloaded from Pixabay, flatIons and freepik. </p>
            </div>

            <div className ="link">
                <h2>Useful Links</h2>
                <p>WHO website</p>
                <p>wikipedia</p>
            </div>
        </div>
    </div>
);

export default Footer;