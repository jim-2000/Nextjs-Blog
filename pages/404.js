import Link from 'next/link'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()
    const [check, setcheck] = useState(false)

  
   
// useEffect(()=> {
//     setTimeout(() => {
//         if (setcheck){
//         router.push('/')
//         }
//     },3000)
  
// },[] )  

console.log(check)
  return (
    <div className="not_found">
      <h1>Ooops...</h1>
      <input type="checkbox" value={check} 
      name="chekck" onClick={
        () => setcheck(true) 
      }  />
      <h2>That page cannot be found :(</h2>
      <h1>Don't Come hare again I will brak your born</h1>
      {
          check ? (<p>Going back to the <Link href="/"><a>Homepage</a></Link> is 3 seconds...</p>) : ''
      }
    </div>
  );
}
 
export default NotFound;