import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Components/Home/home';
import cartContext from './cortContext/context';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './Components/Main/main';
import Cart from './Components/Cart/cart';

function App() {

  const [cart,setCart] = useState([]);

  let router = createBrowserRouter([{
    path : "/",
    element : <Home />, 
  },
       {
    path : '/cart',
    element : <Cart/>
     }])

  return (
    <div >
      <cartContext.Provider  value={{cart,setCart}}>
      <RouterProvider router={router}>
     </RouterProvider>
     </cartContext.Provider>
      </div>
  );
}

export default App;
