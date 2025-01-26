import React, { useState } from "react";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Log or process the form data (replace with your API call logic)
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <img
            src="https://i.postimg.cc/4xW7jFzf/logo.png"
            alt="logo"
            className="loginlogo"
          />
          <h2>Sign up with email</h2>
          <p>
            "A world of stories awaits. Join us to share your journey, one page at a time."
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">GET STARTED</button>
          </form>
          {/* Link to Login Page */}
          <p>
            Already have an account? <Link to="/login">Log in here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
