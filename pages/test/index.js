import  Link  from 'next/link'
import styles from '../../styles/Jim.module.css'
//
export const getStaticProps = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await res.json()
console.log(data)
return {
    props : {
        jims:data
    }
}

}


const test = ({jims}) => {
    return (
        <div>
            <h1>All Data</h1>
            {
                jims.map(jim => (                    
                    <Link href={'/test/' + jim.id } key={jim.id} >
                         <a className={styles.single}>
                            <h5>{jim.name}</h5>                             
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default test
