"use client"; // Burası önemli, Client Component olarak işaretliyoruz

import { useState } from 'react';

const Link1Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false); // Formun görünürlüğü için state
  const [teamMembers, setTeamMembers] = useState<{ name: string; email: string }[]>([]); // Üyeleri tutacak state
  const [editIndex, setEditIndex] = useState<number | null>(null); // Düzenleme için index

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Eğer düzenleme modundaysak
      const updatedMembers = [...teamMembers];
      updatedMembers[editIndex] = { name, email }; // Üyeyi güncelle
      setTeamMembers(updatedMembers);
      setMessage('Üye başarıyla güncellendi!');
      setEditIndex(null); // Düzenleme modunu kapat
    } else {
      // Yeni üye ekleniyor
      const newMember = { name, email };
      setTeamMembers([...teamMembers, newMember]); // Üyeyi ekle
      setMessage('Üye başarıyla eklendi!');
    }

    setName('');
    setEmail('');
    setShowForm(false); // Formu kapat
  };

  const handleEdit = (index: number) => {
    setEditIndex(index); // Düzenlenecek üyenin index'ini ayarla
    setName(teamMembers[index].name); // Üye bilgilerini formda göster
    setEmail(teamMembers[index].email);
    setShowForm(true); // Formu göster
  };

  const handleDelete = (index: number) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index); // Silinen üyeyi çıkart
    setTeamMembers(updatedMembers);
    setMessage('Üye başarıyla silindi!');
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
        onClick={() => setShowForm(!showForm)} // Butona tıklandığında formu göster/gizle
      >
        Invite Teammate
      </button>
      
      {showForm && ( // Form görünürse göster
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: 'rgb(199, 209, 201)', // Form arka plan rengi
          borderRadius: '6px',
          border: '1px solid #ccc',
          width: '30%', // Form divinin genişliğini %80 olarak ayarladık
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
                  border: '2px solid rgb(199, 209, 201)', // Dış kenar rengi divin arka plan rengiyle aynı
                  borderRadius: '4px',
                  backgroundColor: 'white', // İç arka plan rengi beyaz
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
                  border: '2px solid rgb(199, 209, 201)', // Dış kenar rengi divin arka plan rengiyle aynı
                  borderRadius: '4px',
                  backgroundColor: 'white', // İç arka plan rengi beyaz
                }}
              />
            </div>
            <button type="submit" style={{ marginLeft:'200px',marginTop: '10px', padding: '5px 12px', backgroundColor: '#28a745', color: 'white', borderRadius: '6px' }}>
              {editIndex !== null ? 'Güncelle' : 'Üye Ekle'}
            </button>
            {message && <p style={{ marginTop: '10px', color: 'gray' }}>{message}</p>}
          </form>
        </div>
      )}

      {/* Ekleme yapılan üyelerin listesi */}
      <div style={{ marginTop: '30px' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '6px',
            padding: '10px',
            marginTop: '10px',
            backgroundColor: '#f9f9f9',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <h3 style={{ margin: '0', fontSize: '18px' }}>{member.name}</h3>
              <p style={{ margin: '0', color: 'gray' }}>{member.email}</p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => handleEdit(index)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                <img src="/icons/edit.png" alt="Edit" style={{ width: '20px', height: '20px' }} />
              </button>
              <button onClick={() => handleDelete(index)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                <img src="/icons/trash.png" alt="Delete" style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Link1Page;
