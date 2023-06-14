import { useDispatch } from 'react-redux';
import { addFilter } from 'redax/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      onChange={event => dispatch(addFilter(event.target.value))}
      placeholder="filter contact"
    />
  );
};
