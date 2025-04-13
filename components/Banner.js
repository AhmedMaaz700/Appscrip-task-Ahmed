import React from 'react'
import styles from './Banner.module.css'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <h1 className={styles.title}>Discover our products</h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
                Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
        </div>
    )
}