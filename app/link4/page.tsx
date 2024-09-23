'use client'; 

import React from 'react';

const Link5Page: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <div style={styles.contactContainer}>
        <h1 style={styles.title}>Contacts</h1>
        <div style={styles.dropdownContainer}>
          <select style={styles.dropdown}>
            <option value="">All Templates</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button style={styles.updateButton} onClick={handleRefresh}>
            <img
              src="reload.png" 
              alt="Reload"
              style={styles.icon}
            />
          </button>
          
        </div>
      </div>
      <div style={styles.headersContainer}>
        <div style={styles.headerColumn}>Email</div>
        <div style={styles.headerColumn}>Name</div>
        <div style={styles.headerColumn}>Template</div>
      </div>
      <div style={styles.noDataContainer}>
        <h4 style={styles.noDataTitle}>The contact list is empty</h4>
        <div style={styles.noDataText}>
          In the contact list, you will see the populated contacts from requests.<br />
          For more information, please check the <a href="https://www.emailjs.com/docs/user-guide/collecting-contacts/" target="_blank" rel="noopener noreferrer">Collecting contacts</a>.
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginLeft: '300px',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  contactContainer: {
    marginBottom: '20px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '35px',
    color: 'black',
  },
  dropdownContainer: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  dropdown: {
    padding: '7px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    minWidth: '200px',
  },
  updateButton: {
    marginLeft: '5px',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '16px', 
    height: '16px',
  },
  headersContainer: {
    display: 'flex',
    fontWeight: 'bold',
    borderBottom: '2px solid #ccc',
  },
  headerColumn: {
    flex: 1,
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  noDataContainer: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#666',
  },
  noDataTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  noDataText: {
    fontSize: '14px',
  },
};

export default Link5Page;
