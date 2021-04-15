import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import ParticlesBg from 'particles-bg'
//
const contuct = () => {
    const [clicked, setclicked] = useState(false)
    const router = useRouter()
    
    const handleclick = () => {
        setclicked(true)
    }
    console.log(clicked)

    useEffect(() => {
        setTimeout(() => {
          router.push('/')
        }, 30000)
      }, [handleclick])
//>>>>>>>>>>>>>>>>>>>>>>>>...................................
    return (
        <div>
            <div className="login-page">
                <div className="form">
                    
                {
                    clicked ? (
                        <h1>
                            register time is over dated 
                        </h1>

                    ) : (
                        
                        <form className="login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>login</button>
                        <p className="message" onClick={handleclick} >Not registered? <a href="#">Create an account</a></p>
                        </form>
                    )
                }

                   

                </div>
            </div>
        <ParticlesBg type="cobweb" bg={true} />

        </div>
    )
}
export default contuct ;

// register form 
// <form className="register-form">
//                         <input type="text" placeholder="name"/>
//                         <input type="password" placeholder="password"/>
//                         <input type="text" placeholder="email address"/>
//                         <button>create</button>
//                         <p className="message">Already registered? <a href="#">Sign In</a></p>
//                         </form>