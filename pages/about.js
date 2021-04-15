import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import ParticlesBg from 'particles-bg'


//
const about = () => {
    
    return (
       <div>
        <Head>
            <title>About Me </title>
            <meta name="keywords" content="jimlist" />
        </Head>
      
            <h1>About Me</h1>
            <hr />
            At rebum elitr ipsum et diam dolore. Diam amet et lorem ea ipsum et elitr ipsum erat, nonumy elitr erat clita at no amet gubergren. Ea eos amet consetetur sit dolor eos diam rebum, takimata ipsum consetetur erat gubergren ipsum gubergren aliquyam sed diam, justo erat justo sed et est..

            Die was die herzen versuch strenge froher sich mich erfreuet guten, und die nun freundschaft wahn so naht einst weiten..

            At rebum elitr ipsum et diam dolore. Diam amet et lorem ea ipsum et elitr ipsum erat, nonumy elitr erat clita at no amet gubergren. Ea eos amet consetetur sit dolor eos diam rebum, takimata ipsum consetetur erat gubergren ipsum gubergren aliquyam sed diam, justo erat justo sed et est..

        <div>
            <Image src="/img/car.png" className="img_data" height={100} width={100} alt="what " />
        </div>
        <ParticlesBg type="polygon" bg={true} />

        </div>
    )
}

export default about
