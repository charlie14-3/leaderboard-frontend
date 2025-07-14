import { useState } from 'react';
import { addUser } from '../api';

const AddUserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = async () => {
    if (name.trim()) {
      await addUser(name);
      setMessage(`✅ ${name} added successfully!`);
      setName('');
      onUserAdded();
      setTimeout(() => setMessage(''), 2000);
    }
  };

  return (
    <div className="form-section">
      <label>Add New User:</label>
      <input
        type="text"
        className="add-user-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAdd} className="add-user-btn">Add User</button>
      {message && <div className="claim-message">{message}</div>}
    </div>
  );
};

export default AddUserForm;
