import { useUser, UserButton } from "@clerk/clerk-react";
import "./AccountInfoSmall.scss";

const AccountInfoSmall = () => {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <UserButton></UserButton>;
  }
};

export default AccountInfoSmall;
