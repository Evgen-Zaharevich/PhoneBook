import { FormRegister } from 'components/FormRegister/FormRegister';
import { CloseBook } from 'components/СlosedBook/СlosedBook';

export const Register = () => {
  return (
    <main>
      <CloseBook title={'Register'}>
        <FormRegister />
      </CloseBook>
    </main>
  );
};
