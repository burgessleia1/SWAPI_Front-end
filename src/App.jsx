import { useState, useEffect } from 'react';
import './App.css';
import { GetCharacters, GetCharacterById } from './API/CharacterAPI';

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
        // Using axios function from CharacterAPI.js
        const response = await GetCharacters();
        // Filter results based on search term
        const filtered = response.data.results.filter(char =>
          char.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCharacters(filtered);
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
          <li key={char.uid}>
            <strong>{char.name}</strong> - {char.gender || 'unknown'}, {char.birth_year || 'unknown'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

