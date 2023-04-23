import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hook/useAuth';
import { ContainerLink, HeaderLink, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <ContainerLink>
      <UserName>Welcome, {user.name}</UserName>
      <HeaderLink type="HeaderLink" onClick={() => dispatch(logOut())}>
        Logout
      </HeaderLink>
    </ContainerLink>
  );
};
