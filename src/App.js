
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Banner from './components/Banner'
import Create from './components/Create'
import Createcard from './components/Createcard'
import Createnext from './components/Createnext'
import Videocomp from './components/Videocomp'
import Community from './components/Community'
import CommunityCard from './components/CommunityCard'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Create/>
    <Createcard/>
    <Createnext/>
    <Videocomp/>
    <Community/>
    <CommunityCard/>
    <Contact/>

    </>
  )
}

