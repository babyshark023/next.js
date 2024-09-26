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
  const [replyMessage, setReplyMessage] = useState('Thank you for reaching out! We will get back to you shortly.');
  const [selectedTemplate, setSelectedTemplate] = useState('default');
  const [showEditorOptions, setShowEditorOptions] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [content, setContent] = useState('');

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
    backgroundColor: '#579c5a',
    color: 'white',
    border: '1px solid #ccc',
    padding: '2px 14px',
    marginTop: '10px',
    borderRadius: '7px',
  };

  const activeButtonStyle: CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#464c5c',
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
    width: '300px',
    height: '80px',
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
            style={activeTab === tab ? activeButtonStyle : buttonStyle}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </section>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {activeTab === 'Content' && (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '20px', padding: '10px', border: '2px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', position: 'fixed', top: '80px', right: '10px', zIndex: 1000 }}>
                  <button style={{ ...buttonStyle, display: 'flex', alignItems: 'center' }}>
                    <img src="/icons/playground.png" alt="Playground" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                    Playground
                  </button>
                  <button style={{ ...buttonStyle, display: 'flex', alignItems: 'center' }}>
                    <img src="/icons/test.png" alt="Test It" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                    Test It
                  </button>
                  <button style={{ ...buttonStyle, display: 'flex', alignItems: 'center', backgroundColor: 'gray' }}>
                    <img src="/icons/save.png" alt="Save" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                    Save
                  </button>
                </div>
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

              <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '8px' }}>
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
                        style={{ ...buttonStyle, backgroundColor: activeContentTab === 'desktop' ? '#579c5a' : '#ccc' }}
                      >
                        Desktop
                      </button>
                      <button
                        onClick={() => handleContentTabClick('mobile')}
                        style={{ ...buttonStyle, backgroundColor: activeContentTab === 'mobile' ? '#579c5a' : '#ccc' }}
                      >
                        Mobile
                      </button>
                      <div style={{ position: 'relative' }}>
                        <button
                          type="button"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => handleCardClick('design')}
                          style={{ ...buttonStyle, backgroundColor: '#5a709e', color: 'white', border: 'none', borderRadius: '7px' }}
                        >
                          Edit Content
                        </button>
                        {showEditorOptions && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '100%',
                              left: '0',
                              backgroundColor: 'white',
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            }}
                          >
                            <button onClick={() => handleCardClick('design')}>Design Editor</button>
                            <button onClick={() => handleCardClick('code')}>Code Editor</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px' }}>
                    {activeContentTab === 'desktop' && (
                      <div
                        style={{
                          border: '1px solid #ccc',
                          padding: '20px',
                          borderRadius: '4px',
                          position: 'relative',
                          overflow: 'hidden',
                          width: '700px',
                          height: '300px',
                        }}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid #000',
                            borderRadius: '10px',
                            overflowY: 'scroll',
                            backgroundColor: '#f9f9f9',
                            padding: '20px',
                          }}
                        >
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
                        </div>
                      </div>
                    )}

                    {activeContentTab === 'mobile' && (
                      <div
                        style={{
                          width: '700px',
                          height: '300px',
                          border: '10px solid #ccc',
                          borderRadius: '30px',
                          overflow: 'hidden',
                          position: 'relative',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid #000',
                            borderRadius: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '10px',
                            overflow: 'hidden',
                          }}
                        >
                          <div style={{ height: '100%', overflowY: 'auto', paddingRight: '10px', boxSizing: 'content-box' }}>
                            <div style={{ fontSize: '16pt', fontFamily: 'Arial Black, sans-serif' }}>
                              <strong>Hello!</strong>
                            </div>
                            <div style={{ fontSize: '14pt', fontFamily: 'Arial Black, sans-serif', marginTop: '10px' }}>
                              Thank you for your message! You will receive a response shortly.
                            </div>
                            <div style={{ fontSize: '14pt', fontFamily: 'Arial Black, sans-serif', marginTop: '10px' }}>
                              <strong>Details:</strong>
                            </div>
                            <div style={{ paddingTop: '5px', fontSize: '12pt', fontFamily: 'Arial Black, sans-serif' }}>
                              <span style={{ color: '#ba372a' }}>Name:</span> {name || '{{name}}'}
                            </div>
                            <div style={{ paddingTop: '5px', fontSize: '12pt', fontFamily: 'Arial Black, sans-serif' }}>
                              <span style={{ color: '#ba372a' }}>Email:</span> {email || '{{email}}'}
                            </div>
                            <div style={{ paddingTop: '5px', fontSize: '12pt', fontFamily: 'Arial Black, sans-serif' }}>
                              <span style={{ color: '#ba372a' }}>Phone:</span> {phone || '{{phone}}'}
                            </div>
                            <div style={{ paddingTop: '5px', fontSize: '12pt', fontFamily: 'Arial Black, sans-serif' }}>
                              <span style={{ color: '#ba372a' }}>Message:</span> {message || '{{message}}'}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>


    <div style={{ marginLeft: '20px', marginBottom: '30px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
      <form style={{ width: '300px' }}>
      <label htmlFor="to_email" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>To Email*</label>
<input
  id="to_email"
  type="email"
  style={{ width: '100%', padding: '2px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#c7d1c9' }}
/>

<label htmlFor="from_name" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>From Name</label>
<input
  id="from_name"
  type="text"
  style={{ width: '100%', padding: '2px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#c7d1c9' }}
/>

<label htmlFor="from_email" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>From Email*</label>
<input
  id="from_email"
  type="email"
  style={{ width: '100%', padding: '2px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#c7d1c9' }}
/>

<label htmlFor="reply_to" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>Reply To</label>
<input
  id="reply_to"
  type="email"
  style={{ width: '100%', padding: '2px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#c7d1c9' }}
/>

<label htmlFor="bcc" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>BCC</label>
<input
  id="bcc"
  type="email"
  style={{ width: '100%', padding: '2px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#c7d1c9' }}
/>

<label htmlFor="cc" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>CC</label>
<input
  id="cc"
  type="email"
  style={{ width: '100%', padding: '2px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#c7d1c9' }}
  />
  </form>
</div>
</div>
)}

</div>


{activeTab === 'Auto Reply' && (
  <div>
    <label htmlFor="reply_template" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      Linked Template
      <button
        style={{
          marginLeft: '10px',
          padding: '5px',
          borderRadius: '50%',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease',
        }}
        onClick={() => { }}
      >
        <img src="/icons/unlink.png" alt="Unlink" style={{ width: '16px', height: '16px' }} />
      </button>
    </label>

    <select 
      id="reply_template" 
      value={selectedTemplate} 
      onChange={(e) => setSelectedTemplate(e.target.value)} 
      style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '50%' }}
    >
      <option value="" disabled>Select the templates</option> 
    </select>
     
    <div style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', marginBottom: '10px', height: '70px', marginTop: '10px', width: '620px', backgroundColor: '#c7d1c9' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src="/icons/warning.png" alt="Warning" style={{ width: '16px', height: '16px', marginRight: '5px' }} />
        <p style={{ margin: '5px 10px 10px 0', color: '#3e5252', fontSize: '14px' }}>
          Link the template to send it as a reply automatically.<br />
          NOTE: this will consume additional requests quota.
        </p>
      </div>
    </div>
  </div>
)}


