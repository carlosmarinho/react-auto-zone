import { FC } from "react";
import Header from "./Header/header";
import { Main, StyledDivider, Title } from "./style";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

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
