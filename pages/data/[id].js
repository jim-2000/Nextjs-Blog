export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    const paths = data.map(jim => {
        return {
            params: {id:jim.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json()

    return {
        props : {
            jimja:data
        }
    }
}

const Details = ({jimja}) => {
    return (
        <div>
            <h1>{jimja.name}</h1>
            <p>{jimja.email}</p>
            <p>{jimja.website}</p>
            <p>{jimja.phone}</p>
        </div>
    )
}

export default Details;