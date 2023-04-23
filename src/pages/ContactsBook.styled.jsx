import styled from 'styled-components';
import { FaUserTie } from 'react-icons/fa';

export const IconContact = styled(FaUserTie)`
  font-size: 130px;
  margin-bottom: 50px;
  color: #fc0;
  filter: drop-shadow(2px 2px 2px black);
`;

export const ContainerApp = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  background-image: url(https://kartinkin.net/uploads/posts/2021-07/thumbs/1626157901_45-kartinkin-com-p-razvorot-fon-krasivo-54.jpg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 750px;
`;

export const ContainerPhonebook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

export const ContainerContacts = styled.div`
  width: 460px;
  margin-left: 70px;
`;
