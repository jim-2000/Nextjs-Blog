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
           <div className="cards-container">
                <div className="card html-card">
                <div className="logo" id="html-logo">
                    <i className="fab fa-html5"></i>
                </div>
                <div id="html-title">
                    <h2> {jimja.username} </h2>
                    <h5><em>company: {jimja.company.name}</em></h5>
                </div>
                <div id="html-text-intro">
                    <ul>
                    <li> Address :- {jimja.address.city}s</li>
                    <li> Email :- {jimja.email} </li>
                    <li> website :- {jimja.website}s </li>
                    </ul>
                </div>
                <div>
                <li> Call :- {jimja.phone} </li>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Details;