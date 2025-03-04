import Email from "../components/Email";
import MailView from "./MailView";
import { useState } from "react";

const ContainerEmails = (props) => {
    const [selected_mail, setSelected_mail] = useState({});
    const current_mails = props.mails;
    const handleClick = (email) => {
        setSelected_mail(email);
    }
    
    return (
        <div className="flex h-[77vh]">
            {/* Liste der Emails (POS: Mitte) */}
            <div className="overflow-auto ml-[0.5vw] h-full w:-[25vw] lg:w-[15vw]">
                {current_mails.map((email) => (
                    <div onClick={() => {handleClick(email)}} key={email.id}>
                        <Email {...email} />
                    </div>
                ))}
            </div>
            {/* Leseansicht der gewählten Mail (POS: Rechts) */}
            <div className="w-[70vw] lg:w-[75vw] h-full">
                <MailView {...selected_mail} />
            </div>
        </div>
    );
};

export default ContainerEmails;