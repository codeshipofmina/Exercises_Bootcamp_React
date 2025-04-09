import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <h1>My Life</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
