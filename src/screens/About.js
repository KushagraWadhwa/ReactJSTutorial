import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <header>
        <p>About</p>
        <Link to={'productDetails'} className="ProductDetails">
          Product Details
        </Link>
        <Outlet />
      </header>
    </div>
  );
}

export default About;
