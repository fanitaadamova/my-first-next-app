import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";


const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, []);

    return (
        <>
            <Head >
                <title>Blog article | 404 page</title>
                <meta name="keywords" content="404" />
            </Head>
            <div className="not-found">
                <h1>Oooops.....</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to the <Link href="/">Homepage</Link></p>
            </div>
        </>
    );
}

export default NotFound;