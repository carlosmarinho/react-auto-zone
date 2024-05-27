import Logo from "../../../assets/images/az-logo-full.svg";
import SignIn from "../../../assets/images/signin.svg";
import { LoginIconArea, StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Autozone Company Logo" />
      <LoginIconArea>
        <img src={SignIn} alt="User Login Icon" />
        <span>Sign IN</span>
      </LoginIconArea>
    </StyledHeader>
  );
};

export default Header;
