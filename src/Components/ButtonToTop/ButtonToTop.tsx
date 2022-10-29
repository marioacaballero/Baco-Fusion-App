import React from 'react'
import { SiAcclaim } from "react-icons/si"
import style from "./ButtonToTop.module.css"

export const ButtonToTop: React.FC = ()=> {

  const scrollToTop:Function = ()=>{
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  return (
    <div className={style.main}>
    <SiAcclaim className={style.button} height="2rem" width="2rem"
    onClick={()=>{
      scrollToTop()
    }} />
    </div>
  )
}

