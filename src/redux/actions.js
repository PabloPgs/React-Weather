export const setLoading = (value) => {
  return {
    type: 'SET_LOADING',
    payload: value,
  };
};

export const setError = (error) => {
  return {
    type: 'SET_ERROR',
    payload: error,
  };
};

export const addWeatherCard = (card, loading, error) => {
  return {
    type: 'ADD_CARD',
    payload: {
      card,
      loading,
      error,
    },
  };
};

export const deleteCard = (id) => {
  return {
    type: 'DELETE_CARD',
    payload: id,
  };
};

export const fetchData = (town) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const resp = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=3d7fd5a2c83506030449a7ffad8e0474`,
    );
    const data = await resp.json();
    const { id, name, main, sys, weather } = data;
    const card = {
      id,
      name,
      temp: Math.round(main.temp - 273.15),
      icon: weather[0].icon,
      descr: weather[0].description,
      country: sys.country,
    };

    dispatch(addWeatherCard(card, false, ''));
  } catch (e) {
    dispatch(setLoading(false));
    dispatch(setError('Town not found('));
  }
};
