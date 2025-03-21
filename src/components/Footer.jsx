import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

    return (
      <footer className="bg-uzk-dark text-white text-center pb-[2vh] fixed bottom-0 w-full">
        <button className="cursor-pointer hover:text-green-500" onClick={() => navigate("/impressum")}>
          Impressum
        </button>
      </footer>
    );
  };
  
  export default Footer;
  