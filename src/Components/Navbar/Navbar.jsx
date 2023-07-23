import React,{useState,useContext} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Navbar.css';
import cartContext from '../../cortContext/context';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
   let {cart} = useContext(cartContext);
   let navigate = useNavigate();
  return (
    <nav className='Navbar'>
        <img src="https://shopex.io/images/logo.png" alt=""  onClick={()=>{navigate('/')}}/>
        <span className='cartIcon' onClick={()=>{
            navigate('/cart');
        }}><AiOutlineShoppingCart /> <span className={cart.length == 0 ? 'hidden' : 'block'}  >{cart.length}</span></span>
    </nav>
  )
}
