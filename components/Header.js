import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

export default function Header() {
    return (
      <header style={{paddingInline: '2rem', paddingTop: '2rem'}}>
        <Navbar />
        <div style={{ width: '100%', height: '1px', backgroundColor: '#c2c4c7', marginTop: '1rem' }}></div>
        <Banner />
      </header>
    )
}