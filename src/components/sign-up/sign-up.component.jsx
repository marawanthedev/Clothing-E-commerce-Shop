import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/button.component"
class SignUp extends React.Component{

    constructor(props){
        super(props);

        this.state={
            displayName:"",
            email:"",
            password:"",
        }
    }
    handleSubmit(e){

        console.log(this.state)
        e.preventDefault();
    }
    handleChange=(e)=>{
        console.log("change")
        const {value,name}=e.target;
       this.setState({[name]:value},()=> console.log(this.setState))
    }
    render(){

        return (
            <form className="sign-up" onSubmit={this.handleSubmit}>
           <div className="header">
           <h2 className="main">I don't Have and an account</h2>
            <h3 className="sub">Sign up with your email and password</h3>
           </div>
           <div className="input-group">
                <FormInput label="Display Name" name="displayName"  value={this.state.displayName}type="text" className="form-input" onChange={this.handleChange}></FormInput>
                <FormInput label="Email" type="email" value={this.state.email}  name="email" className="form-input" onChange={this.handleChange}></FormInput>
                <FormInput label="Password" type="password" name="password"  value={this.state.password}className="form-input" onChange={this.handleChange}></FormInput>
                <FormInput label="Confirm Password" type="password" value={this.state.password} name="password" className="form-input" onChange={this.handleChange}></FormInput>
                <CustomButton type="submit" backGroundColor="black" textContent="SIGN UP" ></CustomButton>
                </div>
        </form>
        )
    }
}
export default SignUp;
