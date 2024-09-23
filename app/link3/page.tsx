'use client';

import React, { useState, useEffect } from 'react';

const Link3Page: React.FC = () => {
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(true);
  const [templates, setTemplates] = useState<string[]>([]); // Şablonlar için state
  const [selectedTemplate, setSelectedTemplate] = useState<string>(''); // Seçilen şablon için state
  const [suppressions, setSuppressions] = useState<{ email: string; template: string }[]>([]); // Suppressions için state
  const [loading, setLoading] = useState(true);

  // API'den veri çekme fonksiyonu
  const fetchTemplates = async () => {
    try {
      const response = await fetch('/api/templates'); // API endpoint'ini güncelleyin
      const data = await response.json();
      setTemplates(data.templates); // API'den gelen şablonları state'e kaydediyoruz
    } catch (error) {
      console.error('API verisi alınamadı:', error);
    }
  };

  // Suppressions için veri çekme fonksiyonu
  const fetchSuppressions = async () => {
    try {
      const response = await fetch('/api/suppressions'); // Suppressions API endpoint'i
      const data = await response.json();
      setSuppressions(data.suppressions); // API'den gelen suppressions'ı state'e kaydediyoruz
    } catch (error) {
      console.error('Suppressions verisi alınamadı:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemplates(); // Bileşen yüklendiğinde API'den veriyi çeker
    fetchSuppressions(); // Suppressions verisini çeker
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleDelete = () => {
    console.log('Silme işlemi gerçekleştirildi.'); 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Suppressions</h1>
      <div style={styles.dropdownContainer}>
        <select 
          style={styles.dropdown} 
          value={selectedTemplate} 
          onChange={(e) => setSelectedTemplate(e.target.value)} // Seçim değiştiğinde state'i güncelle
        >
          <option value="">All Templates</option>
          {templates.map((template, index) => (
            <option key={index} value={template}>{template}</option>
          ))}
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
          <button
            style={{
              ...styles.deleteButton,
              cursor: isDeleteDisabled ? 'not-allowed' : 'pointer',
            }}
            onClick={isDeleteDisabled ? undefined : handleDelete}
            disabled={isDeleteDisabled}
          >
            <img
              src="/icons/trash.png" 
              alt="Delete"
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
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          suppressions.length === 0 ? (
            <div style={styles.noDataContainer}>
              <h4 style={styles.noDataTitle}>The suppression list is empty</h4>
              <p style={styles.noDataText}>
                In the suppression list, you will see the populated suppressions from requests.<br />
                For more information, please check the Suppression Documentation.
              </p>
            </div>
          ) : (
            suppressions.map((suppression, index) => (
              <div key={index} style={styles.headersContainer}>
                <div style={styles.headerColumn}>{suppression.email}</div>
                <div style={styles.headerColumn}>{suppression.template}</div>
              </div>
            ))
          )
        )}
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
  deleteButton: {
    marginLeft: '5px',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
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
