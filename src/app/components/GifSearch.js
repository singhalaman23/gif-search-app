"use client"
import { useEffect, useState } from 'react';
// import GIPHY_API_KEY from ./giphy;

const GifSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${'GlVGYHkr3WSBnllca54iNt0yFbjz7L65'}`
      );

      if (response.ok) {
        const data = await response.json();
        setGifs(data.data);
      }
    } catch (error) {
      console.error('Error fetching GIPHY data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for GIFs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
};

export default GifSearch;
