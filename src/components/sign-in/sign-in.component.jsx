import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../button/button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils"
import {auth} from '../../firebase/firebase.utils'
class SignIn extends React.Component{

    constructor(props){
        super(props)

        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit=async(e)=>{
        e.preventDefault();
        // prevent default has to be called before using fire base auth methods
        // otherwise it wont work
        const {email,password}=this.state;
        try{
            // checking if the inputted email and passowrd match in the db
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:"",
            password:""});
        }
        catch(err){
            console.error(err)
        }
    }
    handleChange=(e)=>{
        const {value,name}=e.target;
        // similar to php assoicative arrays
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
        <CustomButton onClick={signInWithGoogle} backGroundColor="rgba(65, 131, 215, 1)" textContent="SIGN in with google" ></CustomButton>
              
                </div>
                </div>

            </form>
        )
    }
}
export default SignIn;