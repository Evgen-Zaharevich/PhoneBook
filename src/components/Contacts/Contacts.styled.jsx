import styled from 'styled-components';
import { FiDelete } from 'react-icons/fi';

export const IconDelete = styled(FiDelete)`
  font-size: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  font-weight: 600;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  &:hover {
    font-weight: 700;
    text-shadow: black 1px 1px 1px;
    color: #fc0;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  font-weight: 500;

  &:hover {
    color: red;
    filter: drop-shadow(1px 1px 1px black);
  }
`;
