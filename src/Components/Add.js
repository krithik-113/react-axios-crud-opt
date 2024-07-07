import React from 'react'

const Add = ({
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    handleAddData }) => {
    
  return (
    <div className="add">
      <input
        placeholder="Enter name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="Enter email id"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={() => handleAddData(userName, userEmail)}>Add</button>
    </div>
  );
};

export default Add