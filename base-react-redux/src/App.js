import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <div>
        test link
        <button>
          <Link to="/admins">Go to admin </Link>
        </button>
        <button>
          <Link to="/users">Go to user</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
