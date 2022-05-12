import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '4b2bce93c8mshf294847386a5ed8p17fdafjsndc04db8707cf',
  },
};

export const getAllExercises = () => {
  return axios
    .request(options)
    .then((r) => r)
    .catch((e) => alert("Une erreur est survenue veuillez réessayer ultérieurement, si le problème persiste, veuillez contacter l'administrateur."));
};
