import './contactus.css';

function Contactus() {
    return (
        <>
            <div id='contactus' className="contact-us-container">
                {/* Site Map Section */}
                <div className="site-map">
                    <h3>Site Map</h3>
                    <p>All our pages</p>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Sign Up</li>
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>
                        <span className="icon">📞</span> +91 27462843
                    </p>
                    <p>
                        <span className="icon">✉️</span> novelsnroses@gmail.com
                    </p>
                </div>

                {/* Branding Section */}
                <div className="branding">
                    <img
                        src="https://i.postimg.cc/kXb0qJyG/Untitled.png"
                        alt="Novels N Roses"
                        className="logo"
                    />
                </div>
            </div>
        </>
    );
}

export default Contactus;
