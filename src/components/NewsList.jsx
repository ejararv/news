import React from "react";
import { useHistory } from "react-router";
import NewsCard from "../UI/NewsCard/NewsCard";

const NewsList = ({ news }) => {
  const history = useHistory();
  return (
    <div>
      {news.map((n) => {
        return (
          <>
            <div className="card" key={n.id}>
              <NewsCard title={n.title} text={n.body}>
                <button onClick={() => history.push(`/news/${n.id}`)}>
                  See more
                </button>
              </NewsCard>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default NewsList;
