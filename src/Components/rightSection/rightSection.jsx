import React, { useState, useEffect, useContext } from "react";
import "./rightSection.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from "../Card/card";

export default function RightSection({ categoryName }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [pageLength, setPageLength] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    if (categoryName !== "") {
      fetch(`https://dummyjson.com/products/category/${categoryName}`, {
        signal,
      })
        .then((res) => res.json())
        .then((res) => {

          let len = Math.round(res.products.length / 20);
          let array = Array.from({ length: len ? len : len + 1 }).map(
            (_, i) => i + 1
          );
          setPageLength(array);
          setLoading(false);
          setList(res.products);
        })
        .catch((err) => {
          console.log(`Error : + ${err}`);
          setLoading(false);
          toast.error('Something went wrong', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        });
    } else {
      fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((res) => {
          let arr = res.products.slice(page * 20, (page + 1) * 20);
          let array = Array.from({
            length: Math.round(res.products.length / 20),
          }).map((_, i) => i + 1);

           setPageLength(array);
          setLoading(false);
          setList(arr);
        })
        .catch((err) => {
          console.log(`Error : + ${err}`);
          setLoading(false);
          toast.error('Something went wrong', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        });
    }

    return () => {
      console.log("Request reject by  User");
      controller.abort();
    };
  }, [categoryName, page]);

  

  return (
    <div style={{width:"100%"}}>
      <div className="rightSection">
        {loading ?
         <h1 className="loadingClass">Loading...</h1> :
         list.map((it, idx) => {
          return (
             <Card it={it} key={it.id}/>
          );
        })}
      </div>
      <div className="pagination">
        {pageLength.map((it, idx) => {
          return (
            <button
              className="paginationButton"
              onClick={() => {
                setPage(it - 1);
              }}
              key={it}
            >
              {it}
            </button>
          );
        })}
      </div>
      <ToastContainer />
      
    </div>
  );
}
