import React, { useState, useEffect } from 'react';
import './styles.css'

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.potterdb.com/v1/characters');
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }

        const dataset = await response.json();
        const { data } = dataset;
        console.log(data);
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error.message);
      }
    };

    fetchCharacters();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      <div className="characters-container">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.attributes.image} alt={`${character.attributes.name} image`} />
            <div className="character-details">
              <h2>{character.attributes.name}</h2>
              <p>House: {character.attributes.house}</p>
              <p>Role: {character.attributes.role}</p>
              {/* Add more details as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersList;