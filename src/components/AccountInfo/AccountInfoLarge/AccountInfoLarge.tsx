import Image from "../../../assets/images/userPlaceholder.jpeg"
import './AccountInfoLarge.scss'
const AccountInfoLarge = () => {
  return (
    <div className="account-info-large">
      <img src={Image} alt="Profile avatar" />
      <h1>Akshay Vs</h1>
    </div>
  )
}

export default AccountInfoLarge
