import React, { useState } from "react";

const LikeButton = () => {
  let randomLike = Math.floor(Math.random() * 56);
  const [likes, setLikes] = useState({
    like: randomLike,
    click: false,
  });

  const setLike = () => {
    setLikes({
      click: !likes.click,
      like: likes.click ? likes.like - 1 : likes.like + 1,
    });
  };

  return (
    <div>
      <button onClick={setLike}> click</button> <h1>{likes.like}</h1>
    </div>
  );
};

export default LikeButton;
