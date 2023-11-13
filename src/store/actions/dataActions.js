export const setData = (data) => ({
    type: 'SET_DATA',
    payload: data,
  });
  
  export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error,
  });