import styled from "styled-components";
import Logo from "../../assets/images/az-logo-full.svg";
import SignIn from "../../assets/images/signin.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const LoginIconArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Logo" />
      <LoginIconArea>
        <img src={SignIn} alt="User Login" />
        <span>Sign IN</span>
      </LoginIconArea>
    </StyledHeader>
  );
};

export default Header;
