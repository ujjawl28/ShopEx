import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import cartContext from "../../cortContext/context";
import { useContext } from 'react';
import '../rightSection/rightSection.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card({it}) {
    const { cart, setCart } = useContext(cartContext);

    function addToCart(it) {
      if(!cart.includes(it)){
        setCart([...cart, it]);
        toast.success('Item success added to cart', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else{
        toast.error('Item already in cart', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }   
      }

  return (
    <div className="card" key={it.id}>
              <img src={it.images[0]} className="itemImage" />
              <h2>{it.title}</h2>
              <div className="cardDetails">
                <span className="rating">Rating : {it.rating}⭐</span>
                <span className="rating">
                  Price :<BsCurrencyRupee />
                  {it.price}
                </span>
              </div>
              <button className="btn" onClick={() => addToCart(it)}>
                Add To cart
              </button>
        
            </div>
  )
}
