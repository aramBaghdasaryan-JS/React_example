import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/app.css"
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript 1", body: 'Description'},
        {id: 2, title: "Javascript 2", body: 'Description'},
        {id: 3, title: "Javascript 3", body: 'Description'},
        {id: 4, title: "Javascript 4", body: 'Description'},
    ])
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();

        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})

    }


    return (
        <div className="App">

            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Title"
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Description"
                />
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts} title="Posts about JS"/>
        </div>
    );
}

export default App;
