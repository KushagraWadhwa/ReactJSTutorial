import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="MainView">
      <p>{'HomePage'}</p>
      <div className="BottomView">
        <div id="ButtonView">
          <Link to={'/contact'} className="Contact">
            Contact
          </Link>
          <Link to={'/'} className="Home">
            Home
          </Link>
          <Link to={'/about'} className="About">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
