const SearchBar = ({ searchVal, onChangeSearchInput, onGifsSubmit }) => {
  return (
    <form onSubmit={onGifsSubmit}>
      <input type="text" value={searchVal} onChange={onChangeSearchInput} />
      {/* <button type="submit">View Trending Gifs</button> */}
    </form>
  );
};

export default SearchBar;
