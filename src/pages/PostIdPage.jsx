import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/UseFetching.jsx";
import PostService from "../API/PostService.js";
import Louder from "../components/Ui/Louder/Louder.jsx";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data)
  })
  const [fetchComments, idComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      <h1>you opened the post page with id={params.id}</h1>
      {isLoading ? <Louder/> : <div>{post.id}. {post.title}</div>}
      <h1 style={{marginTop: '20px'}}>Comments</h1>
      {idComLoading ? <Louder/> : <div>
        {comments.map(comm =>
            <div style={{marginTop: '15px'}}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>)
        }</div>}
    </div>
  );
};

export default PostIdPage;