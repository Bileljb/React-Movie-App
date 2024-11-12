function Navbar({ searchQuery, setSearchQuery }) {
    return (
      <nav className="navbar">
        <div className="navbar-logo">MoviesLand</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-icon" onClick={() => setSearchQuery(searchQuery)}>
            🔍
          </button>
        </div>
        <ul className="navbar-menu">
          <li><a href="#">Home</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">Movies</a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Drama</a></li>
              <li><a href="#">Comedy</a></li>
              <li><a href="#">Horror</a></li>
              <li><a href="#">Sci-Fi</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">Series</a>
            <ul className="dropdown-menu">
              <li><a href="#">Fantasy</a></li>
              <li><a href="#">Documentary</a></li>
              <li><a href="#">Crime</a></li>
              <li><a href="#">Thriller</a></li>
              <li><a href="#">Adventure</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  