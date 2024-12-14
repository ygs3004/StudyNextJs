import classes from "./PostsList.module.css";
import Post from "./Post.jsx";
import {useLoaderData} from "react-router-dom";

function PostsList() {
    const posts =  useLoaderData();
    console.log(posts)

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body}/>)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2> There are no posts yet. </h2>
                </div>
            )}
        </>
    );
};

export default PostsList;