import React, { useState } from 'react';
import { createMusic } from '../../lib/fetch-music.js';

const NewMusic = () => {
  const [musicItem, setMusicItem] = useState({
    title: '',
    artist: '',
  });

  const handleOnChange = (event) => {
    const { name, value } = event.currentTarget;
    setMusicItem({ ...musicItem, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { title, artist } = musicItem;

    const newMusicItem = await createMusic({ title, artist });
    // TODO: redirect to show page
  };

  return (
    <main>
      <h2>New</h2>

      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={musicItem.title}
          placeholder="song title"
          onChange={handleOnChange}
          id="title"
        />
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          value={musicItem.artist}
          placeholder="artist name"
          onChange={handleOnChange}
          id="artist"
        />
        <button type="submit">Create</button>
      </form>
    </main>
  );
};

export default NewMusic;
