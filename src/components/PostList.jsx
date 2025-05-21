import React, {useRef} from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../styles/App.css'

const PostList = ({ posts, title, remove }) => {
const nodeRefs = useRef({});

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Post not found</h1>;
  }


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => {
            if(!nodeRefs.current[post.id]) {
                nodeRefs.current[post.id] = React.createRef()
            }
            return (
          <CSSTransition nodeRef={nodeRefs.current[post.id]}  timeout={500} classNames='post' key={post.id}>

            <PostItem ref={nodeRefs.current[post.id]} remove={remove} number={post.id} post={post}/>
          </CSSTransition>)
            })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
