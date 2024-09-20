// AutoReplySection.tsx
import React from 'react';

interface AutoReplySectionProps {
  onRefresh: () => void;
}

const AutoReplySection: React.FC<AutoReplySectionProps> = ({ onRefresh }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
      <select style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }}>
        <option value="">All History</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>Email:</span>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
          }}
        />
        <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={onRefresh}>
          <img src="reload.png" alt="Reload" style={{ width: '20px', height: '20px' }} />
        </button>
      </div>
    </div>
  );
};

export default AutoReplySection;

