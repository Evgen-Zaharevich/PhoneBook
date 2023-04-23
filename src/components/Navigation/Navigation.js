import { useAuth } from 'hook/useAuth';
import { HeaderLink, Icon, LogoLink, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LogoLink to="/">
        <Icon /> PhoneBook
      </LogoLink>
      {isLoggedIn && <HeaderLink to="/contacts">Contacts</HeaderLink>}
    </Nav>
  );
};
