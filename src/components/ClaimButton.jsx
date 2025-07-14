import { useState } from 'react';
import { claimPoints } from '../api';

const ClaimButton = ({ selectedUser, onClaim }) => {
  const [points, setPoints] = useState(null);

  const handleClaim = async () => {
    if (!selectedUser) return;
    const res = await claimPoints(selectedUser);
    setPoints(res.data.points);
    onClaim();
    setTimeout(() => setPoints(null), 3000);
  };

  return (
    <div className="form-section">
      <button
        onClick={handleClaim}
        className="claim-btn"
        disabled={!selectedUser}
      >
        🎯 Claim Points
      </button>
      {points && (
        <div className="claim-message">
          🎉 {points} Points Awarded!
        </div>
      )}
    </div>
  );
};

export default ClaimButton;
