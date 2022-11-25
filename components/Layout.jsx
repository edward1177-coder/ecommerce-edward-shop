import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';


const layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Edward Store</title>
      </Head>
      <Navbar/>
      <main className='main-container'>
        {children}
      </main>
      <Footer/> 
    </div>
  )
}

export default layout