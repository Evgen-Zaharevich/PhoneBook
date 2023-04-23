import styled from 'styled-components';
import { Field as FormikField } from 'formik';

export const FormFieldRegisterName = styled.label`
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  font-family: 'Tangerine', cursive;
  text-shadow: #fc0 1px 1px 2px;
  color: black;
  margin-left: 35px;
`;

export const FormFieldRegisterEmail = styled.label`
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  font-family: 'Tangerine', cursive;
  text-shadow: #fc0 1px 1px 2px;
  color: black;
  margin-left: 53px;
`;

export const FormFieldRegisterPassword = styled.label`
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  font-family: 'Tangerine', cursive;
  text-shadow: #fc0 1px 1px 2px;
  color: black;
`;

export const FieldRegister = styled(FormikField)`
  width: 310px;
  height: 25px;
  background-color: inherit;
  border: 2px solid black;
  border-radius: 5px;
  transition: 0.4s;
  margin-left: 10px;
  font-weight: 700;
  font-size: 15px;

  text-shadow: black 1px 1px 1px;
  color: #fc0;

  &:hover {
    border-color: #fc0;
  }
`;
