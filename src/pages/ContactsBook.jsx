import { ContactForm } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contact/operations';
import {
  ContainerApp,
  ContainerPhonebook,
  ContainerContacts,
  IconContact,
} from './ContactsBook.styled';

export const ContactsBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <ContainerApp>
        <ContainerPhonebook>
          <Section title={''}>
            <IconContact />
            <ContactForm />
          </Section>
        </ContainerPhonebook>
        <ContainerContacts>
          <Section title={'Contacts'}>
            <Filter />
            <Contacts />
          </Section>
        </ContainerContacts>
      </ContainerApp>
    </main>
  );
};
