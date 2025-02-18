import Email from "../components/Email";
import { emails } from "../../data";

const ContainerEmails = () => {
    const handleClick = (mail_id) => {
        alert("Mail with id " + mail_id + " clicked!")
    }

    return (
      <div className="h-145 overflow-auto mr-1">
          {emails.map((email) => (
              <div onClick={() => {handleClick(email.id)}} key={email.id}><Email {...email} /></div>
          ))}
      </div>
    );
  };
  
  export default ContainerEmails;