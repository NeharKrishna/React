import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <h1>Link</h1>
      <Link to="/Fakedata"><span>Fake data</span></Link>
    </nav>
  );
}
export default Navbar;