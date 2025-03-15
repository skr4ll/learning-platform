import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
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
        <button
          className=" w-35 cursor-pointer p-2 m-2 btn btn-blue rounded-xl border-3 border-white text-center"
          onClick={() => navigate("/dashboard")}
        >
          Home
        </button>
        </div>

        {/* Text */}
        <h1 className="text-3xl sm:text-5xl text-center flex-1">Random School</h1>
        
        {/* Buttons rechts */}
        <div className="flex items-center">
        <button
          className="w-35 cursor-pointer p-2 m-2 btn btn-blue rounded-xl border-3 border-white text-center"
          onClick={() => navigate("/postfach")}
        >
          Postfach
        </button>
        <button
          className=" w-35 cursor-pointer p-2 m-2 btn btn-blue rounded-xl border-3 border-white text-center"
          onClick={() => navigate("/")}
        >
          Logout
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
