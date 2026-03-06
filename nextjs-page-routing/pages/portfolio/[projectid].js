import {useRouter} from "next/router";

function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    // router.query.projectid 를 통하여 동적 경로에 접근 가능

    return (
        <div>
            <h1>Portfolio Project Page</h1>
        </div>
    )
}

export default PortfolioProjectPage;