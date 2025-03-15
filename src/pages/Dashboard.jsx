import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();
  return (
    <>
		<Header />
			<h1 className="text-4xl text-center font-bold">DASHBOARD</h1>
			<button
          className="w-35 cursor-pointer p-2 btn btn-blue rounded-xl border-3 border-white text-center"
          onClick={() => navigate("/veranstaltung")}
        >
          BSI 1
        </button>
		<Footer />
	</>
  );
};

export default Dashboard;
