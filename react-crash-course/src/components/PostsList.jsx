import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";

function PostsList({isPosting, onStopPosting}) {
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                {/*<Post author={enteredAuth} body={enteredBody}/>*/}
            </ul>
        </>
    );
};

export default PostsList;