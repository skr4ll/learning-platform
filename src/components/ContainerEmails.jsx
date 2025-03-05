import Email from "../components/Email";
import MailView from "./MailView";
import { useState } from "react";

const ContainerEmails = ({folder_emails}) => {
    const [selected_mail, setSelected_mail] = useState({});
    const handleClick = (email) => {
        setSelected_mail(email);
    }
    
    return (
        <div className="flex h-[30vh]">
            {/* Liste der Emails (POS: Mitte) */}
            <div className="overflow-auto ml-[0.5vw] h-full w:-[25vw] lg:w-[15vw]">
                {folder_emails.map((email) => (
                    <div onClick={() => {handleClick(email)}} key={email.id}>
                        <Email {...email} />
                    </div>
                ))}
            </div>
            {/* Leseansicht der gewählten Mail (POS: Rechts) */}
            <div className="w-[30vw] lg:w-[30vw] h-full">
                <MailView {...selected_mail} />
            </div>
        </div>
    );
};

export default ContainerEmails;