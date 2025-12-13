import React,{useState} from 'react'

const Service = () => {
  const [show,setShow] =useState(true);
  const toggleShow=() => {
    setShow(show==true?false:true)
  }
  return (
    <div>
      <button onClick={toggleShow}>{show?"Hide":"show"}</button>
      {show&&<h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, corporis? Natus sequi qui itaque doloremque dolorem commodi libero nemo ea, autem amet, sunt eligendi, cupiditate error praesentium fugit minima provident.</h1>}
    </div>
  )
}

export default Service
