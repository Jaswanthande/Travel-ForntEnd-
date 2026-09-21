import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const favorites = useSelector(
    state => state.favorites
  );

  return (

    <nav>

      <Link to="/">
        Home
      </Link>

      <Link to="/destinations">
        Destinations
      </Link>

      <Link to="/favorites">
        Favorites ({favorites.length})
      </Link>

    </nav>

  );
}

export default Navbar;