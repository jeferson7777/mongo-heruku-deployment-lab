export const getAllMusic = async () => {
  const response = await fetch('http://localhost:5000/music');
  return await response.json();
};

export const createMusic = async ({ title, artist }) => {
  const response = await fetch('http://localhost:5000/music', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      artist,
    }),
  });

  return await response.json();
};
