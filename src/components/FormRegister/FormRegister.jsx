import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import { ErrorMessage, Form, Button } from 'components/Form/Form.styled';
import {
  FormFieldRegisterName,
  FormFieldRegisterEmail,
  FormFieldRegisterPassword,
  FieldRegister,
} from './FormRegister.styled';
import { Toaster } from 'react-hot-toast';

export const FormRegister = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
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
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormFieldRegisterName>
            Name
            <FieldRegister
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter Your Name"
            />
            <ErrorMessage name="name" component="p" />
          </FormFieldRegisterName>
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
          <Button type="submit">Create Account</Button>
        </Form>
      </Formik>
    </>
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'To Short!')
    .max(30, 'To Long!')
    .required('Required!'),
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
