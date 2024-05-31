import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import styles from './App.module.css'
import { useEffect, useState } from 'react'


function App() {
  
  return (
    <>
      <Navbar />
      { /*<Hero />
      /*<div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={topAlbumSongs} />
        <Section type='album' title='New Albums' data={newAlbumSongs} />
        <FilterSection data={newAlbumSongs} type='songFilter' title='Songs' filteredData={filteredData} filteredDataValues={filteredDataValues} value={value} handleChange={handleChange} handleToggle={handleToggle}/>
      </div> */}
    </>
  )
}

export default App