import { emails, Folder } from "../../data";
import ContainerEmails from "./ContainerEmails";
import { useState } from "react";

const ContainerFolders = () => {
    // Tracken der Änderungen am folders array sowie aktueller folder und ob folder geklickt wurde
    const [folders, setFolders] = useState([
        { id: 0, parent: -1, folder_name: "Posteingang", clicked: false, has_children: false },
        { id: 1, parent: -1, folder_name: "Gesendet", clicked: false, has_children: false },
        { id: 2, parent: -1, folder_name: "Papierkorb", clicked: false, has_children: false },
    ]);
    const [curr_folder, setCurr_folder] = useState(folders[0]);
    const [clicked, setClicked] = useState(true);
    
    const setFolder = (folder) => {
        curr_folder.clicked = false;
        setCurr_folder(folder);
        setClicked(true);
    }
    
    const addFolder = (formData) => {
        const folder_to_add = new Folder(-1, formData.get("query"));
        setFolders([...folders, folder_to_add]);
        setFolder(folder_to_add);
    }

    const getButtonClass = (folder) => {
        if (folder.clicked) {
            return "text-white cursor-pointer hover:text-blue-50 text-[3vw] p-[0.5vh] border-1 rounded lg:text-base";
        } else {
            return "cursor-pointer hover:text-blue-50 text-[3vw] lg:text-base";
        }
    };

    curr_folder.clicked = clicked;
    const folder_emails = emails.filter(email => email.folder_id === curr_folder.id).sort((a, b) => b.datetime - a.datetime);

    return (
    <>
    <div className="flex h-[35vh]">
        {/* Die Ordnerstruktur (POS: Links) */}
        <div className="bg-uzk-light rounded-xl pt-[1vh] overflow-auto w-[18vw] lg:w-[30vw]"> 
                {folders.map((folder) => {
                    if (folder) {  
                        return (
                            <div className="pl-[1vw]" onClick={() => setFolder(folder)} key={folder.id}>
                                <button className={getButtonClass(folder)}>
                                    {folder.folder_name}
                                </button>
                            </div>
                        );
                    } else {
                        return <div key={`empty-${Math.random()}`}>Ordner nicht gefunden</div>;
                    }
                })}
            </div>
        
        {/* Der Emailcontainer (POS: Rechts): */}
        <div className="w-[81vw] lg:w-[90vw]">
            <ContainerEmails folder_emails={folder_emails} />
        </div>
    </div>
    
    
    
    
    <br></br>
    <div className="bg-yellow-300 h-[50vh]">
        <p>TESTAREA</p>
        <br></br>
        <form className="bg-uzk-light h-[10vh]" action={addFolder}>
            <label>FOLDERNAME: </label>
            <input className="ml-3 bg-white" name="query" />
            <button className="ml-3 mt-1 border-1 rounded bg-uzk-dark text-white text-2xl hover:bg-green-700" type="submit">AddFolder</button>
        </form> 
    </div>
    </>   
    );
  };
  
  export default ContainerFolders;