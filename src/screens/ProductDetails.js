import { Link, Outlet } from 'react-router-dom';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const postId = 123;
  return (
    <div className="Items">
      <div>{'Item 1'}</div>
      <div>{'Description'}</div>
      <Link to={`blogs/${postId}`} className="ProductDetails">
        Write Product Blog
      </Link>
      <Outlet />
    </div>
  );
}

export default ProductDetails;
