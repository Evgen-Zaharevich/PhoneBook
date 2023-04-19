import { PhoneIcon } from './Home.styled';
import { CloseBook } from 'components/СlosedBook/СlosedBook';

export const Home = () => {
  return (
    <main>
      <CloseBook title={'PhoneBook'}>
        <PhoneIcon />
      </CloseBook>
    </main>
  );
};
