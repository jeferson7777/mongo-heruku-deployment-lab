const { REACT_APP_SERVER_URL } = process.env;
export const getAllMusic = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/music`);
  return await response.json();
};

export const createMusic = async ({ title, artist }) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/music`, {
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
