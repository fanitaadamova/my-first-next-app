import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: { articles: data }
    }

}

const Blog = ({ articles }) => {
    return (
        <>
            <Head >
                <title>Blog article | Blog page</title>
                <meta name="keywords" content="blog" />
            </Head>
            <div className="grid">
                {articles.map(article => (
                    <Link href={'/blog/' + article.id} key={article.id} className="card">
                        <h1>A{article.title}</h1>
                    </Link>
                ))}
              
            </div>
        </>
    );
}

export default Blog;