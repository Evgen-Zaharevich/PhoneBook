import { BookContainer, Title, PhoneIcon, Container } from './Home.styled';

export const Home = () => {
  return (
    <main>
      <BookContainer>
        <Container>
          <Title>PhoneBook</Title>
          <PhoneIcon />
        </Container>
      </BookContainer>
    </main>
  );
};
