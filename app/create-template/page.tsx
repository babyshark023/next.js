'use client'; // Client component olduğunu belirt

import React, { useState } from 'react';
import AutoReplySection from './AutoReplySection'; // Dosyanın bulunduğu yere göre yolu güncelle

const CreateTemplatePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('content');
  const [contentTab, setContentTab] = useState('desktop');
  const [subject, setSubject] = useState('New message from {{from_name}}');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [bcc, setBcc] = useState('');
  const [cc, setCc] = useState('');
  const [showEditors, setShowEditors] = useState(false);

  const handleTabClick = (tab: string) => setActiveTab(tab);
  const handleContentTabClick = (tab: string) => setContentTab(tab);
  const toggleEditors = () => setShowEditors((prev) => !prev);

  const styles = {
    dropdownContainer: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      marginBottom: '20px',
    },
    dropdown: {
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '10px',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    includeLabel: {
      fontWeight: 'bold',
    },
    input: {
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
    },
    updateButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
    icon: {
      width: '20px',
      height: '20px',
    },
  };

  return (
    <div style={{ marginLeft: '300px', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}>Create Template</h1>

      <section style={{ display: 'flex', gap: '12px', fontSize: '17px' }}>
        {['content', 'auto-reply', 'attachment', 'contacts', 'settings'].map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            style={{
              backgroundColor: activeTab === tab ? '#28a745' : '#464c5c',
              color: 'white',
              border: '1px solid #ccc',
              padding: '3px 12px',
              borderRadius: '6px',
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </section>

      <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1, border: '2px solid #ccc', borderRadius: '8px', padding: '25px', minWidth: '300px' }}>
          {activeTab === 'content' && (
            <div>
              {/* Subject Input */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '17px', marginRight: '8px' }}>Subject*</span>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    border: '1px solid #ccc',
                    padding: '5px',
                    borderRadius: '4px',
                    width: '250px',
                  }}
                />
              </div>

              {/* Tab and Edit Button Container */}
              <div>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                  {['desktop', 'mobile'].map(tab => (
                    <div
                      key={tab}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleContentTabClick(tab)}
                      style={{
                        cursor: 'pointer',
                        padding: '8px',
                        borderRadius: '4px',
                        backgroundColor: contentTab === tab ? '#28a745' : '#ccc',
                        color: 'white',
                      }}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </div>
                  ))}
                </div>

                {/* Edit Button */}
                <div style={{ position: 'relative' }}>
                  <button
                    type="button"
                    onMouseEnter={toggleEditors}
                    onMouseLeave={toggleEditors}
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      border: '1px solid #ccc',
                      padding: '8px',
                      borderRadius: '6px',
                      marginLeft: 'auto',
                      cursor: 'pointer',
                    }}
                  >
                    Edit Content
                  </button>

                  {showEditors && (
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      right: '0',
                      backgroundColor: 'white',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      zIndex: 1000,
                    }}>
                      <button
                        type="button"
                        onClick={() => console.log('Design Editor Clicked')}
                        style={{
                          display: 'block',
                          padding: '8px 12px',
                          border: 'none',
                          backgroundColor: '#28a745',
                          color: 'white',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          width: '100%',
                          textAlign: 'left',
                        }}
                      >
                        Design Editor
                      </button>
                      <button
                        type="button"
                        onClick={() => console.log('Code Editor Clicked')}
                        style={{
                          display: 'block',
                          padding: '8px 12px',
                          border: 'none',
                          backgroundColor: '#28a745',
                          color: 'white',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          width: '100%',
                          textAlign: 'left',
                        }}
                      >
                        Code Editor
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTemplatePage;
