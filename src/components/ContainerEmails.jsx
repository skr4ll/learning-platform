import Email from "../components/Email";
import MailView from "./MailView";
import { useState } from "react";

const ContainerEmails = ({emails}) => {
    const [selected_mail, setSelected_mail] = useState({});
    // console.log(emails);
    const handleClick = (email) => {
        setSelected_mail(email);
    }
    
    return (
        <div className="flex">
            <div className="h-145 overflow-auto mr-1 w-1/4">
                {emails.map((email) => (
                    <div onClick={() => {handleClick(email)}} key={email.id}>
                        <Email {...email} />
                    </div>
                ))}
            </div>
            <div className="w-3/4">
                <MailView {...selected_mail} />
            </div>
        </div>
    );
};

export default ContainerEmails;