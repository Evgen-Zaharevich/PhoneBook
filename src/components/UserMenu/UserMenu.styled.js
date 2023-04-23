import styled from 'styled-components';

export const ContainerLink = styled.div`
  display: flex;
`;

export const UserName = styled.p`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 10px 20px;
  position: relative;
  font-size: 30px;
  color: #fc0;
  font-family: 'Tangerine', cursive;
  font-size: 50px;
  font-weight: 700;
  transition: 0.4s;
  text-shadow: black 2px 2px 1px;
`;

export const HeaderLink = styled.button`
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid black;
  color: black;
  font-family: 'Tangerine', cursive;
  font-size: 40px;
  font-weight: 700;
  transition: 0.4s;
  background-color: inherit;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }

  &:hover:after {
    border-color: black;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }

  &:hover {
    color: #fc0;
    text-shadow: black 1px 1px 1px;
  }
`;
