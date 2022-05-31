import axios from 'axios';
import { API_KEY, API_URL } from '@env';

console.log( API_URL);

const options = {
  method: 'GET',
  url: `${API_URL}`,
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': `${API_KEY}`,
  },
};

export const getAllExercises = () => {
  return axios
    .request(options)
    .then((r) => r)
    .catch((e) =>
      alert(
        "Une erreur est survenue veuillez réessayer ultérieurement, si le problème persiste, veuillez contacter l'administrateur.",
      ),
    );
};
