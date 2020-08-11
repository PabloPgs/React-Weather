import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// actions
import { fetchData, setError, deleteCard } from './redux/actions';
// components
import { SearchField, WeatherCard, Loader } from './components';
// валидирование инпута
const validateSearch = (search) => {
  if (search.length > 2 && search === search.replace(/[^a-z]/gi, '')) {
    return true;
  } else {
    return false;
  }
};

const App = () => {
  const { weatherCards, error, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  // При поиске
  const onSearchWeather = (search) => {
    if (weatherCards.find((card) => card.name.toLowerCase() === search.toLowerCase())) {
      dispatch(setError('Card already exists'));
    } else if (!validateSearch(search)) {
      dispatch(setError('Town not found.Remember that only english names are valid'));
    } else {
      dispatch(fetchData(search));
    }
  };

  // При удалении
  const onDeleteCard = (id) => {
    dispatch(deleteCard(id));
  };

  // При изменении , сохранение в localstorage
  React.useEffect(() => {
    localStorage.setItem('weatherCards', JSON.stringify(weatherCards));
  }, [weatherCards]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="app__title">Weather app</h1>

        {error && <p className="app__error">{error}</p>}
        {loading && (
          <div className="app__loader">
            <Loader />
          </div>
        )}
        {weatherCards.length === 0 && <p className="app__empty">No cards yet</p>}

        <SearchField onSearchWeather={onSearchWeather} />

        <div className="app__content">
          {weatherCards.map((card) => {
            return (
              <CSSTransition key={card.id} in={true} appear={true} timeout={1200} classNames="fade">
                <WeatherCard onDeleteCard={onDeleteCard} {...card} />
              </CSSTransition>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
