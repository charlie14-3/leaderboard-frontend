// React hooks for state and lifecycle
import { useEffect, useState } from 'react';
// Main CSS file for styling
import './App.css';

// API function to get all users from backend
import { getUsers } from './api';

// Components for UI functionality
import UserSelector from './components/UserSelector';
import AddUserForm from './components/AddUserForm';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import DropdownSection from './components/DropdownSection'; // Dropdown wrapper for better UX

const App = () => {
  // State to store all users and currently selected user
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  // Fetch users from the backend and sort them by points (highest first)
  const fetchUsers = async () => {
    const res = await getUsers();
    const sorted = res.data.sort((a, b) => b.totalPoints - a.totalPoints);
    setUsers(sorted);
  };

  // Fetch users once when the component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>🏅 Leaderboard App</h1>

      {/* Section to claim points for a selected user */}
      <DropdownSection title="🎯 Claim Points">
        <UserSelector
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <ClaimButton selectedUser={selectedUser} onClaim={fetchUsers} />
      </DropdownSection>

      {/* Section to add a new user to the leaderboard */}
      <DropdownSection title="➕ Add New User">
        <AddUserForm onUserAdded={fetchUsers} />
      </DropdownSection>

      {/* Displays the leaderboard with top users */}
      <Leaderboard users={users} />
    </div>
  );
};

export default App;
