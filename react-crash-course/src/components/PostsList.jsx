import Post from "./Post.jsx";
import classes from "./PostsList.module.css";

function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="Yoon" body="React.js is Awesome"/>
            <Post author="Gun Soo" body="Check out the full course!"/>
        </ul>
    )
};

export default PostsList;