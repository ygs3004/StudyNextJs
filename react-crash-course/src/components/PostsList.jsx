import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";

function PostsList() {
    return (
        <>
            <NewPost/>
            <ul className={classes.posts}>
                <Post author="Yoon" body="React.js is Awesome"/>
                <Post author="Gun Soo" body="Check out the full course!"/>
            </ul>
        </>
    )
};

export default PostsList;