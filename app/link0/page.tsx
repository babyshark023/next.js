"use client"; 

import React, { useState } from 'react';

const Link1Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showConfigPopup, setShowConfigPopup] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [serviceId, setServiceId] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>(''); 
  const [appPassword, setAppPassword] = useState<string>(''); 
  const [isTestEmail, setIsTestEmail] = useState(false); 
  const [selectedRegion, setSelectedRegion] = useState<string>(''); 

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const openConfigPopup = (service: string) => {
    setSelectedService(service);
    setSelectedIcon(`/icons/${service.toLowerCase()}.png`);
    setName(service);
    setServiceId('');
    setUserEmail(''); 
    setAppPassword(''); 
    setSelectedRegion(''); 
    setShowPopup(false);
    setShowConfigPopup(true);
  };

  const closeConfigPopup = () => {
    setShowConfigPopup(false);
    setName('');
    setServiceId('');
    setUserEmail(''); 
    setAppPassword(''); 
    setIsTestEmail(false); 
    setSelectedRegion(''); 
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Service ID:', serviceId);
    console.log('User Email:', userEmail);
    console.log('App Password:', appPassword);
    console.log('Send test email:', isTestEmail);
    console.log('Selected Region:', selectedRegion); 
    closeConfigPopup();
  };

  const isEmailService = selectedService === 'Gmail' || selectedService === 'Outlook';

  return (
    <div style={{ marginLeft: '300px', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}>
        Email Services
      </h1>
      <button
        onClick={togglePopup}
        style={{
          marginTop: '20px',
          padding: '5px 12px',
          fontSize: '16px',
          color: 'white',
          backgroundColor: '#464c5c',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <span style={{ marginRight: '8px' }}>Add New Service</span>
      </button>

      {showPopup && (
        <div style={popupStyles}>
          <div style={popupHeaderStyles}>
            <h2 style={{ fontSize: '24px', color: 'white' }}>Select Services</h2>
            <button onClick={togglePopup} style={closeButtonStyles}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                style={{ width: '24px', height: '24px' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div style={sectionStyles}>
            <h3 style={sectionTitleStyles}>Personal Services</h3>
            <div style={buttonContainerStyles}>
              {['Gmail', 'Outlook', 'Yandex', 'iCloud', 'Yahoo', 'AOL', 'Fastmail', 'Mail.ru', 'Zoho', 'SMTPserver'].map(service => (
                <div style={serviceBoxStyles} key={service}>
                  <div style={buttonWrapperStyles}>
                    <button style={buttonStyles} onClick={() => openConfigPopup(service)}>
                      <img src={`/icons/${service.toLowerCase()}.png`} alt={service} style={iconStyles} />
                      {service}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={sectionStyles}>
            <h3 style={sectionTitleStyles}>Transactional Services</h3>
            <div style={buttonContainerStyles}>
              {['Postmark', 'AmazonSES', 'Mailgun', 'Mailjet', 'Mandrill', 'Brevo', 'Mailtrap', 'SendGrid'].map(service => (
                <div style={serviceBoxStyles} key={service}>
                  <div style={buttonWrapperStyles}>
                    <button style={buttonStyles} onClick={() => openConfigPopup(service)}>
                      <img src={`/icons/${service.toLowerCase()}.png`} alt={service} style={iconStyles} />
                      {service}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showConfigPopup && (
        <div style={configPopupStyles}>
          <div style={popupHeaderStyles}>
            <h2 style={{ fontSize: '20px', color: 'white' }}>Config Service</h2>
            <button onClick={closeConfigPopup} style={closeButtonStyles}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                style={{ width: '24px', height: '24px' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div style={{ padding: '15px', color: 'black', display: 'flex', alignItems: 'center' }}>
            <img src={selectedIcon} alt={selectedService} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            <div>
              <h3 style={{ margin: '0', fontSize: '16px' }}>{selectedService}</h3>
              <p style={{ margin: '0', color: '#555', fontSize: '12px' }}>Personal Service</p>
            </div>
          </div>
          <div style={{ marginTop: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyles}
            />
            <label style={{ display: 'block', marginBottom: '5px' }}>Service ID:</label>
            <input
              type="text"
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              style={inputStyles}
            />
            {!isEmailService && (
              <>
                <label style={{ display: 'block', marginBottom: '5px' }}>User Email:</label>
                <input
                  type="text"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  style={inputStyles}
                />
                <label style={{ display: 'block', marginBottom: '5px' }}>App Password:</label>
                <input
                  type="password"
                  value={appPassword}
                  onChange={(e) => setAppPassword(e.target.value)}
                  style={inputStyles}
                />
              </>
            )}
            {selectedService === 'Zoho' && (
              <>
                <label style={{ display: 'block', marginTop: '15px', marginBottom: '5px' }}>Select Region:</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '6px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    marginBottom: '8px'
                  }}
                >
                  <option value="">Select Region</option>
                  <option value="Worldwide">Worldwide</option>
                  <option value="Europe">Europe</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="China">China</option>
                </select>
              </>
            )}
          </div>
          <div style={{ marginTop: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img
                src="/icons/warning.png"
                alt="Warning"
                style={{ width: '24px', height: '24px', marginRight: '10px' }}
              />
              <span>Allow "Send email on your behalf" permission during connection. Both Gmail and Google Apps accounts are supported.</span>
            </div>
            <label>
              <input
                type="checkbox"
                checked={isTestEmail}
                onChange={() => setIsTestEmail(!isTestEmail)}
                style={{ marginRight: '8px' }}
              />
              Send test email to verify configuration
            </label>
          </div>
          <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button onClick={closeConfigPopup} style={actionButtonStyles}>Cancel</button>
            <button onClick={handleSubmit} style={{ ...actionButtonStyles, marginLeft: '10px' }}>Create Service</button>
          </div>
        </div>
      )}
    </div>
  );
};

const popupStyles: React.CSSProperties = {
  position: 'absolute',
  top: '100px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
};

const configPopupStyles: React.CSSProperties = {
  position: 'absolute',
  top: '100px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  width: '350px',
};

const actionButtonStyles: React.CSSProperties = {
  padding: '6px 12px',
  backgroundColor: '#464c5c',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px',
};

const popupHeaderStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#464c5c',
  padding: '8px',
  width: '100%',
};

const sectionStyles: React.CSSProperties = {
  margin: '20px 0',
};

const sectionTitleStyles: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: '18px',
  margin: '5px 0',
};

const buttonContainerStyles: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
};

const buttonStyles: React.CSSProperties = {
  padding: '6px 12px',
  backgroundColor: 'white',
  color: 'black',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '130px',
};

const closeButtonStyles: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const iconStyles: React.CSSProperties = {
  width: '20px',
  height: '20px',
  marginRight: '8px',
};

const serviceBoxStyles: React.CSSProperties = {
  width: '160px',
  height: '60px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const buttonWrapperStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const inputStyles: React.CSSProperties = {
  width: '100%',
  padding: '6px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginBottom: '8px',
  fontSize: '14px',
};

export default Link1Page;
