import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (searchTerm === '') {
      setCharacters([]);
      return;
    }

    const fetchCharacters = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setCharacters(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchTerm]);

  return (
    <div className='app'>
      <h1>SWAPI Search</h1>
      <input
        type='text'
        placeholder='Search Star Wars characters...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className='error'>Error: {error}</p>}
      <ul>
        {characters.map((char) => (
          <li key={char.url}>
            <strong>{char.name}</strong> - {char.gender}, {char.birth_year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

