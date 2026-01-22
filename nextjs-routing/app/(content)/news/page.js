import NewsList from "@/public/component/news-list";
import {getAllNews} from "@/app/lib/news";

export default async function NewsPage() {
    const news = getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news}/>
        </>
    );
}
