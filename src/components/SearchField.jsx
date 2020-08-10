import React from 'react';

const SearchField = ({ onSearchWeather }) => {
  const [search, setSearch] = React.useState('');

  const changeSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  const clearSearch = () => {
    setSearch('');
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearchWeather(search);
    clearSearch();
  };

  return (
    <form className="search-field" onSubmit={onSubmitHandler}>
      <input
        onChange={changeSearch}
        value={search}
        className="search-field__input"
        type="text"
        placeholder="City name..."
      />
      <button className="search-field__btn btn btn-main" type="submit">
        Add
      </button>

      <button onClick={clearSearch} className="search-field__btn btn btn-secondary" type="button">
        Clear
      </button>
    </form>
  );
};

export default SearchField;
