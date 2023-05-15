import Navbar from '../components/NavBar'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Contact () {
    return(
        <PageLayout title='NewsApp - Contact'>
            <Navbar />
            <h1 className={styles.title}>This is the Contact Page</h1>
            <h3 className={styles.contentApp}>What can do you here</h3>
        </PageLayout>
    )
}