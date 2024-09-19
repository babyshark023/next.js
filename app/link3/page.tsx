'use client'; 

import React from 'react';

const Link3Page: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Suppressions</h1>
      <div style={styles.dropdownContainer}>
        <select style={styles.dropdown}>
          <option value="">All History</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div style={styles.searchContainer}>
          <span style={styles.includeLabel}>Email:</span>
          <input
            type="text"
            placeholder="Search..."
            style={styles.input}
          />
          <button style={styles.updateButton} onClick={handleRefresh}>
            <img
              src="reload.png" 
              alt="Reload"
              style={styles.icon}
            />
          </button>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <div style={styles.headersContainer}>
          <div style={styles.headerColumn}>Email</div>
          <div style={styles.headerColumn}>Template</div>
        </div>
       
        <div style={styles.noDataContainer}>
          <h4 style={styles.noDataTitle}>The suppression list is empty</h4>
          <p style={styles.noDataText}>
            In the suppression list, you will see the populated suppressions from requests.<br />
            For more information, please check the Suppression Documentation.
          </p>
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
    marginRight: '10px',
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
    width: '16px',
    height: '16px',
  },
  tableContainer: {
    marginTop: '20px',
    borderCollapse: 'collapse',
    width: '100%',
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
    padding: '20px',
    textAlign: 'center',
    color: '#666',
  },
  noDataTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  noDataText: {
    fontSize: '14px',
  },
};

export default Link3Page;
