import React, { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <form className="search_form">
      <input
        type="text"
        name="search"
        value={search}
        id="search"
        onClick={(e) => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))}
      />
      <div className="search_icon">
        <span className="material-icons">search</span>
        <span>Search</span>
      </div>
      <div className="close_search">&times;</div>
    </form>
  );
};

export default Search;
