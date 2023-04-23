// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button } from 'components/Contacts/Contacts.styled';
import { IconDelete } from 'components/Contacts/Contacts.styled';
import {
  getFilter,
  getContacts,
  getIsLoading,
  getError,
} from 'redux/contact/selectors';
import { deleteContact } from 'redux/contact/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const getFilteredContacts = filterName => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  const showFilteredContacts = () => {
    return filter.length > 0 ? getFilteredContacts(filter) : contacts;
  };

  return (
    <List>
      {error ? (
        <b>Sorry, an error occurred on the server</b>
      ) : (
        showFilteredContacts().map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              <IconDelete />
            </Button>
          </ListItem>
        ))
      )}
      {isLoading && !error && <b>Request in progress...</b>}
    </List>
  );
};
