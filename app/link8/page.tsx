'use client'; 

import React, { useState } from 'react';

const Link8Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [domains, setDomains] = useState<string[]>([]);
  const [newDomain, setNewDomain] = useState('');
  const [anotherDomain, setAnotherDomain] = useState('');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleRefreshKeys = () => {
    console.log('Keys refreshed');
  };

  const handleAddDomain = () => {
    if (newDomain) {
      setDomains([...domains, newDomain]);
      setNewDomain('');
    }
  };

  const handleAddAnotherDomain = () => {
    if (anotherDomain) {
      setDomains([...domains, anotherDomain]);
      setAnotherDomain('');
    }
  };

  return (
    <div style={{ marginLeft: '300px', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}>
        Account
      </h1>
      <section className="_wrapper_13eh8_1" style={{ display: 'flex', gap: '12px', fontSize: '17px' }}>
        <button
          tabIndex={-1}
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'general' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('general')}
          style={{ backgroundColor: '#28a745', color: 'white',    border: '1px solid #ccc', padding:'2px 14px',marginTop:'10px',borderRadius:'7px' }}
        >
          <span>General</span>
        </button>
        <button
          tabIndex={0}
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'subscription' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('subscription')}
          style={{ backgroundColor: '#28a745', color: 'white',    border: '1px solid #ccc', padding:'2px 14px',marginTop:'10px',borderRadius:'7px'  }}
        >
          <span>Subscription</span>
        </button>
        <button
          tabIndex={0}
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'invoices' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('invoices')}
          style={{ backgroundColor: '#28a745', color: 'white',    border: '1px solid #ccc', padding:'2px 14px',marginTop:'10px',borderRadius:'7px'  }}
        >
          <span>Invoices</span>
        </button>
        <button
          tabIndex={0}
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'security' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('security')}
          style={{ backgroundColor: '#28a745', color: 'white',    border: '1px solid #ccc', padding:'2px 14px',marginTop:'10px',borderRadius:'7px'  }}
        >
          <span>Security</span>
        </button>
      </section>

      <div style={{ marginTop: '20px' }}>
        {activeTab === 'general' && (
           <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px',marginRight:'50px' }}>
           <h2 style={{ fontWeight: 'bold', fontSize:'20px' }}>API Keys</h2>
            <div style={{ marginBottom: '10px' }}>
              <span style={{marginRight: '10px' }}>Public Key:</span>
              <input
                type="text"
                placeholder="Enter your public key..."
                value={publicKey}
                onChange={(e) => setPublicKey(e.target.value)}
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  width: '300px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ marginRight: '10px' }}>Private Key:</span>
              <input
                type="text"
                placeholder="Enter your private key..."
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  width: '300px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </div>

            <button
              style={{
                marginTop: '20px',
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
              Add New Service
            </button>
          </div>
        )}
      {activeTab === 'subscription' && (
  <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
   <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Subscription Details</h2>
    <ul style={{marginTop:'10px',}}>
      <li>Current plan <span style={{ marginLeft: '33px' }}>:Description</span></li>
      <li>Monthly quota<span style={{ marginLeft: '21px' }}>:Description</span></li>
      <li>Remaining quota<span style={{ marginLeft: '6px' }}>:Description</span></li>
      <li>Quota resets on<span style={{ marginLeft: '14px' }}>:Description</span></li>
    </ul>

    <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
      <button
        style={{
          padding: '10px 15px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => console.log('Upgrade clicked')}
      >
        Upgrade
      </button>
      <button
        style={{
          padding: '10px 15px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => console.log('Cancel clicked')}
      >
        Cancel
      </button>
    </div>
  </div>
)}


        {activeTab === 'invoices' && (
           <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px',marginRight:'50px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Billing History</h2>
            <p className='text-center'>Your invoices will appear here</p>
          </div>
        )}

        {activeTab === 'security' && (
          <div>
      <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px',marginRight:'50px' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Domains</h2>
            <p>Your requests are restricted to the domains listed below</p>
            <div>
              {domains.length === 0 ? (
                <p>No domains added yet.</p>
              ) : (
                <ul>
                  {domains.map((domain, index) => (
                    <li key={index}>{domain}</li>
                  ))}
                </ul>
              )}
            </div>

          
              <h3>Add New Domain</h3>
              <input
                type="text"
                placeholder="Enter a new domain..."
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
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
                onClick={handleAddDomain}
              >
                Add Domain
              </button>
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
                Save Changes
              </button>
            </div>

            <div >
            <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px',marginRight:'50px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>API Settings</h2>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input type="checkbox" id="option1" />
                <label htmlFor="option1" style={{ marginLeft: '10px' }}>
                  Allow EmailJS API for non-browser applications.
                </label>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input type="checkbox" id="option2" />
                <label htmlFor="option2" style={{ marginLeft: '10px' }}>
                  Use Private Key (recommended)
                </label>
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
                Save Changes
              </button>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Link8Page;
