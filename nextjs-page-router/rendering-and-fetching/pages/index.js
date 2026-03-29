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
    return {
        props: {
            products: [
                {
                    id: "p1", title: "Product 1",
                },
                {
                    id: "p2", title: "Product 2",
                }
            ]
        }
    }
}

export default HomePage;
