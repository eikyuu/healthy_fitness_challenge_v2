import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '7115ba4695msh5a6a71e67c0bb8cp11634djsnfeb4a0d2e360',
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
