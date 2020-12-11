import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/button.component"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
class SignUp extends React.Component{

    constructor(props){
        super(props);

        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleSubmit=async(e)=>{
        const{password,confirmPassword,email,displayName}=this.state;
        e.preventDefault();

        if(password!=confirmPassword){
            alert("Password are not matching");
            return;

        }
        else{

            try{
                // **this function creates user with specific email address and password
                // **the user auth object is on user key this is why its being destructured
                // ***we need to enable this auth method at our fire store
                const {user}=await auth.createUserWithEmailAndPassword(email,password);
                // the user object is going to contain the email and password
                // so the only missig thing here is the dispaly name so am sending it as an additional data
                // that is being done async so we need to await it before getting the changes
                await createUserProfileDocument(user,{displayName});
                // code stops here until its done before proceeding to next code

                this.setState({
                    // this is gonna clear the form
                    displayName:"",
                    email:"",
                    password:"",
                    confirmPassword:""
                });

            }
            catch(err){
                console.error(err)

            }
        }
        

    }
    handleChange=(e)=>{
        const {value,name}=e.target;
       this.setState({[name]:value})
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
                <FormInput label="Confirm Password" type="password" value={this.state.confirmPassword} name="confirmPassword" className="form-input" onChange={this.handleChange}></FormInput>
                <CustomButton type="submit" backGroundColor="black" textContent="SIGN UP" ></CustomButton>
                </div>
        </form>
        )
    }
}
export default SignUp;
