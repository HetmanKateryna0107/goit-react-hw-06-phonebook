import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacs';

export default function App() {
  return (
    <>
      <h3>Phonebook</h3>
      <Form />

      <h3>Contacts</h3>
      <h4>Find contacts by name</h4>

      <Filter />

      <Contacts />
    </>
  );
}
