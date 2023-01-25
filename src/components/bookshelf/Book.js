import classes from "./Book.module.css";
const Book = (props) => {
  return (
    <div className={classes["book"]}>
      <img
        src="https://2ality.com/2018/08/impatient-js/cover-epub.jpg"
        alt="book-thumbnail"
      />
      <div className={classes["book-shelf-changer"]}>
        <select>
          <option value="moveTo" disabled>
            Move To...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
      <div className={classes["book-info"]}>
        <h2>Javascript: For Prgrammers</h2>
        <p>Dr. Axel Rauschmayer</p>
      </div>
    </div>
  );
};
export default Book;
