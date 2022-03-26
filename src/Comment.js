import { useState } from "react";

const Comment = (props) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const { text, author, avatar } = props;
  return (
    <div>
      <img src={avatar} />
      {text} by {author}
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

export default Comment;
