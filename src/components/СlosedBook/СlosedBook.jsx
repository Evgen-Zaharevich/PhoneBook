import { BookContainer, Container, Title } from './CloseBook.styled';
import PropTypes from 'prop-types';

export const CloseBook = ({ title, children }) => {
  return (
    <BookContainer>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </BookContainer>
  );
};

CloseBook.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
