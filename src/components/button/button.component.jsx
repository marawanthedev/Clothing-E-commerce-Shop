import React from "react";
import "./button.styles.scss";

const Button=({type,textContent,onClick,backGroundColor,isGoogleSignIn,className})=>{

    return (
    <button className={`${isGoogleSignIn?'google-sign-in':""}${className?className:""} custom-btn`} onClick={onClick} type={type} style={{backgroundColor:backGroundColor}}>{textContent.toUpperCase()}</button>
    )
}

export  default Button;