'use client'; // Client Component olarak tanımlamak için

import React from 'react';

const Link5Page: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Events</h1>
      <div style={styles.dropdownContainer}>
        <select style={styles.dropdown}>
          <option value="">All Events</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button style={styles.updateButton} onClick={handleRefresh}>
          <img
            src="reload.png" // İkonun yolu
            alt="Reload"
            style={styles.icon}
          />
        </button>
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
  title: {
    fontWeight: 'bold',
    fontSize: '35px',
    color: 'black',
  },
  dropdownContainer: {
    marginTop: '20px',
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
    width: '16px', // İkon boyutu
    height: '16px',
  },
};

export default Link5Page;
