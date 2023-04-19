import { Formik } from 'formik';
import * as yup from 'yup';

import {
  FormField,
  ErrorMessage,
  Form,
  Field,
  Button,
} from 'components/Form/Form.styled';

export const FormRegister = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={schema}
      onSubmit={''}
    >
      <Form>
        <FormField>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter Name Contact"
          />
          <ErrorMessage name="name" component="p" />
        </FormField>
        <FormField>
          Phone
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter Phone Number"
          />
          <ErrorMessage name="phone" component="p" />
        </FormField>
        <Button type="submit">Create Account</Button>
      </Form>
    </Formik>
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'To Short!')
    .max(30, 'To Long!')
    .required('Required!'),
  phone: yup
    .string()
    .min(7, 'To Short!')
    .max(19, 'To Long!')
    .required('Required!'),
});
