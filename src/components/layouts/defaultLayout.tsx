import { FC } from "react";
import Header from "./header";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Main = styled.main`
  margin: 40px 32px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  background: #ddd;
  margin-bottom: 50px;
`;

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Header />
      <Main>
        <Title>{title}</Title>
        <StyledDivider />
        <div>{children}</div>
      </Main>
    </div>
  );
};

export default Layout;
