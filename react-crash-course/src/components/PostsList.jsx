import classes from "./PostsList.module.css";
import {useEffect, useState} from "react";
import Post from "./Post.jsx";

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            setIsFetching(true);
            const response = await fetch("http://localhost:8080/posts")
            const resData = await response.json();
            setPosts(resData.posts)
            setIsFetching(false);
        }

        fetchPost();
    }, [])

    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setPosts((existingPosts) =>[postData, ...existingPosts])
    }

    return (
        <>
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2> There are no posts yet. </h2>
                </div>
            )}
            {isFetching && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <p>Loading Posts</p>
                </div>
            )}
        </>
    );
};

export default PostsList;