import React, {useState} from 'react';
import MyInput from "./Ui/input/MyInput.jsx";
import MyButton from "./Ui/button/MyButton.jsx";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form style={{width: '100%'}}>
            <MyInput type='text' placeholder='post name' value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}/>
            <MyInput type='text' placeholder='post descreption' value={post.body} onChange={(e) => setPost({...post, body: e.target.value})}/>
            <MyButton  onClick={addNewPost}>Create Post</MyButton>
        </form>
    );
};

export default PostForm;