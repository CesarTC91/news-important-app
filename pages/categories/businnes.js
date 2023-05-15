import { useState, useEffect } from 'react'


import Navbar from '../../components/NavBar'
import PageLayout from '../../components/PageLayout'
import styles from '../../styles/Home.module.css'


const Businnes = () => {
    const [businessArticles, setBusinessArticles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?category=business&language=en&apikey=2c88e2e908b441b7bcf7353f93d31683');
                const jsonData = await response.json();
                setBusinessArticles(jsonData.articles)
            } catch (error) {
                console.error('No businnes items found', error)
            }
        };
        fetchData()
    }, [])

    return(
        <PageLayout title='NewsApp - Business'>
            <Navbar />
            <h1 className={styles.title}>This is the Business Section</h1>
            <div className={styles.container}>
                {businessArticles.map((article, index) => {
                    return(
                        <div key={index}>
                            <h2 className={styles.title}>
                                {article.title}
                            </h2>
                            <p className={styles.containerDescription}>
                                {article.description}
                            </p>
                            <p className={styles.containerContent}>
                                {article.content}
                            </p>
                            <h4 className={styles.containerAuthor}>
                                {article.author}
                            </h4>
                        </div>
                    )
                })}
            </div>
        </PageLayout>
    )
}

export default Businnes;