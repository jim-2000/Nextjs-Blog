import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Image from 'next/image'
import lol from '../styles/Jim.module.css'
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



//
const index = ({jims}) => {


  return (
<>
<div className={styles.container}>

<h1 className={styles.title}>Home page</h1>
<hr />

<p className={styles.text} >
  At rebum elitr ipsum et diam dolore. Diam amet et lorem ea ipsum et elitr ipsum erat, nonumy elitr erat clita at no amet gubergren. Ea eos amet consetetur sit dolor eos diam rebum, takimata ipsum consetetur erat gubergren ipsum gubergren aliquyam sed diam, justo erat justo sed et est..
</p>


<div>
      <h1>All Data</h1>
      {
          jims.map(jim => (
               
                   <Link href={ '/data/'+ jim.id }  key={jim.id}>
                   <a className={lol.single}>{jim.name}</a>
                   </Link>
             

          ))
      }
  </div>

<div  className={styles.img_data}>
  <Image src="/img/car.png" height={100} width={100} alt="what " />
</div>
<Link href="/api/hello">
  <a className={styles.btn}>Captaion</a>
</Link>



</div>
</>
  )
}



export default index
