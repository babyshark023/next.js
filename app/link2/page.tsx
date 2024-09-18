'use client'; // Client Component olarak tanımlamak için

import React from 'react';

const Link2Page: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Email History</h1>
      <div style={styles.dropdownContainer}>
        <select style={styles.dropdown}>
          <option value="">All History</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select style={styles.dropdown}>
          <option value="">All Templates</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select style={styles.dropdown}>
          <option value="">All Services</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div style={styles.searchContainer}>
          <span style={styles.includeLabel}>Include:</span>
          <input
            type="text"
            placeholder="Search..."
            style={styles.input}
          />
          <button style={styles.updateButton} onClick={handleRefresh}>
            <img
              src="reload.png" // İkonun yolu
              alt="Reload"
              style={styles.icon}
            />
          </button>
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
  title: {
    fontWeight: 'bold',
    fontSize: '35px',
    color: 'black',
  },
  dropdownContainer: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  dropdown: {
    padding: '7px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    minWidth: '200px',
  },
  input: {
    padding: '7px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    minWidth: '300px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  includeLabel: {
    marginRight: '10px', // Input ile etiket arasındaki boşluk
    fontSize: '14px',
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

export default Link2Page;
