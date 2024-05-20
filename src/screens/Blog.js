import { useParams } from 'react-router-dom';
import '../styles/Blog.css';

function Blog() {
  const { postId } = useParams();
  return (
    <div>
      <p>{`Post ID: ${postId}`}</p>
    </div>
  );
}

export default Blog;
