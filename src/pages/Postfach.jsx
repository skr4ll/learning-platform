import Header from "../components/Header";
import Footer from "../components/Footer";
import ContainerFolders from "../components/email/ContainerFolders";

const Postfach = () => {
	return (
		<>
			<div className="h-auto w-[99vw]"><Header /></div>
			<div className="mt-[0.5vh] w-[99vw]"><ContainerFolders /></div>
			<div className="h-auto mt-[0.5vh] w-[99vw]"><Footer /></div>
		</>
  );
};

export default Postfach;
