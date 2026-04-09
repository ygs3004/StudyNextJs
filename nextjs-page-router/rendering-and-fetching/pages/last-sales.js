import {useEffect, useState} from "react";
import useSWR from "swr";

function LastSalesPage() {
    const [sales, setSales] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    const firebaseURL = "url";

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(firebaseURL)
    //         .then(response => response.json())
    //         .then(data => {
    //             const transformedSales = [];
    //
    //             for (const key in data) {
    //                 transformedSales.push({
    //                     id: key,
    //                     username: data[key].username,
    //                     volume: data[key].volume,
    //                 })
    //             }
    //
    //             setSales(transformedSales);
    //             setIsLoading(false);
    //         })
    //     ;
    // }, []);

    // if (isLoading) {
    //     return <p>Loading...</p>
    // }
    //
    // if (!sales) {
    //     return <p>No data yet</p>
    // }

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data, error} = useSWR(firebaseURL);

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

    if (!data || !sales) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {sales.map(sale => <li key={sale.id}>{sale.username} - {sale.volume}</li>)}
        </ul>
    );
}

export default LastSalesPage;