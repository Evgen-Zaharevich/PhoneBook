import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormFieldName = styled.label`
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  font-family: 'Tangerine', cursive;
  text-shadow: black 1px 1px 2px;
  color: #fc0;
  margin-left: 20px;
`;

export const FormFieldNumber = styled.label`
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  font-family: 'Tangerine', cursive;
  text-shadow: black 1px 1px 2px;
  color: #fc0;
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 35px;
  font-family: 'Tangerine', cursive;
  text-shadow: black 1px 1px 2px;
  color: red;
`;

export const FieldName = styled(FormikField)`
  width: 310px;
  height: 25px;
  background-color: inherit;
  border: 2px solid black;
  border-radius: 5px;
  transition: 0.4s;
  margin-left: 10px;
  font-weight: 700;
  font-size: 15px;

  &:hover {
    border-color: #fc0;
  }
`;

export const FieldNumber = styled(FormikField)`
  width: 310px;
  height: 25px;
  background-color: inherit;
  border: 2px solid black;
  border-radius: 5px;
  transition: 0.4s;
  margin-left: 10px;
  font-weight: 700;
  font-size: 15px;

  &:hover {
    border-color: #fc0;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid black;
  background-color: inherit;
  font-family: 'Tangerine', cursive;
  font-size: 50px;
  font-weight: 700;
  transition: 0.4s;

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
