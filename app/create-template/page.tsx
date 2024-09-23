'use client';
import React, { useState, CSSProperties } from 'react';

const CreateTemplatePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Content');
  const [activeContentTab, setActiveContentTab] = useState('desktop');
  const [subject, setSubject] = useState('{{email}} {{name}} via MailJS');
  const [name, setName] = useState('{{name}}');
  const [email, setEmail] = useState('{{email}}');
  const [phone, setPhone] = useState('{{phone}}');
  const [message, setMessage] = useState('{{message}}');
  const [showEditorOptions, setShowEditorOptions] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleContentTabClick = (tab: string) => {
    setActiveContentTab(tab);
  };

  const handleMouseEnter = () => {
    setShowEditorOptions(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowEditorOptions(false);
    }, 3000);
  };

  const handleCardClick = (type: string) => {
    setPopupContent(type === 'design' ? 'Open Design Editor' : 'Open Code Editor');
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: '#28a745',
    color: 'white',
    border: '1px solid #ccc',
    padding: '2px 14px',
    marginTop: '10px',
    borderRadius: '7px',
  };

  const cardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    marginTop: '5px',
    cursor: 'pointer',
    width: '300px',  // Genişlik artırıldı
    height: '80px',  // Yükseklik azaltıldı
  };
  
  return (
    <div style={{ marginLeft: '300px', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}>
        Account
      </h1>
      <section style={{ display: 'flex', gap: '12px', fontSize: '17px' }}>
        {['Content', 'Auto Reply', 'Attachments', 'Contacts', 'Settings'].map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            style={buttonStyle}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </section>

      <div style={{ marginTop: '20px' }}>
        {activeTab === 'Content' && (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="template_subject" style={{ display: 'block', marginBottom: '5px' }}>
                  Subject*
                </label>
                <input 
                  type="text" 
                  maxLength={70} 
                  id="template_subject" 
                  style={{ width: '64.7%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)} 
                />
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <label htmlFor="template_content" style={{ display: 'block', marginBottom: '5px' }}>
                    Content*
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '15px' }}> 
                  <button 
                    onClick={() => handleContentTabClick('desktop')} 
                    style={{ ...buttonStyle, backgroundColor: activeContentTab === 'desktop' ? '#28a745' : '#ccc' }}
                  >
                    Desktop
                  </button>
                  <button 
                    onClick={() => handleContentTabClick('mobile')} 
                    style={{ ...buttonStyle, backgroundColor: activeContentTab === 'mobile' ? '#28a745' : '#ccc' }}
                  >
                    Mobile
                  </button>
                  <div style={{ position: 'relative' }}>
                    <button 
                      type="button" 
                      onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}
                      style={{ ...buttonStyle, backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '7px' }}
                    >
                      Edit Content
                    </button>
                    {showEditorOptions && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        zIndex: 1,
                      }}>
                        <div 
                          style={cardStyle} 
                          onClick={() => handleCardClick('design')}
                        >
                          <h4 style={{ margin: '5px 0', fontSize: '16px' }}>Design Editor</h4>
                          <p style={{ margin: '0', fontSize: '12px', textAlign: 'center' }}>
                            Create and edit the design of your template.
                          </p>
                        </div>
                        <div 
                          style={cardStyle} 
                          onClick={() => handleCardClick('code')}
                        >
                          <h4 style={{ margin: '5px 0', fontSize: '16px' }}>Code Editor</h4>
                          <p style={{ margin: '0', fontSize: '12px', textAlign: 'center' }}>
                            Edit the code of your template.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                {activeContentTab === 'desktop' && (
                  <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '4px', position: 'relative', overflow: 'hidden', width: '800px', height: '300px' }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      border: '1px solid #000',
                      borderRadius: '10px',
                      overflowY: 'scroll',
                      backgroundColor: '#f9f9f9',
                      padding: '20px',
                    }}>
                      <div style={{ paddingLeft: '40px', fontSize: '18pt', fontFamily: 'Arial Black, sans-serif', textDecoration: 'underline' }}>
                        Hello,
                      </div>
                      <div style={{ paddingLeft: '40px', fontSize: '18pt', fontFamily: 'Arial Black, sans-serif' }}>
                        You have received a new message from <strong>{name || '{{name}}'}</strong>.
                      </div>
                      <div style={{ paddingLeft: '40px', fontSize: '18pt', fontFamily: 'Arial Black, sans-serif', textDecoration: 'underline' }}>
                        Details:
                      </div>
                      <div style={{ paddingLeft: '40px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Name:</span> {name || '{{name}}'}
                      </div>
                      <div style={{ paddingLeft: '40px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Email:</span> {email || '{{email}}'}
                      </div>
                      <div style={{ paddingLeft: '40px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Phone:</span> {phone || '{{phone}}'}
                      </div>
                      <div style={{ paddingLeft: '40px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Message:</span> {message || '{{message}}'}
                      </div>
                      <div style={{ paddingLeft: '40px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Sent by:</span> {email || '{{email}}'}
                      </div>
                    </div>
                  </div>
                )}
                {activeContentTab === 'mobile' && (
                  <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '4px', position: 'relative', overflow: 'hidden', width: '400px', height: '300px' }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      border: '1px solid #000',
                      borderRadius: '10px',
                      overflowY: 'scroll',
                      backgroundColor: '#f9f9f9',
                      padding: '20px',
                    }}>
                      <div style={{ paddingLeft: '20px', fontSize: '18pt', fontFamily: 'Arial Black, sans-serif', textDecoration: 'underline' }}>
                        Hello,
                      </div>
                      <div style={{ paddingLeft: '20px', fontSize: '18pt', fontFamily: 'Arial Black, sans-serif' }}>
                        You have received a new message from <strong>{name || '{{name}}'}</strong>.
                      </div>
                      <div style={{ paddingLeft: '20px', fontSize: '18pt', fontFamily: 'Arial Black, sans-serif', textDecoration: 'underline' }}>
                        Details:
                      </div>
                      <div style={{ paddingLeft: '20px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Name:</span> {name || '{{name}}'}
                      </div>
                      <div style={{ paddingLeft: '20px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Email:</span> {email || '{{email}}'}
                      </div>
                      <div style={{ paddingLeft: '20px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Phone:</span> {phone || '{{phone}}'}
                      </div>
                      <div style={{ paddingLeft: '20px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Message:</span> {message || '{{message}}'}
                      </div>
                      <div style={{ paddingLeft: '20px', fontSize: '14pt', fontFamily: 'Arial Black, sans-serif' }}>
                        <span style={{ color: '#ba372a' }}>Sent by:</span> {email || '{{email}}'}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {popupVisible && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
        }}>
          <p>{popupContent}</p>
          <button onClick={closePopup} style={{ marginTop: '10px', padding: '8px 12px' }}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateTemplatePage;
