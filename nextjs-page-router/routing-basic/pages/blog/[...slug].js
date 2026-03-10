import {useRouter} from "next/router";

function BlogPostsPage() {

    const router = useRouter();
    console.log(router.query);
    // http://localhost:3000/blog/2026/12, ["2026", "12"]

    return (
        <div>
            <h1>The Blog Posts</h1>
        </div>
    )
}

export default BlogPostsPage;