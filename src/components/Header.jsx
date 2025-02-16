import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-uzk-dark text-white p-4">
      <div className="flex justify-between items-center mb-4">
        
        {/* Buttons links */}
        <div className="flex items-center">
          <button
            className="cursor-pointer flex justify-center items-center"
            onClick={() => navigate("/faq")}
          >
            <img className="h-12 w-12 sm:h-15 sm:w-15" src="/faq_button.png" alt="FAQ" />
          </button>
          <button
            className="cursor-pointer flex justify-center items-center"
            onClick={() => navigate("/fakultaeten")}
          >
            <img className="h-12 w-12 sm:h-15 sm:w-15" src="/lang_button.png" alt="Fakultäten" />
          </button>
        </div>

        {/* Text */}
        <h1 className="text-3xl sm:text-5xl text-center flex-1">Random School</h1>
        
        {/* Buttons rechts */}
        <div className="flex items-center">
          <button
            className="cursor-pointer flex justify-center items-center"
            onClick={() => navigate("/postfach")}
          >
            <img className="h-12 w-12 sm:h-15 sm:w-15" src="/mail_button.png" alt="Postfach" />
          </button>
          <button
            className="cursor-pointer flex justify-center items-center"
            onClick={() => navigate("/")}
          >
            <img className="h-12 w-12 sm:h-15 sm:w-15" src="../logout_button.png" alt="Logout" />
          </button>
        </div>
      </div>
    
        {/* Link Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          className="w-35 cursor-pointer pr-2 btn btn-blue rounded-xl border-3 border-white text-center"
          onClick={() => navigate("/fakultaeten")}
        >
          Fakultäten
        </button>
        <button
          className="w-35 cursor-pointer p-2 btn btn-blue rounded-xl border-3 border-white text-center"
          onClick={() => navigate("/veranstaltung")}
        >
          Veranstaltungen
        </button>
        <button
          className=" w-35 cursor-pointer p-2 btn btn-blue rounded-xl border-3 border-white text-center"
          onClick={() => navigate("/dashboard")}
        >
          Home
        </button>
      </div>
    </header>
  );
};

export default Header;
