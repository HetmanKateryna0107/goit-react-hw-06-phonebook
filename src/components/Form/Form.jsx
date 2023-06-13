import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redax/selectors';
import { addContact } from 'redax/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = event => {
    event.preventDefault();
    const isExist = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} already exists`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
    setName('');
    setNumber('');
  };
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        value={name}
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <h3>Number</h3>
      <input
        value={number}
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />

      <button type="submit">Add contact</button>
    </form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};
