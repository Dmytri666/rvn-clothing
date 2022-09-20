import SignInForm from "../../components/directory/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/directory/sign-up-form/sign-up-form.component";
import "./authentication.style.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
