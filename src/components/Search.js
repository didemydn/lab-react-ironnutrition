import React from 'react';
import { Divider, Input } from 'antd';

function Search({ onSearch }) {
  const handleSearch = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;