{activeTab === 'Attachments' && (
  <div>
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '4px', marginBottom: '10px', height: '100px', backgroundColor: '#e9ecef', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <h1 style={{ margin: '0', color: '#495057', fontSize: '17px', display: 'inline-flex', alignItems: 'center' }}>
          Static Attachments
          <img 
            src="/icons/question.png" 
            alt="Info" 
            style={{ width: '16px', height: '16px', marginLeft: '5px', cursor: 'pointer', }} 
          />
        </h1>
      </div>
      <button style={{ padding: '5px 8px', borderRadius: '4px', border: '1px solid #464c5c', backgroundColor: '#464c5c', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <img 
          src="/icons/lock.png" 
          alt="Lock" 
          style={{ width: '16px', height: '16px', marginRight: '5px', filter: 'invert(100%)' }} 
        />
        Upload
      </button>
    </div>

    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '4px', marginBottom: '10px', height: '100px', backgroundColor: '#f8f9fa', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <h1 style={{ margin: '0', color: '#495057', fontSize: '17px', display: 'inline-flex', alignItems: 'center' }}>
          Dynamic Attachments
          <img 
            src="/icons/question.png" 
            alt="Info" 
            style={{ width: '16px', height: '16px', marginLeft: '5px', cursor: 'pointer', }} 
          />
        </h1>
      </div>
      <button style={{ padding: '5px 8px', borderRadius: '4px', border: '1px solid #464c5c', backgroundColor: '#464c5c', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <img 
          src="/icons/lock.png" 
          alt="Lock" 
          style={{ width: '16px', height: '16px', marginRight: '5px', filter: 'invert(100%)' }} 
        />
        Add Attachment
      </button>
    </div>
  </div>
)}

{activeTab === 'Contacts' && (
  <div>
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input 
          type="checkbox" 
          style={{ marginRight: '10px', transform: 'scale(1.5)' }}
        />
        <h1 style={{ margin: 0 }}>Save Contacts</h1>
      </div>
      <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img 
            src="/icons/warning.png" 
            alt="Warning" 
            style={{ width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px' }} 
          />
          <p style={{ color: '#6c757d' }}>Automatically save the contact of the user who submitted the email request.</p>
        </div>
      </div>
    </div>

    <div style={{ marginTop: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }}>
      <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}> Contact Name*</label>
      <input 
        id="name"
        type="text" 
        style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor:'#c7d1c9'}} 
      />
      
      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}> Contact Email*</label>
      <input 
        id="email"
        type="email" 
        style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor:'#c7d1c9'}} 
      />
      
      <label htmlFor="address" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}> Contact Address*</label>
      <input 
        id="address"
        type="text" 
        style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor:'#c7d1c9'}} 
      />
      
      <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}> Contact Phone*</label>
      <input 
        id="phone"
        type="tel" 
        style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor:'#c7d1c9' }} 
      />
    </div>
  </div>
)}
{activeTab === 'Settings' && (
  <div>
   
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>
        Name*
      </label>
      <input 
        id="name"
        type="text"
        style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#c7d1c9' }} 
      />
      
      <label htmlFor="template" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>
        Template ID*
      </label>
      <input 
        id="template"
        type="text"
        style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#c7d1c9' }} 
      />
    </div>

  
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input 
          type="checkbox" 
          style={{ marginRight: '10px', transform: 'scale(1.5)' }} 
        />
        <h1 style={{ margin: 0 }}>
          Do not save private data
        </h1>
      </div>
      <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img 
            src="/icons/warning.png" 
            alt="Warning" 
            style={{ width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px' }} 
          />
          <p style={{ color: '#6c757d' }}>
            All template parameter values won't be saved in History.<br />
            The resend option for the template will be disabled.
          </p>
        </div>
      </div>
    </div>

<div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <input 
      type="checkbox" 
      style={{ marginRight: '10px', transform: 'scale(1.5)' }} 
    />
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1 style={{ margin: 0 }}>Allow unsubscribing from emails</h1>
      <img 
        src="/icons/question.png" 
        alt="Question" 
        style={{ width: '16px', height: '16px', marginLeft: '8px', cursor: 'pointer' }} 
        title="This option allows users to unsubscribe from your email communications." 
      />
    </div>
  </div>

  <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>Email*</label>
  <input 
    id="email"
    type="email" 
    style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor:'#c7d1c9'}} 
  />
  <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginBottom: '10px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <img 
        src="/icons/warning.png" 
        alt="Warning" 
        style={{ width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px' }} 
      />
      <p style={{ color: '#6c757d' }}>
        For more information about unsubscribe, please check the <a href="URL_TO_SUPPRESSIONS_GUIDE" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>Suppressions guide</a>.
      </p>
    </div>
  </div>
</div>
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input 
          type="checkbox" 
          style={{ marginRight: '10px', transform: 'scale(1.5)' }} 
        />
        <h1 style={{ margin: 0 }}>
          Enable reCAPTCHA V2 verification
        </h1>
      </div>
        
      <label htmlFor="recaptchaSecret" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>reCAPTCHA Secret Key*</label>
      <input 
        id="recaptchaSecret"
        type="text" 
        style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor:'#c7d1c9'}} 
      />
      <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img 
            src="/icons/warning.png" 
            alt="Warning" 
            style={{ width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px' }} 
          />
          <p style={{ color: '#6c757d' }}>
            Obtain your <a href="URL_TO_RECAPTCHA" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>Google reCAPTCHA key</a>.<br />
            To display the CAPTCHA on your site follow the instructions from the reCAPTCHA dashboard.
          </p>
        </div>
      </div>
    </div>

<div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <input 
      type="checkbox" 
      style={{ marginRight: '10px', transform: 'scale(1.5)' }} 
    />
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1 style={{ margin: 0 }}>Enable Google Analytics tracking</h1>
      <img 
        src="/icons/question.png" 
        alt="Question" 
        style={{ width: '16px', height: '16px', marginLeft: '8px', cursor: 'pointer' }} 
        title="Enable tracking of user interactions for analytics purposes." 
      />
    </div>
  </div>

  <label htmlFor="analyticsEmail" style={{ display: 'block', marginBottom: '5px', color: '#495057' }}>Email*</label>
  <input 
    id="analyticsEmail"
    type="email" 
    style={{ width: '100%', padding: '4px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor:'#c7d1c9'}} 
  />
  <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginBottom: '10px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <img 
        src="/icons/warning.png" 
        alt="Warning" 
        style={{ width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px' }} 
      />
      <p style={{ color: '#6c757d' }}>
        Find your <a href="URL_TO_ANALYTICS" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>Google Analytics Tracking ID</a>.<br />
        The pageview location is <a href="https://statistic.emailjs.com/open" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'underline' }}>https://statistic.emailjs.com/open</a>.
      </p>
    </div>
  </div>
</div>

  </div>
)}

   </div>
  );
};

export default CreateTemplatePage;
