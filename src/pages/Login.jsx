import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      
      <header className="bg-uzk-dark text-white p-2">
      <div className="flex justify-between items-center mb-4">
        
        {/* Buttons links */}
        <div className="flex items-center">
        <button
          className=" w-35 cursor-pointer p-2 m-2 btn btn-blue rounded-xl border-3 border-white text-center"
          onClick={() => navigate("/faq")}
        >
          FAQ
        </button>
        </div>

        {/* Text */}
        <h1 className="text-3xl sm:text-5xl text-center flex-1">Random School</h1>
        
        {/* Buttons rechts */}
        <div className="flex items-center">
        <button
          className=" w-35 cursor-pointer p-2 m-2 btn btn-blue rounded-xl border-3 border-white text-center"
          onClick={() => navigate("/")}
        >
          Login
        </button>
        </div>
      </div>
    </header>

      <div className="flex justify-center items-center flex-1">
        <div className="w-full max-w-sm bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
          <input
            type="text"
            placeholder="Benutzername"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-uzk-light"
          />
          <input
            type="password"
            placeholder="Passwort"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-uzk-light"
          />
          <button onClick={handleLogin} className="w-full py-3 bg-uzk-dark text-white rounded-lg hover:bg-uzk-light transition-colors">
            Anmelden
          </button>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default Login;
