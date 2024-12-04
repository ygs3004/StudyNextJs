import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";

function PostsList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuth, setEnteredAuth] = useState("");

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authChangeHandler(event){
        setEnteredAuth(event.target.value);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onBodyChange={bodyChangeHandler}
                        onAuthorChange={authChangeHandler}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuth} body={enteredBody}/>
                <Post author="Gun Soo" body="Check out the full course!"/>
            </ul>
        </>
    );
};

export default PostsList;