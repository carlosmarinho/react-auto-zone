import { FC } from "react";
import Header from "./header";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Main = styled.main`
    display: "flex",
    justifyContent: "center",
    marginTop: "150px",
`;

const Title = styled.h2`
  textalign: "center";
`;

const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  background: #ddd;
  margin: 20px 0;
`;

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Header />
      <Main>
        <Title>{title}</Title>
        <StyledDivider />
        <div style={{ marginTop: "20px" }}>{children}</div>
      </Main>
    </div>
  );
};

export default Layout;
