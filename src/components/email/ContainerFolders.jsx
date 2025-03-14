import { emails, Folder } from "../../../data";
import ContainerEmails from "./ContainerEmails";
import { useState } from "react";
import ContextMenu from "./ContextMenu";

const ContainerFolders = () => {
    const [folders, setFolders] = useState([
        { id: -1, parent_id: null, folder_name: "root", clicked: false },
        { id: 0, parent_id: -1, folder_name: "Posteingang", clicked: false },
        { id: 1, parent_id: -1, folder_name: "Gesendet", clicked: false },
        { id: 2, parent_id: -1, folder_name: "Papierkorb", clicked: false },
    ]);
    const [curr_folder, setCurr_folder] = useState(folders[1]);
    const [context_menu, setContext_menu] = useState(null);
    const folder_emails = emails.filter(email => email.folder_id === curr_folder.id).sort((a, b) => b.datetime - a.datetime);
    const folders_without_root = folders.filter(f => f.id !== -1);
    
    curr_folder.clicked = true;
    const selectFolder = (folder) => {
        curr_folder.clicked = false;
        setCurr_folder(folder);
        folder_emails.forEach(e => e.clicked = false);
    }

    const getButtonClass = (folder) => {
        if (folder.clicked) {
            return "flex cursor-pointer bg-white text-[3vw] ml-[0.5vw] p-[0.5vh] border-1 rounded lg:text-xl";
        } else {
            return "flex cursor-pointer hover:text-blue-50 text-[3vw] ml-[0.5vw] lg:text-base";
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
                onDelete: (to_delete_folder) => deleteFolder(to_delete_folder),
                onAdd: (to_add_folder_name) => addFolder(to_add_folder_name),
                handleClick: () => handleClick(),
            })
        }
    }
    const addFolder = (to_add_folder_name) => {
        const folder_to_add = new Folder(-1, to_add_folder_name);
        setFolders([...folders, folder_to_add]);
        selectFolder(folder_to_add);
    }  

    // const deleteFolder = (to_delete_folder) => {
    //     // Case: Papierkorb (Hier wird nicht der Ordner gelöscht, sondern nur der Papierkorb geleert)
    //     // Dies ist die einzige Aktion bei der Mails wirklich gelöscht werden, sonst wird nur deren Ordner ID auf 2 gesetzt.
    //     if (to_delete_folder.id === 2){
    //         emails = emails.reduce((p, email) => (email.folder_id !== 2 && p.push(email),p),[]);
    //         if (curr_folder.id === 2) setCurr_folder(folders[1]);
    //     }
    //     // Case: Parent ist root (Alle mails werden in Posteingang (PE) verschoben und alle child Ordner gelöscht (Mails auch in PE))
    //     else if (to_delete_folder.parent_id === -1){
    //         let child_folders = folders.filter(f => f.parent_id === to_delete_folder.id);
    //         let fids_to_check = [to_delete_folder.id, ...child_folders.map(cf => cf.id)];
    //         emails.forEach (e => {
    //             if (fids_to_check.includes(e.folder_id)){
    //                 e.folder_id = 0;
    //             }
    //         });
    //         setFolders(folders.filter(f => !fids_to_check.includes(f.id)));
    //     }
    //     // Case: Else = Der Ordner ist ein Unterordner (Alle mails werden in Parentordner verschoben)
    //     else {
    //         emails.forEach (e => {
    //             if (e.folder_id === to_delete_folder.id){
    //                 e.folder_id = to_delete_folder.parent_id;
    //             }
    //         });
    //         setFolders(folders.filter(f => f.id !== to_delete_folder.id));
    //     }    
    // };

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
        <div className="flex" onClick={() => setContext_menu(null)}>
            {/* Die Ordnerstruktur (POS: Links) */}
            <div className="h-[73vh] bg-uzk-light rounded-xl pt-[1vh] overflow-auto w-[18vw] lg:w-[30vw]"> 
                    {mapFolders()}
                    <div className="h-full w-full" onContextMenu={(event) => handleContext(event, folders[0])}></div>
            </div>
            {/* Der Emailcontainer (POS: Rechts): */}
            <div className="w-[81vw] lg:w-[90vw]">
                <ContainerEmails folder_emails={folder_emails} />
            </div>
        </div>
    <div>{context_menu?.visible && <ContextMenu {...context_menu}/>}</div>
    </>   
    );
  };
  
  export default ContainerFolders;