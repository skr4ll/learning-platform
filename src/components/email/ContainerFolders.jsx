import { emails, Folder } from "../../../data";
import ContainerEmails from "./ContainerEmails";
import { useState } from "react";
import ContextMenu from "./ContextMenu";

const ContainerFolders = () => {
    // Tracken der Änderungen am folders array sowie aktueller folder und ob folder geklickt wurde
    const [folders, setFolders] = useState([
        { id: -1, parent_id: -1, folder_name: "root", clicked: false },
        { id: 0, parent_id: -1, folder_name: "Posteingang", clicked: false },
        { id: 1, parent_id: -1, folder_name: "Gesendet", clicked: false },
        { id: 2, parent_id: -1, folder_name: "Papierkorb", clicked: false },
    ]);
    const [curr_folder, setCurr_folder] = useState(folders[1]);
    const [context_menu, setContext_menu] = useState(null);
    const folder_emails = emails.filter(email => email.folder_id === curr_folder.id).sort((a, b) => b.datetime - a.datetime);
    const folders_without_root = folders.filter(f => f.id !== -1);

    const selectFolder = (folder) => {
        // ToDo styling für geklickten Ordner implementieren
        setCurr_folder(folder);
    }
    
    const addFolder = (folder_name) => {
        console.log(folder_name)  
        const folder_to_add = new Folder(-1, folder_name);
        setFolders([...folders, folder_to_add]);
        selectFolder(folder_to_add);
    }    

    const getButtonClass = (folder) => {
        if (folder.clicked) {
            return "flex text-white cursor-pointer hover:text-blue-50 text-[3vw] p-[0.5vh] border-1 rounded lg:text-base";
        } else {
            return "flex cursor-pointer hover:text-blue-50 text-[3vw] lg:text-base";
        }
    };
    
    // Kontextmenü handler Funkktionen
    const handleContext = (event, calling_folder) => {
        event.preventDefault(); 
        if (calling_folder.id > 1 || calling_folder.id === -1){
            setContext_menu({
                visible: true,
                x: event.pageX,
                y: event.pageY,
                type: "folder",
                called_by: calling_folder, 
                onDelete: () => handleDeleteFolder(calling_folder.id),
                onAdd: (folder_name) => addFolder(folder_name),
                handleClick: () => handleClick(),
            })
        }
    }
    
    const handleDeleteFolder = (folder_id) => {
        console.log(`Lösche Ordner: ${folder_id}`);
        // ToDo Implementieren
    };
    
    const handleClick = () => {
        setContext_menu(null);
    };

    // Mapping der Folder in das Container Element
    const mapFolders = () => {
        
        return folders_without_root.map((folder) => {
            let child_folders = folders_without_root.filter(cf => folder.id === cf.parent_id);
            if (child_folders.length === 0) {    
                return (
                    <button onClick={() => selectFolder(folder)} key={folder.id} 
                            onContextMenu={(event) => handleContext(event, folder)} className={getButtonClass(folder)}
                    >
                        {folder.parent_id === -1 && folder.folder_name}
                    </button>
                );
            } 
            else if (child_folders.length > 0 && folder.parent_id === -1) {
                return (
                    <div key={folder.id}>
                        <button onClick={() => selectFolder(folder)} onContextMenu={(event) => handleContext(event, folder)} 
                                className={getButtonClass(folder)}
                        >
                            {folder.folder_name} (Parent)
                        </button>
                        <div className="ml-4">
                            {child_folders.map((child) =>(
                                <button key={child.id} onClick={() => selectFolder(child)} 
                                        onContextMenu={(event) => handleContext(event, child)} className={getButtonClass(child)}
                                >
                                    └ {child.folder_name}
                                </button>                                     
                            ))}
                        </div>     
                    </div>
                    );      
            }
            return null;
        });
    };
    
    return (
        <>
        
        <div className="flex" onClick={handleClick}>
            {/* Die Ordnerstruktur (POS: Links) */}
            <div className="h-[78vh] bg-uzk-light rounded-xl pt-[1vh] overflow-auto w-[18vw] lg:w-[30vw]"> 
                    {mapFolders()}
                    <div className="h-full w-full" onContextMenu={(event) => handleContext(event, folders[0])}></div>
            </div>
            {/* Der Emailcontainer (POS: Rechts): */}
            <div className="w-[81vw] lg:w-[90vw]">
                <ContainerEmails folder_emails={folder_emails} />
            </div>
        </div>
    



    
    <br></br>
    {/* <div className="bg-green-900 h-[35vh]">
        <p>TESTAREA</p>
        <br></br>
        <form className="bg-uzk-light h-[10vh]" action={addFolder}>
            <label>FOLDERNAME: </label>
            <input className="ml-3 bg-white" name="folder_name" />
            <label className="ml-[1vw]">PARENT_ID?: </label>
            <input className="ml-3 bg-white" name="parent_id" />
            <button className="ml-3 mt-1 border-1 rounded bg-uzk-dark text-white text-2xl hover:bg-green-700" type="submit">AddFolder</button>
        </form> 
    </div> */}
    <div>{context_menu?.visible && <ContextMenu {...context_menu}/>}</div>
    </>   
    );
  };
  
  export default ContainerFolders;