import React from 'react'
import {FiTwitter} from 'react-icons/fi';
import {BsFacebook} from 'react-icons/bs';
import {BiLogoInstagram} from 'react-icons/bi'
import {BiLogoGmail} from 'react-icons/bi';
import './footer.css'

export default function Footer() {
  return (
    <footer>
        <div className='footerName'>
            <FiTwitter/>
            <BsFacebook />
            <BiLogoInstagram />
             <BiLogoGmail />
        </div>

        <p> &copy; Copyright 2023 ShopEx</p>
    </footer>
  )
}
