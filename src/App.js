import "./App.css";
import { useState } from "react";
// import Comment from "./Comment";

// const comments = [
//   {
//     text: "Taki se",
//     author: {
//       name: "Rafał",
//       avatar:
//         "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
//     },
//   },
// ];

const comment = {
  text: "Taki se",
  author: {
    name: "Rafał",
    avatar:
      "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
  },
};

const Comment = (props) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const { text, author } = props;
  const name = author.name;
  const avatar = author.avatar;
  return (
    <div>
      <img src={avatar} />
      {text} by {name}
      <button
        onClick={() => {
          if (liked) {
            return true;
          }
          setLikes(likes + 1);
          setLiked(true);
        }}
      >
        Like: {likes}
      </button>
      <div>Likes: {likes}</div>
    </div>
  );
};

function App() {
  return <Comment {...comment} />;
  // return comments.map((x) => <Comment text={x.text} author={x.author} />);
}

export default App;
