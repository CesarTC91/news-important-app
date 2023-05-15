import Navbar from '../components/NavBar'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function About () {
    return(
        <PageLayout title='NewsApp - About'>
            <Navbar />
            <h1 className={styles.title}>This is the About Page</h1>
        </PageLayout>
    )
}