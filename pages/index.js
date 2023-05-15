
import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'
import Navbar from '../components/NavBar'
import CardNews from '../components/CardsNews'


export default function Home() {
  return (
    <PageLayout title='NewsApp - Home'>
        <div className={styles.container}>
          <Navbar />
          <h1 className={styles.title}>Welcome de NewsApp the best App for reading News</h1>
          <h2 className={styles.contentApp}>¿How is the News App?</h2>
          <p className={styles.containerDescription}>The News App is a new alternative to keep you up to date on what is happening in your country, on topics such as Sports, Health, Technology, Business, Entertainment, Science and news in general.</p>

          <h2 className={styles.contentApp}>¿How we work?</h2>
          <p className={styles.containerDescription}>Actually it is very simple, you have a navigation bar in which you can go to the different categories of news that our application has. Once inside the section you want to read, our site will show you a selection of news on that topic.</p>

          <h1 className={styles.importantInfo}>COMING SOON</h1>
          <CardNews />
        </div>
    </PageLayout>   
  )
}
