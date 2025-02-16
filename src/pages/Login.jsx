import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <header className="bg-uzk-dark text-white p-4 flex justify-between items-center">
        <div className="justify-center text-lg font-semibold">Random School</div>
        <div className="space-x-2">
          <button className="text-white">Language</button>
        </div>
      </header>

      <div className="flex justify-center items-center flex-1">
        <div className="w-full max-w-sm bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
          <input
            type="text"
            placeholder="Benutzername"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Passwort"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={handleLogin} className="w-full py-3 bg-uzk-dark text-white rounded-lg hover:bg-blue-700 transition-colors">
            Anmelden
          </button>
        </div>
      </div>

      <footer className="bg-uzk-dark text-white p-4">
        <div className="flex justify-between">
          <button className="bg-uzk-dark px-4 py-2 rounded">Random School FAQ</button>
          <button className="bg-uzk-dark px-4 py-2 rounded">Aktuelle Informationen</button>
          <button className="bg-uzk-dark px-4 py-2 rounded">Digitale Prüfungen</button>
          <button className="bg-uzk-dark px-4 py-2 rounded">Schulungen</button>
        </div>
      </footer>
    </div>
  );
};

export default Login;
