import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/login">
        <button>Go to About</button>
      </Link>
    </div>
  );
}

export default Home;
