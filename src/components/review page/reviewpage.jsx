import './reviewpage.css'

const Reviewpage = () => {
  return (
    <div className="book-review-page">
      <h1 className="page-heading">Book Review</h1>

     
      <div className="book-details-box">
        <div className="book-image">
          <img src="https://i.postimg.cc/rwztKHKD/2b6760353435b8ef1a3437385a381039.jpg" alt="Book Cover" />
        </div>

        
        <div className="book-details">
          <h2 className="book-name">Book Name: It Ends Wth Us</h2>
          <p className="book-author">Author: Colleen Hoover</p>
          <p className="book-genre">Genre: Romance</p>
          <p className="book-description">
            Description: It Ends With Us is a book that follows a girl named Lily who has just moved and is ready to start her life after college. Lily then meets a guy named Ryle and she falls for him. As she is developing feelings for Ryle, Atlas, her first love, reappears and challenges the relationship between Lily and Ryle.
          </p>
        </div>
      </div>

      {/* Post Review Button */}
      <button className="post-review-btn">Post Your Review</button>

    
      <div className="reviews-section">
        <h3>User Reviews</h3>
        <div className="review-carousel">
          {/* Individual Review Box */}
          <div className="review-box">
            Great book! Highly recommended.</div>
          <div className="review-box">An insightful read.</div>
          <div className="review-box">Enjoyed every chapter!</div>
          <div className="review-box">Enjoyed every chapter!</div>
          <div className="review-box">Enjoyed chapter!</div>
          <div className="review-box">Maja aa gya!</div>
          <div className="review-box">Good one!</div>
          <div className="review-box">Enjoyed some chapter!</div>
          <div className="review-box">Interesting chapter!</div>
          <div className="review-box">looks have good chapter!</div>
          <div className="review-box">Enjoyed best chapter!</div>
          <div className="review-box">Enjoyed every chapter!</div>
          {/* Add as many review boxes as needed */}
        </div>
      </div>
    </div>
  );
};

export default Reviewpage;
