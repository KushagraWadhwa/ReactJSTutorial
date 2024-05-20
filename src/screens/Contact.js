import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate('/');
  }
  return <button onClick={handleNavigation}>Go to Home</button>;
}

export default Contact;
