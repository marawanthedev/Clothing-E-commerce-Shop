import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../button/button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils"
class SignIn extends React.Component{

    constructor(props){
        super(props)

        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit(e){

        alert("Submitted");
        e.preventDefault();
    }
    handleChange=(e)=>{
        const {value,name}=e.target;
       this.setState({[name]:value})
    }
    render(){
        return (
            <form className="sign-in" onSubmit={this.handleSubmit}>
                <div className="header">
                <h2 className="main">I Already Have and an account</h2>
                <h3 className="sub">Sign in with your email and password</h3>
                </div>
                <div className="input-group">
                <FormInput  label="Email" type="email" name="email" value={this.state.email} className="form-input" onChange={this.handleChange}></FormInput>
                <FormInput label="Password" type="password" name="password" value={this.state.password} className="form-input" onChange={this.handleChange}></FormInput>
                <div className="button-group">
                <CustomButton type="submit" backGroundColor="black" textContent="SIGN IN" onClick={this.handleSubmit}></CustomButton>
                {/* google login btn */}
                {/* <CustomButton type="submit" backGroundColor="rgba(65, 131, 215, 1)" textContent="SIGN in with google" ></CustomButton> */}

        <CustomButton onClick={signInWithGoogle} backGroundColor="rgba(65, 131, 215, 1)" textContent="SIGN in with google" ></CustomButton>
              
                </div>
                </div>

            </form>
        )
    }
}
export default SignIn;