import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSubject } from '../store/subjectsSlice';

function AddSubjectForm() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Subject name is required');
      return;
    }

    dispatch(addSubject(name));
    setName('');
    setError('');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Subject name (e.g. Computer Networks)"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError('');
        }}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Add subject</button>
    </form>
  );
}

export default AddSubjectForm;