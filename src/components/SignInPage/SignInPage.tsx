import { SignInButton } from "@clerk/clerk-react";
import Image from "../../assets/images/LOGIN.jpg";
import "./SignInPage.scss";
const SignInPage = () => {
  return (
    <div className="sigin-page">
      <img className="rectangle" alt="Rectangle" src={Image} />
      <div className="text">
        <div className="text-head">You are not Signed In</div>
        <SignInButton mode="modal" redirectUrl={"/"}>
          <div className="text-button">SignIn</div>
        </SignInButton>
      </div>
    </div>
  );
};

export default SignInPage;
