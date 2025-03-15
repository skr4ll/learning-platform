import Email from "./Email";
import MailView from "./MailView";
import { useState } from "react";
import ContextMenu from "./ContextMenu";
import ReplyModal from "./ReplyModal";


const ContainerEmails = ({folder_emails, all_folders, handleChange}) => {
    const [selected_mail, setSelected_mail] = useState(null);
    const [context_menu, setContext_menu] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [forceRender, setForceRender] = useState(false);

    const handleClick = (email) => {
        email.clicked = true;
        setSelected_mail(email);
        setContext_menu(null)
    }

    // Kontextmenü handler Funktionen
    const handleContext = (event, email) => {
        event.preventDefault();
            setContext_menu({
                visible: true,
                x: event.pageX,
                y: event.pageY,
                type: "email",
                called_by: email, 
                onMove: (email, to_folder) => moveEmail(email, to_folder),
                onReply: (email) => replyEmail(email),
                curr_folders: all_folders,
            })
    }
    
    const moveEmail = (mail, tf) => {
        setContext_menu(null);
        mail.folder_id = tf.id;
        handleChange();
        
    } 

    const replyEmail = (m) => {
        setSelected_mail(m);
        setShowModal(true);
        setContext_menu(null);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
        <div onClick={() => setContext_menu(null)} className="flex h-[30vh] w-[85w]">
            {/* Liste der Emails (POS: Mitte) */}
            <div className="h-[73vh] overflow-auto ml-[0.5vw] w:-[25vw] lg:w-[25vw]">
                {folder_emails.map((email) => (
                    <div onClick={() => {handleClick(email)}} onContextMenu={(event) => handleContext(event, email)}  key={email.id}>
                        <Email {...email} />
                    </div>
                ))}
                {folder_emails.length === 0 && <div className="text-red-600">Keine Mails vorhanden</div>}
            </div>
            {/* Leseansicht der gewählten Mail (POS: Rechts) */}
            <div className="h-[73vh] w-[30vw] lg:w-[60vw]" >
                <MailView {...selected_mail} />
            </div>
        </div>
        {showModal && <ReplyModal email={selected_mail} closeModal={closeModal}/>}
        <div>{context_menu?.visible && <ContextMenu {...context_menu}/>}</div>
        </>
    );
};

export default ContainerEmails;