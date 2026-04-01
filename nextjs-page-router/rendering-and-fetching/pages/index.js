import fs from "node:fs/promises";
import path from "node:path";

function HomePage(props) {
    const {products} = props;

    return (
        <ul>
            { products.map((product, id) =>
                <li key={id}>{product.title}</li>
            )}
        </ul>
    );
}

// 서버 사이드 static generation, 클라이언트로 전달되지 않는 코드
export async function getStaticProps(context) {
    console.log("Re-generating.........................");
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    if (!data) {
        return {
            redirect: { // 강제 redirect 처리
                destination: "/no-data",
            }
        }
    }

    if (data.products.length === 0) {
        return {
            notFound: true, // 강제 notFound 처리
        };
    }

    return {
        props: {
            products: data.products,
        },
        revalidate: 10, // 증분 정적 생성(ISR), 시간마다 페이지를 생성해둠, 개발 중에는 매번 재생성, production 에선 설정한 시간 단위로 재생성
    };
}

export default HomePage;
