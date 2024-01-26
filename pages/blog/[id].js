import styles from '../../styles/Home.module.css';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(article => {
        return {
            params: { id: article.id.toString() }
        }
    })

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();

    return {
        props: { article: data }
    }
}


const Details = ({ article }) => {
    return (
        <div>
            <h1>A{article.title}</h1>
            <p className={styles.description}>{article.body}</p>
        </div>
    );
}

export default Details;