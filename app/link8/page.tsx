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
          style={{ backgroundColor: activeTab === 'general' ? '#464c5c' : '#579c5a', color: 'white',    border: '1px solid #ccc', padding:'2px 14px',marginTop:'10px',borderRadius:'7px' }}
        >
          <span>General</span>
        </button>
        <button
          tabIndex={0}
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'subscription' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('subscription')}
          style={{ backgroundColor: activeTab === 'subscription' ? '#464c5c' : '#579c5a', color: 'white',    border: '1px solid #ccc', padding:'2px 14px',marginTop:'10px',borderRadius:'7px'  }}
        >
          <span>Subscription</span>
        </button>
        <button
          tabIndex={0}
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'invoices' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('invoices')}
          style={{ backgroundColor: activeTab === 'invoices' ? '#464c5c' : '#579c5a', color: 'white',    border: '1px solid #ccc', padding:'2px 14px',marginTop:'10px',borderRadius:'7px'  }}
        >
          <span>Invoices</span>
        </button>
        <button
          tabIndex={0}
          type="button"
          className={`ejs-button ejs-button-default _tab_1dele_1 ${activeTab === 'security' ? '_active_1dele_11' : ''}`}
          onClick={() => handleTabClick('security')}
          style={{ backgroundColor: activeTab === 'security' ? '#464c5c' : '#579c5a', color: 'white',    border: '1px solid #ccc', padding:'2px 14px',marginTop:'10px',borderRadius:'7px'  }}
        >
          <span>Security</span>
        </button>
      </section>

      <div style={{ marginTop: '20px' }}>
      {activeTab === 'general' && (
  <div>
   
    <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px', marginRight: '50px' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>API Keys</h2>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>Public Key:</span>
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
        Add New Service
      </button>
    </div>

<div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '10px', marginRight: '50px' }}>
  <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>Notifications</h2>
  <p style={{ marginBottom: '15px' }}>All system notifications will be sent to the email address below:</p>
  <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>Email*</label>
  <input 
    id="email"
    type="email" 
    style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#c7d1c9'}} 
  />
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
    Change
  </button>
</div>
    <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px', marginRight: '50px' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Delete Account</h2>
      <p style={{ marginBottom: '15px' }}>Before you go...</p>
      <ol>
             <li>Please make sure you have canceled your paid subscription.</li>
              <li>If you have problems with integration, please contact support; we will help you.</li>
              <li>If you are interested in receiving newsletters from us, do not delete your account.</li>
     </ol>
      <button
  style={{
    marginTop: '20px',
    padding: '5px 12px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#464c5c',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center', 
  }}
>
  <img
    src="/icons/trash.png" 
    alt="Trash Icon"
    style={{
      width: '20px',
      height: '20px',
      marginRight: '8px', 
      filter: 'invert(1)', 
    }}
  />
  Delete My Account
</button>

    </div>
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
         padding:'2px 14px',
          backgroundColor: '#579c5a',
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
          padding:'2px 14px',
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
                  backgroundColor: '#579c5a',
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
              
                Save Changes
              </button>
            </div>

            <div >
            <div style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px',marginRight:'50px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>API Settings</h2>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
  <input type="checkbox" id="option1" />
  <label htmlFor="option1" style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
    Allow EmailJS API for non-browser applications.
    <img 
      src="/icons/question.png" 
      alt="Help" 
      title="This option allows the EmailJS API to be used in non-browser applications." 
      style={{ marginLeft: '5px', width: '20px', height: '20px' }} 
    />
  </label>
</div>

<div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
  <input type="checkbox" id="option2" />
  <label htmlFor="option2" style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
    Use Private Key (recommended)
    <img 
      src="/icons/question.png" 
      alt="Help" 
      title="Using a private key is recommended for security purposes." 
      style={{ marginLeft: '5px', width: '20px', height: '20px' }} 
    />
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
