function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">🛍 ShopEasy</div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search for products..."
          className="search"
        />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Cart 🛒</a>
      </div>
    </nav>
  );
}

export default Navbar;