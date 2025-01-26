import './newbook.css'

const NewBook = () => {
    return (
      <div id='newbook' className="new-book-container">
        <h1 className="heading">Add New Book</h1>
        <div className="form-section">
          
          <div className="image-upload-box">
            <label htmlFor="bookImage" className="image-label">
              Upload Book Image
            </label>
            <input type="file" id="bookImage" className="image-input" />
          </div>
  
         
          <div className="form-fields">
            <input type="text" placeholder="Book Name" className="input-field" />
            <input type="text" placeholder="Author" className="input-field" />
            <input type="text" placeholder="Genre" className="input-field" />
            <textarea
              placeholder="Description of the Book"
              className="textarea-field"
            ></textarea>
            <textarea
              placeholder="Your Review"
              className="textarea-field review-box"
            ></textarea>
          </div>
        </div>
  
       
        <button className="submit-button">Submit</button>
      </div>
    );
  };
  
  export default NewBook;