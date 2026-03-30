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
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return {
        props: {
            products: data.products,
        }
    }
}

export default HomePage;
