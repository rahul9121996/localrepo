import React, { useState, useCallback, useMemo } from 'react';

export default function NameEmailList() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [entries, setEntries] = useState([]);

  // Add entry to the list
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setEntries((prevEntries) => [...prevEntries, { name, email }]);
      setName('');
      setEmail('');  

    }
  }, [name, email]);

  //Filter entries based on search
  const filteredEntries = useMemo(() => {
    return entries.filter(
      (entry) =>
        entry.name.toLowerCase().includes(search.toLowerCase()) ||
        entry.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [entries, search]);


  return (
    <div className="max-w-[500px] mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Name and Email Collector:</h2>
  
      <form onSubmit={handleSubmit} className="mb-4 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
  
      <input
        type="text"
        placeholder="Search name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
  
      <ul className="list-none p-0">
        {filteredEntries.map((entry, idx) => (
          <li
            key={idx}
            className="p-2 mb-2 border border-gray-300 rounded"
          >
            <div><strong>Name:</strong> {entry.name}</div>
            <div><strong>Email:</strong> {entry.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}  