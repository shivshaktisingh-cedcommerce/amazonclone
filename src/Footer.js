import { withTheme } from '@emotion/react'
import { autocompleteClasses } from '@mui/material'
import { flexbox } from '@mui/system'
import React from 'react'

const Footer = () => {
    const style = {
        backgroundColor:'#232F3E',
        color:'white',
        width:'100%',
        marginTop:'2vh',
        height:'10vh',
        padding:'2vw',
        position:'relative',
        bottom:'0',
        display:'flex'
        
    }

    const footer2 ={
      backgroundColor:"#131A22",
      color:'white',
      width:'100%',
      padding:'2vw',
      margin:'auto'


    }
  return (
    <>
    <div style={style}>
      <div style={{width:"10%",margin:"auto"}}>India</div>
      <div style={{width:"10%",margin:"auto"}}>Brazil</div>
      <div style={{width:"10%",margin:"auto"}}>Canada</div>
      <div style={{width:"10%",margin:"auto"}}>U.S.A</div>
      <div style={{width:"10%",margin:"auto"}}>France</div>
      <div style={{width:"10%",margin:"auto"}}>Germany</div>
      <div style={{width:"10%",margin:"auto"}}>Japan</div>
      <div style={{width:"10%",margin:"auto"}}>England</div>
      <div style={{width:"10%",margin:"auto"}}>Spain</div>
    </div>
    <div style={footer2}>Amazon.com</div>
    </>
  )
}

export default Footer