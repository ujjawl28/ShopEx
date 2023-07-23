import React,{useState} from 'react'
import './main.css';
import LeftSection from '../leftSection/leftSection';
import RightSection from '../rightSection/rightSection';

export default function Main() {
    const [categoryName,setCategoryName] = useState("")

  return (
    <main className='main'>
          <LeftSection setCategoryName={setCategoryName} categoryName={categoryName}/>
          <RightSection categoryName={categoryName} />
    </main>
  )
}
