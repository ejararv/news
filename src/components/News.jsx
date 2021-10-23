import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import APIService from "../API/APIService";
import { useFetch } from "../hooks/useFetch";
import LikeButton from "../UI/LikeButton/LikeButton";
import NewsCard from "../UI/NewsCard/NewsCard";

const BASE_URL = `https://jsonplaceholder.typicode.com/posts?_limit=10`;
const News = () => {
  const [news, setNews] = useState([]);
  const history = useHistory();

  const [fetchNews, isLoading] = useFetch(async (limit, page) => {
    const response = await APIService.getAllNews();
    setNews(response.data);
  });

  useEffect(() => {
    fetchNews();
  });
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
              <NewsCard title={n.title} text={n.body}></NewsCard>
              <LikeButton />
              <button onClick={() => history.push(`/news/${n.id}`)}>
                See more
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default News;
