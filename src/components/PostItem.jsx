import MyButton from "./Ui/button/MyButton.jsx";
import {useNavigate} from "react-router-dom";
import React from "react";

const PostItem = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
        <div ref={ref} className="post">
            <div className="post__content">
                <strong>
                    {props.number}. {props.post.title}
                </strong>
                <p>{props.post.body}</p>
            </div>

            <div className="post__btns">
              <MyButton onClick={() => navigate(`/posts/${props.number}`)}>Open</MyButton>

              <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
});

export default PostItem;
