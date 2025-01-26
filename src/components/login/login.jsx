import './login.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="logo"></div>
          <h2>Login with email</h2>
          <p>
            "Welcome back to Novels N Roses! Unlock a world of stories, thoughtful reviews, 
            and a community of book lovers. Let your reading journey blossom!"
          </p>
          <form>
            <input type="text" id="Email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          {/* Link to Sign Up Page */}
          <p>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
