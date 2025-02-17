import Header from "../components/header";
import Footer from "../components/footer";
import Email from "../components/Email";
import { emails } from "../../data";

const Postfach = () => {
  return (
	<>
		<Header />
		{emails.map((email) => (
			<li key={email.id}><Email {...email} /></li>

		))}
		<Footer />
	</>
  );
};

export default Postfach;
