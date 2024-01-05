import React from 'react'

export const Mesagge = ({msg,bgColor}) => {
  
    let styles = {
        padding: "1rem",
        marginBottom : "1rem",
        textAling: "center",
        backgroundColor: bgColor,
        color: "#ffffff",
        fontWeight:"bold",
        backgroundColor: bgColor,
    }
  
    return (

    <div style={styles}>
    <p>{msg}</p>
    </div>
  )
}
