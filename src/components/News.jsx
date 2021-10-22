import React, { useEffect, useState } from "react";

const BASE_URL = `https://jsonplaceholder.typicode.com/posts`;
const News = () => {
  const [news, setNews] = useState([]);

  async function fetchData() {
    await fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setNews(data));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {news.map((n) => {
        return (
          <>
            <div className="card" key={n.id}>
              <News title={n.title} text={n.body}></News>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default News;
