import classes from './Post.module.css';
import {Link} from "react-router-dom";

function Post({author, body, id}) {
    return (
        <div className={classes.post}>
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{body}</p>
            </Link>
        </div>
    )
}

export default Post;