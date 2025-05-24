const SearchBar = ({ buscar, setBuscar }) => (
  <div className="Search" >
    <input
      type="text"
      placeholder="Buscar por ID o descripción"
      value={buscar}
      onChange={(e) => setBuscar(e.target.value)}
    />
  </div>
);

export default SearchBar;