import React from "react";
import "./form-input.styles.scss";

const FormInput=({label,type,value,className,backGroundColor,onChange,name})=>{

    return (
    <div className="input-container">
        <input required className={className} name={name}  value={value} type={type} id="input" style={{background:backGroundColor}} onChange={onChange}></input>
        <label htmlFor="input" className={`${value.length>0?"shrink":""}`}>{label}</label>
    </div>
    )
};
export default FormInput;