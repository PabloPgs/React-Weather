import React from 'react';

const WeatherCard = ({ id, name, icon, descr, country, temp, onDeleteCard }) => {
  const deleteCard = () => {
    onDeleteCard(id);
  };

  return (
    <div className="weather-card">
      <span onClick={deleteCard} className="weather-card__delete">
        &times;
      </span>
      <h5 className="weather-card__title">{name}</h5>
      <p className="weather-card__descr">{descr}</p>
      <p className="weather-card__temp">{temp}℃</p>
      <p className="weather-card__country">{country}</p>
      <div className="weather-card__img">
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
      </div>
    </div>
  );
};

export default WeatherCard;
