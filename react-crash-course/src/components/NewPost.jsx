import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost({onCancel}) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuth, setEnteredAuth] = useState("");

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authChangeHandler(event){
        setEnteredAuth(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuth,
        }

        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authChangeHandler}/>
            </p>
            <p className={classes.actions}>
               <button type="button" onClick={onCancel}>Cancel</button>
               <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;