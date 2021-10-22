import React from "react";
import clases from "./NewsCard.module.css";

const NewsCard = (props) => {
  return (
    <div className={clases.card}>
      <div>
        <title>{props.title}</title>
        <h4>{props.text}</h4>
      </div>
    </div>
  );
};

export default NewsCard;
