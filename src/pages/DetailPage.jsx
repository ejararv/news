import React, { useEffect, useState } from "react";
import "./../styles/styles.css";
import { useParams } from "react-router";
import APIService from "../API/APIService";
import { useFetch } from "../hooks/useFetch";
import Loader from "../UI/Loader/Loader";

const DetailPage = () => {
  const params = useParams();
  const [news, setNews] = useState([]);
  const [comments, setComments] = useState([]);

  const [fetchNewsById, isLoading, error] = useFetch(async (id) => {
    const response = await APIService.getNewsById(id);
    setNews(response.data);
  });

  const [fetchComments, isComentsLoading, commentsError] = useFetch(
    async (id) => {
      const response = await APIService.getCommentsByNewsId(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchNewsById(params.id);
    fetchComments(params.id);
    console.log(news);
  });

  return (
    <div className="container">
      <h4>News detail wih id {params.id}</h4>
      {!isLoading ? <Loader /> : <div className="news_detail">{news.body}</div>}

      <h4>Comments</h4>
      {!isComentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((c) => (
            <div>
              <h4>{c.email}</h4>
              <div>{c.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailPage;
