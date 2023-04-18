import styled from 'styled-components';
import { GiRotaryPhone } from 'react-icons/gi';

export const BookContainer = styled.div`
  position: relative;
  background-image: url(https://kartinkin.net/uploads/posts/2022-12/1669914259_kartinkin-net-p-tekstura-oblozhki-knigi-instagram-32.jpg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 750px;
  margin: 10px 0;

  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  display: inline-block;
  font-size: 130px;
  font-family: 'Tangerine', cursive;
  margin-top: 100px;
  text-shadow: #fc0 1px 1px 2px;
`;

export const PhoneIcon = styled(GiRotaryPhone)`
  font-size: 200px;
  text-shadow: #fc0 2px 2px 4px 2px;
  filter: drop-shadow(2px 2px 1px #fc0);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
