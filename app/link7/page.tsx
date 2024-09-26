"use client"; 

import { useState } from 'react';

const Link1Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false); 
  const [teamMembers, setTeamMembers] = useState<{ name: string; email: string }[]>([]); 
  const [editIndex, setEditIndex] = useState<number | null>(null); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedMembers = [...teamMembers];
      updatedMembers[editIndex] = { name, email }; 
      setTeamMembers(updatedMembers);
      setMessage('Üye başarıyla güncellendi!');
      setEditIndex(null); 
    } else {
      const newMember = { name, email };
      setTeamMembers([...teamMembers, newMember]); 
      setMessage('Üye başarıyla eklendi!');
    }

    setName('');
    setEmail('');
    setShowForm(false); 
  };

  const handleEdit = (index: number) => {
    setEditIndex(index); 
    setName(teamMembers[index].name); 
    setEmail(teamMembers[index].email);
    setShowForm(true); 
  };

  const handleDelete = (index: number) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index); 
    setTeamMembers(updatedMembers);
    setMessage('Üye başarıyla silindi!');
  };

  const handleProtected = () => {
    alert('Protected action triggered!');
  };

  return (
    <div style={{ marginLeft: '300px', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}>
        Team Members
      </h1>
      <button
        style={{
          marginTop: '20px',
          padding: '5px 12px',
          fontSize: '16px',
          color: 'white',
          backgroundColor: '#464c5c',
          borderRadius: '6px',
        }}
        onClick={() => setShowForm(!showForm)} 
      >
        Invite Teammate
      </button>
      
      {showForm && ( 
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: 'rgb(199, 209, 201)', 
          borderRadius: '6px',
          border: '1px solid #ccc',
          width: '30%', 
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '80px' }}>İsim:</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                style={{ 
                  marginLeft: '10px',
                  padding: '5px',
                  border: '2px solid rgb(199, 209, 201)', 
                  borderRadius: '4px',
                  backgroundColor: 'white', 
                }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <label style={{ width: '80px' }}>E-posta:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ 
                  marginLeft: '10px',
                  padding: '5px',
                  border: '2px solid rgb(199, 209, 201)', 
                  borderRadius: '4px',
                  backgroundColor: 'white', 
                }}
              />
            </div>
            <button type="submit" style={{ marginTop: '10px', padding: '5px 12px', backgroundColor: '#28a745', color: 'white', borderRadius: '6px' }}>
              {editIndex !== null ? 'Güncelle' : 'Üye Ekle'}
            </button>
            {message && <p style={{ marginTop: '10px', color: 'gray' }}>{message}</p>}
          </form>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '15px',
            marginTop: '10px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/icons/personal.png" alt="Personal" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
              <div>
                <h3 style={{ margin: '0', fontSize: '20px', color: '#333' }}>{member.name}</h3>
                <p style={{ margin: '0', color: 'gray' }}>{member.email}</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button onClick={handleProtected} style={{ 
                padding: '6px 12px', 
                backgroundColor: '#d4edda',
                color: 'black', 
                borderRadius: '12px', 
                border: 'none', 
                cursor: 'pointer',
                marginRight: '5px', 
              }}>
                Protected
              </button>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button onClick={() => handleEdit(index)} style={{ border: 'none', background: '#c7d1c9', cursor: 'pointer', padding: '5px', borderRadius: '4px' }}>
                <img src="/icons/edit.png" alt="Edit" style={{ width: '15px', height: '15px' }} />
              </button>
              <button onClick={() => handleDelete(index)} style={{ border: 'none', background: '#c7d1c9', cursor: 'pointer', padding: '5px', borderRadius: '4px' }}>
                <img src="/icons/trash.png" alt="Delete" style={{ width: '15px', height: '15px' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Link1Page;
