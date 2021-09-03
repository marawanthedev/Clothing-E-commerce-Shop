import "./sign-in-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

export default function SignInAndSignUpPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
}
