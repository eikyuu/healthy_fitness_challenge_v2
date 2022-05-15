const useErrorHandler = () => {
  const errorHandler = (error) => {
    let message = 'Une erreur est survenue';
    alert(message);
    throw new Error(error);
  };
  return { errorHandler };
};

export default useErrorHandler;
4;
