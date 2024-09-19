'use client';
import React, { useState } from 'react';

const TeamMembersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userName, setUserName] = useState(''); 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSaveUserName = () => {
  
    console.log('Kullanıcı Adı:', userName);
    setUserName(''); 
  };

  const handleRefreshKeys = () => {

  };

  return (
    <div style={{ marginLeft: '300px', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}>
        Personal Settings
      </h1>
      <section className="_wrapper_13eh8_1" style={{ display: 'flex', gap: '12px', fontSize: '17px' }}>
        <button
          tabIndex={-1}
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'profile' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('profile')}
          style={{ backgroundColor: '#28a745', color: 'white', border: '1px solid #ccc', padding: '2px 14px', marginTop: '10px', borderRadius: '7px' }}
        >
          <span>Profile</span>
        </button>
        <button
          tabIndex={0}
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'security' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('security')}
          style={{ backgroundColor: '#28a745', color: 'white', border: '1px solid #ccc', padding: '2px 14px', marginTop: '10px', borderRadius: '7px' }}
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
                backgroundColor: '#28a745',
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
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password..."
                style={{ padding: '7px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '250px',marginLeft:'25px' }}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password..."
                style={{ padding: '7px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '250px' }}
              />
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
                marginLeft:'287px',
              }}
              onClick={handleRefreshKeys}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: '20px', height: '14px', marginRight: '8px' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{ width: '20px', height: '14px', marginRight: '8px' }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
     Enable MFA
    </button>
  </div>
)}


    </div>
  );
};

export default TeamMembersPage;
