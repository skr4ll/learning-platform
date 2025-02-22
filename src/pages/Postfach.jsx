import Header from "../components/header";
import Footer from "../components/footer";
import ContainerEmails from "../components/ContainerEmails";
import MailView from "../components/MailView";
import ContainerFolders from "../components/ContainerFolders";


const Postfach = () => {
  
	return (
	<>
		<Header />
		<div className="mt-2 flex">
			<div className="w-1/4"><ContainerFolders /></div> 
			<div className="w-3/4"><ContainerEmails /></div> 
			{/* <div className="w-2/4"><MailView selected_mailid={selected_mailid}/></div>  */}
		</div>
		
		<Footer />
	</>
  );
};

export default Postfach;
