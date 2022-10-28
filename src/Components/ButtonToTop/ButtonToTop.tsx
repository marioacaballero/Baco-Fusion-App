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
    <SiAcclaim className={style.button} height="3em" width="3em"
    onClick={()=>{
      scrollToTop()
    }} />
    </div>
  )
}

