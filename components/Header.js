import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Navbar />
            <div className={styles.divider}></div>
            <Banner />
        </header>
    );
}
