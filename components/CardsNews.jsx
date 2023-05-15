/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from '../styles/Card.module.css'


export default function CardNews () {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <Image src='https://s.hdnux.com/photos/01/11/66/24/19359037/4/rawImage.jpg' 
                    alt='write'width={330} height={430}/>
                    <h2>Write your own news</h2>
                    <p>In future versions you will be able to write and publish your own news</p>
                </div>
                <div className={styles.card}>
                    <Image src='https://static.vecteezy.com/system/resources/previews/005/933/486/original/thumbs-up-and-thumbs-down-circle-icons-like-dislike-icons-set-free-vector.jpg' 
                    alt='like' width={300} height={430}/>
                    <h2>You can like or dislike the news</h2>
                    <p>In future versions you will be able to like or dislike news that are of interest to you or not</p>
                </div>
            </div>
        </>
    )
}