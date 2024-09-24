'use client';

import React, { useEffect, useState } from 'react';

interface History {
  id: string;
  name: string;
}

interface Template {
  id: string;
  name: string;
}

interface Service {
  id: string;
  name: string;
}

interface Email {
  created: string;
  result: string;
  service: string;
  template: string;
  resends: number;
}

const Link2Page: React.FC = () => {
  const [emailHistory, setEmailHistory] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmailHistory, setFilteredEmailHistory] = useState<Email[]>([]);
  const [histories, setHistories] = useState<History[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  const handleRefresh = () => {
    window.location.reload();
  };

  const fetchEmailHistory = async () => {
    try {
      const response = await fetch('/api/getEmailHistory');
      if (!response.ok) {
        throw new Error('Veri alınamadı.');
      }
      const data: Email[] = await response.json();
      setEmailHistory(data);
      setFilteredEmailHistory(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Bir hata oluştu.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchOptions = async () => {
    try {
      const historiesResponse = await fetch('/api/getHistories');
      const templatesResponse = await fetch('/api/getTemplates');
      const servicesResponse = await fetch('/api/getServices');

      const historiesData = await historiesResponse.json();
      const templatesData = await templatesResponse.json();
      const servicesData = await servicesResponse.json();

      setHistories(historiesData);
      setTemplates(templatesData);
      setServices(servicesData);
    } catch (error: unknown) {
      console.error('Veri alınamadı:', error);
    }
  };

  const handleSearch = () => {
    const filtered = emailHistory.filter(email => 
      email.result.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.template.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmailHistory(filtered);
  };

  const handleDelete = () => {
    console.log('Silme işlemi gerçekleştirildi.');
  };

  const isDeleteDisabled = filteredEmailHistory.length === 0;

  useEffect(() => {
    fetchEmailHistory();
    fetchOptions();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Email History</h1>
      <div style={styles.dropdownContainer}>
        <select style={styles.dropdown}>
          <option value="">All History</option>
          {histories.map((history) => (
            <option key={history.id} value={history.id}>{history.name}</option>
          ))}
        </select>
        <select style={styles.dropdown}>
          <option value="">All Templates</option>
          {templates.map((template) => (
            <option key={template.id} value={template.id}>{template.name}</option>
          ))}
        </select>
        <select style={styles.dropdown}>
          <option value="">All Services</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>{service.name}</option>
          ))}
        </select>
        <div style={styles.searchContainer}>
          <span style={styles.includeLabel}>Include:</span>
          <input
            type="text"
            placeholder="Search..."
            style={styles.input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button style={styles.updateButton} onClick={handleSearch}>
            <img src="/icons/search.png" alt="search" style={styles.icon} />
          </button>
          <button style={styles.updateButton} onClick={handleRefresh}>
            <img src="reload.png" alt="Reload" style={styles.icon} />
          </button>
          <button
            style={{
              ...styles.deleteButton,
              cursor: isDeleteDisabled ? 'not-allowed' : 'pointer',
            }}
            onClick={isDeleteDisabled ? undefined : handleDelete}
            disabled={isDeleteDisabled}
          >
            <span style={styles.deleteIcon} />
          </button>
        </div>
      </div>

     
        <div style={styles.tableContainer}>
          <div style={styles.headersContainer}>
            <div style={styles.headerColumn}>Created</div>
            <div style={styles.headerColumn}>Result</div>
            <div style={styles.headerColumn}>Service</div>
            <div style={styles.headerColumn}>Template</div>
            <div style={styles.headerColumn}>Resends</div>
          </div>
          {filteredEmailHistory.length === 0 ? (
            <div style={styles.noDataContainer}>
              <h4 style={styles.noDataTitle}>The email history is empty</h4>
              <p style={styles.noDataText}>
                In the email history, you will see the populated emails from requests.<br />
                For more information, please check the Email Documentation.
              </p>
            </div>
          ) : (
            filteredEmailHistory.map((email, index) => (
              <div key={index} style={styles.headersContainer}>
                <div style={styles.headerColumn}>{email.created}</div>
                <div style={styles.headerColumn}>{email.result}</div>
                <div style={styles.headerColumn}>{email.service}</div>
                <div style={styles.headerColumn}>{email.template}</div>
                <div style={styles.headerColumn}>{email.resends}</div>
              </div>
            ))
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
  },
  icon: {
    width: '16px',
    height: '16px',
  },
  deleteButton: {
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
  },
  deleteIcon: {
    width: '16px',
    height: '16px',
    content: '""',
    display: 'block',
    backgroundImage: 'url("/icons/trash.png")', // Silme simgesi
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
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

export default Link2Page;
