import Header from "../components/header";
import Footer from "../components/footer";
import ContainerEmails from "../components/ContainerEmails";
import ContainerFolders from "../components/ContainerFolders";
import { useState } from "react";
import { emails } from "../../data";



const Postfach = () => {
	const [current_folder, setCurrent_folder] = useState(0);
	const [emails_in_folder, setEmails_in_folder] = useState([]);
	return (
	<>
		<Header />
		<div className="mt-2">
			<div className="w-1/4"><ContainerFolders setEmails_in_folder={setEmails_in_folder} /></div> 
			<div className="w-3/4"><ContainerEmails current_folder={emails_in_folder} /></div> 
		</div>
		
		<Footer />
	</>
  );
};

export default Postfach;
