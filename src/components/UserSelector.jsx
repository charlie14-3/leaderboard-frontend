const UserSelector = ({ users, selectedUser, setSelectedUser }) => (
  <>
    <label>Select a User:</label>
    <select
      className="user-select"
      value={selectedUser}
      onChange={(e) => setSelectedUser(e.target.value)}
    >
      <option value="">-- Choose a user --</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>{user.name}</option>
      ))}
    </select>
  </>
);

export default UserSelector;
