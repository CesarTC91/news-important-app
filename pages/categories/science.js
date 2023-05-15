import { useState, useEffect } from 'react'

import styles from '../../styles/Home.module.css'
import PageLayout from '../../components/PageLayout'
import Navbar from '../../components/NavBar'


const Science = () => {
    const [scienceArticles, setScienceArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?category=science&language=en&apikey=2c88e2e908b441b7bcf7353f93d31683')
                const jsonData = await response.json();
                setScienceArticles(jsonData.articles)
            } catch (error) {
                console.error('No science items found', error)
            }
        };
        fetchData();
    }, [])

    return(
        <PageLayout title='NewsApp - Science'>
            <Navbar />
            <h1 className={styles.title}>This is the Science Section</h1>
            <div className={styles.container}>
                {scienceArticles.map((article, index) => {
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

export default Science;