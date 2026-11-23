import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => navigate('/home')}>Login</button>
    </div>
  );
}

export default Login;