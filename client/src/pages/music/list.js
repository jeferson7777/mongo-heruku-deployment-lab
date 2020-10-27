import React, { useEffect, useState } from 'react';
import { getAllMusic } from '../../lib/fetch-music.js';

const ListMusic = () => {
  const [musicData, setMusicData] = useState([]);

  const fetchAllMusic = async () => {
    const data = await getAllMusic();
    console.log({ data });
    setMusicData(data);
  };

  useEffect(() => {
    fetchAllMusic();
  }, []);

  return (
    <main>
      <h2>List</h2>

      <ul>
        {musicData.map((musicItem, i) => {
          return (
            <li key={i}>
              <h3>{musicItem.artist}</h3>
              <p>{musicItem.title}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ListMusic;
