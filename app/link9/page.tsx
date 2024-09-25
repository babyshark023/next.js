'use client';
import React, { useState } from 'react';

const TeamMembersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userName, setUserName] = useState(''); 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSaveUserName = () => {
    console.log('Kullanıcı Adı:', userName);
    setUserName(''); 
  };

  const handleRefreshKeys = () => {
    // Your refresh logic here
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div style={{ marginLeft: '300px', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}>
        Personal Settings
      </h1>
      <section className="_wrapper_13eh8_1" style={{ display: 'flex', gap: '12px', fontSize: '17px' }}>
        <button
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'profile' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('profile')}
          style={{ backgroundColor: activeTab === 'profile' ? '#464c5c' : '#579c5a'
            , color: 'white', border: '1px solid #ccc', padding: '2px 14px', marginTop: '10px', borderRadius: '7px' }}
        >
          <span>Profile</span>
        </button>
        <button
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'security' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('security')}
          style={{ backgroundColor: activeTab === 'security' ? '#464c5c' : '#579c5a', color: 'white', border: '1px solid #ccc', padding: '2px 14px', marginTop: '10px', borderRadius: '7px' }}
        >
          <span>Security</span>
        </button>
      </section>

      {activeTab === 'profile' && (
        <div>
          <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px', marginRight: '50px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Contact Details</h2>
            <h3>Name*</h3>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name..."
              style={{
                marginRight: '10px',
                padding: '5px',
                width: '300px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <button
              style={{
                padding: '5px 12px',
                fontSize: '16px',
                color: 'white',
                backgroundColor: '#579c5a',
                borderRadius: '6px',
              }}
              onClick={handleSaveUserName}
            >
              Update
            </button>
          </div>

          <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px', marginRight: '50px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Password</h2>

            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>New Password:</label>
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password..."
                style={{ padding: '7px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '250px', marginLeft: '25px' }}
              />
              <button onClick={toggleNewPasswordVisibility} style={{ marginLeft: '10px', background: 'transparent', border: 'none' }}>
                <img
                  src={showNewPassword ? '/icons/show.png' : '/icons/hide.png'}
                  alt={showNewPassword ? 'Hide' : 'Show'}
                  style={{ width: '20px', height: '20px' }}
                />
              </button>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Confirm Password:</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password..."
                style={{ padding: '7px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '250px' }}
              />
              <button onClick={toggleConfirmPasswordVisibility} style={{ marginLeft: '10px', background: 'transparent', border: 'none' }}>
                <img
                  src={showConfirmPassword ? '/icons/show.png' : '/icons/hide.png'}
                  alt={showConfirmPassword ? 'Hide' : 'Show'}
                  style={{ width: '20px', height: '20px' }}
                />
              </button>
            </div>

            <button
              style={{
                marginTop: '10px',
                padding: '5px 12px',
                fontSize: '16px',
                color: 'white',
                backgroundColor: '#464c5c',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '6px',
                marginLeft: '287px',
              }}
              onClick={handleRefreshKeys}
            >
              Change
            </button>
          </div>
        </div>
      )}

      {activeTab === 'security' && (
        <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px', marginRight: '50px' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Multi-Factor Authentication</h2>
          <p>Having multi-factor authentication (MFA) for the user improves security for this account.</p>
          <button
            style={{
              marginTop: '10px',
              padding: '5px 12px',
              fontSize: '16px',
              color: 'white',
              backgroundColor: '#464c5c',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '6px',
            }}
            onClick={handleRefreshKeys}
          >
            Enable MFA
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamMembersPage;
