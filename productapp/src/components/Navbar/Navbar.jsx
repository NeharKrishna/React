import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <h1>Dummy App</h1>
      <Link to="/recipes"><span>Recipes</span></Link>
      <Link to="/users"><span>Users</span></Link>
      <Link to="/products"><span>Products</span></Link>
    </nav>
  );
}
export default Navbar;