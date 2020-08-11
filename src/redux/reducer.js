const initialState = {
  weatherCards: [],
  loading: false,
  error: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'ADD_CARD':
      return {
        ...state,
        weatherCards: [...state.weatherCards, action.payload.card],
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'DELETE_CARD':
      return {
        ...state,
        weatherCards: state.weatherCards.filter((card) => card.id !== action.payload),
      };
    default:
      return state;
  }
}
