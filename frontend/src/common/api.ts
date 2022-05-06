const HOST = 'https://localhost:3001';

export const API = {
  Register: `${HOST}/register`
}

export const request = (url: string, options: RequestInit) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch((e) => {
        console.log(e);
        reject(e);
      });
  })
}