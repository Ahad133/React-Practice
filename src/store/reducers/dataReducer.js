const initialState = {
    data: [],
    error: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload, error: null };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;