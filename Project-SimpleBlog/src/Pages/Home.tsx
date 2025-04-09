import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <h2>Welcome to my Simple Blog</h2>
      <Link to="/blog">Go to articles</Link>
    </>
  );
};

export default Home;
