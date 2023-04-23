import { FormLogin } from 'components/FormLogin/FormLogin';
import { CloseBook } from 'components/СlosedBook/СlosedBook';

export const Login = () => {
  return (
    <main>
      <CloseBook title={'Log In'}>
        <FormLogin />
      </CloseBook>
    </main>
  );
};
