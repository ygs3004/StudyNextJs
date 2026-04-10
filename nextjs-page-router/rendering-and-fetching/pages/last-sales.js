import {useEffect, useState} from "react";
import useSWR from "swr";

const firebaseURL = "https://nextjs-course-e808f-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json";

function LastSalesPage(props) {
    const [sales, setSales] = useState(props.sales);

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data, error} = useSWR(firebaseURL, fetcher);

    useEffect(() => {

        if (data) {
            const transformedSales = [];

            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume,
                })
            }
            setSales(transformedSales)
        }

    }, [data])

    if (error) {
        return <p>Failed to load</p>
    }

    if (!data && !sales) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {sales.map(sale => <li key={sale.id}>{sale.username} - {sale.volume}</li>)}
        </ul>
    );
}

export async function getStaticProps() {
    // 서버 컴퍼넌트의 함수이므로 react hook 사용 불가(ex: useSWR)
    const response = await fetch(firebaseURL);
    const data = await response.json();
    const transformedSales = [];

    for (const key in data) {
        transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
        })
    }

    return {
        props: {
            sales: transformedSales,
            revalidate: 10,
        }
    }
}

export default LastSalesPage;