import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/app.css"
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript 1", body: 'Description'},
        {id: 2, title: "Javascript 2", body: 'Description'},
        {id: 3, title: "Javascript 3", body: 'Description'},
        {id: 4, title: "Javascript 4", body: 'Description'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">

            <PostForm create = {createPost}/>

            <PostList remove={removePost} posts={posts} title="Posts about JS"/>
        </div>
    );
}

export default App;
