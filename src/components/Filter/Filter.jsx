import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'components/Filter/Filter.styled';
import { setFilter } from 'redux/contact/filterSlice';
import { getFilter } from 'redux/contact/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleInputFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <>
      <Input
        autoComplete="off"
        id="filter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Search Contacts By Name"
        onChange={handleInputFilter}
        value={filter}
      />
    </>
  );
};
