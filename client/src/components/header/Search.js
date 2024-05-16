import React, { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <form className="search_form">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search"
        onClick={(e) => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))}
      />
    </form>
  );
};

export default Search;
