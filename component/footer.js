import Link from 'next/link'
import styles from  '../styles/Jim.module.css'

const Footer = () => {
    return (
        <footer >
            <p className="copyright">
                copyright @{new Date().getFullYear()} <Link className={styles.span} href="https://github.com/jim-2000" >
                    <a>
                    The jim
                    </a>
                </Link>
            </p>

            <style jsx>{`
            .copyright{
                color: green;
            }
            .copyright a {
                color: tomato;
                font-size: 20px;
                text-decoration: underline;               
            }
            `}
            </style>
        </footer>
    )

    
}



export default Footer;
