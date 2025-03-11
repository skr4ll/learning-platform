import Email from "./Email";
import MailView from "./MailView";
import { useState } from "react";

const ContainerEmails = ({folder_emails}) => {
    const [selected_mail, setSelected_mail] = useState(null);
    const handleClick = (email) => {
        email.clicked = true;
        setSelected_mail(email);
    }
    
    return (
        <div className="flex h-[30vh] w-[85w]">
            {/* Liste der Emails (POS: Mitte) */}
            <div className="h-[73vh] overflow-auto ml-[0.5vw] w:-[25vw] lg:w-[25vw]">
                {folder_emails.map((email) => (
                    <div onClick={() => {handleClick(email)}} key={email.id}>
                        <Email {...email} />
                    </div>
                ))}
            </div>
            {/* Leseansicht der gewählten Mail (POS: Rechts) */}
            <div className="h-[73vh] w-[30vw] lg:w-[60vw]">
                <MailView {...selected_mail} />
            </div>
        </div>
    );
};

export default ContainerEmails;