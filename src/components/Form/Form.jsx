import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contact/selectors';
import { addContact } from 'redux/contact/operations';
import toast, { Toaster } from 'react-hot-toast';

import {
  FormFieldName,
  FormFieldNumber,
  ErrorMessage,
  Form,
  FieldName,
  FieldNumber,
  Button,
} from 'components/Form/Form.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (newContact, { resetForm }) => {
    const hasAlready = contacts.some(
      el => el.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasAlready) {
      toast.error(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
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
          number: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormFieldName>
            Name
            <FieldName
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter Name Contact"
            />
            <ErrorMessage name="name" component="p" />
          </FormFieldName>
          <FormFieldNumber>
            Number
            <FieldNumber
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter Phone Number"
            />
            <ErrorMessage name="phone" component="p" />
          </FormFieldNumber>
          <Button type="submit">Add Contact</Button>
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
  number: yup
    .string()
    .min(7, 'To Short!')
    .max(19, 'To Long!')
    .required('Required!'),
});
