import React from 'react'
import Header from '../components/header'
import Navbar from '@/components/navbar'
import Yonalishlar from '@/components/yonalishlar'
import Priyom from '@/components/priyom'
import Malumot from '@/components/malumot'
import Xizmatkorsatish from '@/components/xizmatkorsatish'
import Vrachi from '@/components/vrachi'
import Footer from '@/components/footer'
import Otziv from '@/components/otziv'
import Karta from '@/components/karta'

const Home = () => {
  return (
    <main className='flex flex-col items-center container mx-auto  '>
      <Navbar/>
      <Header/>
      <Yonalishlar/>
      <Priyom/>
      <Malumot/>
      <Xizmatkorsatish/>
      <Vrachi/>
      <Otziv/>
      <Karta/>
      <Priyom/>
      <Footer/>

    </main>
  )
}

export default Home