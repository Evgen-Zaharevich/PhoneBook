import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Toaster } from 'react-hot-toast';

import { ErrorMessage, Form, Button } from 'components/Form/Form.styled';
import {
  FormFieldRegisterEmail,
  FormFieldRegisterPassword,
  FieldRegister,
} from 'components/FormRegister/FormRegister.styled';

export const FormLogin = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <>
      <Toaster
        toastOptions={{
          className: '',
          duration: 3000,
        }}
      />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormFieldRegisterEmail>
            Email
            <FieldRegister
              type="email"
              name="email"
              pattern="^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$"
              title="Please enter another Email"
              required
              placeholder="example@gmail.com"
            />
            <ErrorMessage name="email" component="p" />
          </FormFieldRegisterEmail>
          <FormFieldRegisterPassword>
            Password
            <FieldRegister
              type="password"
              name="password"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
              title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
              required
              placeholder="Enter Your Password"
            />
            <ErrorMessage name="password" component="p" />
          </FormFieldRegisterPassword>
          <Button type="submit">Continue</Button>
        </Form>
      </Formik>
    </>
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .min(5, 'To Short!')
    .max(30, 'To Long!')
    .required('Required!'),
  password: yup
    .string()
    .min(6, 'To Short!')
    .max(20, 'To Long!')
    .required('Required!'),
});
