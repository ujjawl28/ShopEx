import React from 'react'
import Navbar from '../Navbar/Navbar'
import LeftSection from '../leftSection/leftSection'
import RightSection from '../rightSection/rightSection'
import './home.css';
import Footer from '../Footer/footer';
import Main from '../Main/main';
import { Outlet } from 'react-router-dom';

export default function () {

  return (
    <div>
        <header>
        <Navbar />
        </header>
        <Main />
        <Footer />
    </div>
  )
}
