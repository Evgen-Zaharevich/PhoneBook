import { Outlet } from 'react-router-dom';
import {
  HeaderLink,
  LogoLink,
  Icon,
  Navigation,
  Header,
  AppContainer,
} from './Layout.styled';

export const Layout = () => {
  return (
    <AppContainer>
      <Header>
        <Navigation>
          <LogoLink to="/">
            <Icon /> PhoneBook
          </LogoLink>
          <div>
            <HeaderLink to="/register">Register</HeaderLink>
            <HeaderLink to="/login">Login</HeaderLink>
            <HeaderLink to="/Phonebook">Book</HeaderLink>
          </div>
        </Navigation>
      </Header>
      <Outlet />
    </AppContainer>
  );
};
