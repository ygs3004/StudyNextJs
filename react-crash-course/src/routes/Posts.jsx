import PostsList from "../components/PostsList.jsx";
import {useState} from "react";
import {Outlet} from "react-router-dom";

function Posts() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    return (
        <>
            <Outlet/>
            <main>
                <PostsList/>
            </main>
        </>
    );
}

export default Posts;

export async function loader() {
    const response = await fetch("http://localhost:8080/posts")
    const resData = await response.json();

    console.log(resData)
    return resData.posts;
}