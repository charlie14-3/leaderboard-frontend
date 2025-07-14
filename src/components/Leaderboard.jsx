// Import images/icons for the leaderboard visuals
import crown from '../assets/crown.png';
import trophySmall from '../assets/small-trophy.png';
import trophyBig from '../assets/big-trophy.png';
import celebrate from '../assets/celebrate.png';

const Leaderboard = ({ users }) => {
  // Get the top 3 users and the rest separately
  const topThree = users.slice(0, 3);
  const remaining = users.slice(3);

  return (
    <div className="leaderboard-container">
      
      {/* 🎉 Celebration background behind the leaderboard */}
      <div className="celebrate-overlay">
        <img src={celebrate} alt="Celebration" />
      </div>

      {/* 🏆 Big trophy image behind the top 3 podium */}
      <div className="trophy-background">
        <img src={trophyBig} alt="Trophy" />
      </div>

      {/* 🥇 Podium for Top 3 Users */}
      <div className="podium">

        {/* 🥈 2nd place */}
        {topThree[1] && (
          <div className="podium-card">
            <img src={`https://api.dicebear.com/7.x/personas/svg?seed=${topThree[1].name}`} alt="avatar" />
            <div className="rank">2</div>
            <div className="name">{topThree[1].name}</div>
            <div className="points">
              <img src={trophySmall} alt="trophy" width="16" /> {topThree[1].totalPoints.toLocaleString()}
            </div>
          </div>
        )}

        {/* 🥇 1st place with crown */}
        {topThree[0] && (
          <div className="podium-card first">
            {/* 👑 Crown above the avatar */}
            <div className="crown-overlay">
              <img src={crown} alt="Crown" />
            </div>
            <img src={`https://api.dicebear.com/7.x/personas/svg?seed=${topThree[0].name}`} alt="avatar" />
            <div className="rank">1</div>
            <div className="name">{topThree[0].name}</div>
            <div className="points">
              <img src={trophySmall} alt="trophy" width="16" /> {topThree[0].totalPoints.toLocaleString()}
            </div>
          </div>
        )}

        {/* 🥉 3rd place */}
        {topThree[2] && (
          <div className="podium-card">
            <img src={`https://api.dicebear.com/7.x/personas/svg?seed=${topThree[2].name}`} alt="avatar" />
            <div className="rank">3</div>
            <div className="name">{topThree[2].name}</div>
            <div className="points">
              <img src={trophySmall} alt="trophy" width="16" /> {topThree[2].totalPoints.toLocaleString()}
            </div>
          </div>
        )}
      </div>

      {/* 👥 List of users ranked 4th and below */}
      <div className="remaining">
        {remaining.map((user, index) => (
          <div key={user._id} className="remaining-row">
            {/* Display rank starting from 4 */}
            <div style={{ width: '20px' }}>{index + 4}</div>
            <img src={`https://api.dicebear.com/7.x/personas/svg?seed=${user.name}`} alt="avatar" />
            <div className="name">{user.name}</div>
            <div className="points">
              <img src={trophySmall} alt="trophy" width="16" /> {user.totalPoints.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
