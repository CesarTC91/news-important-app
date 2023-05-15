/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import Image from 'next/image'

import Navbar from '../../components/NavBar'
import PageLayout from '../../components/PageLayout'
import styles from '../../styles/Home.module.css'

const Sports = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?category=sports&language=en&apikey=2c88e2e908b441b7bcf7353f93d31683');
                const jsonData = await response.json();
                console.log(jsonData)
                setArticles(jsonData.articles);
            } catch (error) {
                console.error('No items found: ', error)
            }
        };
        fetchData();
    }, [])

    return(
        <PageLayout title='NewsApp - Sports'>
            <Navbar />
            <h1 className={styles.title}>This is the Sports Section</h1>
            <div className={styles.container}>
                {articles.map((article, index) => {
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

export default Sports;