import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Book = ({ book }) => {
  return (
    <div>
      <div className="card">
        <img src={book.image} alt={book.title} />
        <div className="inner">
          <div>
            <h3>Title: {book.title}</h3>
            <h4>Price: ₹{book.price}</h4>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

const books = [
  {
    image:
      "https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo=",
    title: "Maths",
    price: "756",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    title: "Physics",
    price: "856",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
    title: "Chemistry",
    price: "654",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="cards-row">
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
}

export default App;
