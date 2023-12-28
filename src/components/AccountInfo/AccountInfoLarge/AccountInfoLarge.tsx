import { UserButton, useUser } from "@clerk/clerk-react";
import "./AccountInfoLarge.scss";

const AccountInfoLarge = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return (
      <div className="account-info-large">
        <div className="avatar-large">
          <UserButton />
        </div>
        <h1>{user?.username}</h1>
      </div>
    );
  }

  return <div>Not signed in</div>;
};

export default AccountInfoLarge;
