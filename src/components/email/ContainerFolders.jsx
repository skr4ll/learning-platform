import { emails, Folder } from "../../../data";
import ContainerEmails from "./ContainerEmails";
import { useState } from "react";
import ContextMenu from "./ContextMenu";
import { useEffect } from "react";

const ContainerFolders = () => {
    
    const [folders, setFolders] = useState([
        { id: -1, parent_id: null, folder_name: "root", clicked: false, expanded: false },
        { id: 0, parent_id: -1, folder_name: "Posteingang", clicked: false, expanded: false },
        { id: 1, parent_id: -1, folder_name: "Gesendet", clicked: false, expanded: false },
        { id: 2, parent_id: -1, folder_name: "Papierkorb", clicked: false, expanded: false },
    ]);

    const folders_without_root = folders.filter(f => f.id !== -1);
    const [all_emails, setAll_emails] = useState(emails);
    const [curr_folder, setCurr_folder] = useState(folders[1]);
    const [context_menu, setContext_menu] = useState(null);
    const [folder_emails, setFolder_emails] = useState([]);
    const [is_open, setIs_open] = useState(true);
    let context_caller = {};

    useEffect(() => {
        setFolder_emails(all_emails.filter(email => email.folder_id === curr_folder.id).sort((a, b) => b.datetime - a.datetime));
    }, [curr_folder, all_emails]);
    
    const handleChange = () => {
        setFolder_emails(emails.filter(email => email.folder_id === curr_folder.id).sort((a, b) => b.datetime - a.datetime));
    };
    
    curr_folder.clicked = true;
    
    const selectFolder = (folder) => {
        curr_folder.clicked = false;
        setCurr_folder(folder);
        setFolder_emails(emails.filter(email => email.folder_id === curr_folder.id).sort((a, b) => b.datetime - a.datetime));
    }

    const handleAccordionExpand = (pfolder, cf) => {
        pfolder.expanded = true;
        setIs_open(!is_open);
        selectFolder(cf);
    }
    
    const handleAccordionCollapse = (pfolder) => {
        pfolder.expanded = false;
        setIs_open(!is_open);
        selectFolder(pfolder);
    }

    const getButtonClass = (folder) => {
        if (folder.clicked) {
            return "flex cursor-pointer bg-white text-[3vw] ml-[0.5vw] p-[0.5vh] border-1 rounded lg:text-xl";
        } else {
            return "flex cursor-pointer hover:text-blue-50 text-[3vw] ml-[0.5vw] p-[0.5vh] lg:text-base";
        }
    };
    
    // Kontextmenü handler Funkktionen
    const handleContext = (event, calling_folder) => {
        event.preventDefault();
        context_caller = calling_folder;
        if (calling_folder.id > 1 || calling_folder.id === -1){
            setContext_menu({
                visible: true,
                x: event.pageX,
                y: event.pageY,
                type: "folder",
                called_by: calling_folder, 
                onDelete: () => deleteFolder(),
                onAdd: (to_add_folder_name) => addFolder(to_add_folder_name),
            })
        }
    }
    
    const addFolder = (to_add_folder_name) => {
        setContext_menu(null);
        const folder_to_add = new Folder(context_caller.id, to_add_folder_name);
        setFolders([...folders, folder_to_add]);
        selectFolder(folder_to_add);

    }  

    const deleteFolder = () => {
        // Case: Papierkorb (Hier wird nicht der Ordner gelöscht, sondern nur der Papierkorb geleert)
        // Dies ist die einzige Aktion bei der Mails wirklich gelöscht werden, sonst wird nur deren Ordner ID auf 2 gesetzt.
        if (context_caller.id === 2) {
            setAll_emails(prev => prev.filter(email => email.folder_id !== 2));
        }
        // Case: Parent ist root (Alle mails werden in Posteingang (PE) verschoben und alle child Ordner gelöscht (Mails auch in PE))
        else if (context_caller.parent_id === -1){
            let child_folders = folders.filter(f => f.parent_id === context_caller.id);
            let fids_to_check = [context_caller.id, ...child_folders.map(cf => cf.id)];
            emails.forEach (e => {
                if (fids_to_check.includes(e.folder_id)){
                    e.folder_id = 0;
                }
            });
            setFolders(folders.filter(f => !fids_to_check.includes(f.id)));
        }
        // Case: Else = Der Ordner ist ein Unterordner (Alle mails werden in Parentordner verschoben)
        else {
            emails.forEach (e => {
                if (e.folder_id === context_caller.id){
                    e.folder_id = context_caller.parent_id;
                }
            });
            setFolders(folders.filter(f => f.id !== context_caller.id));
        }
        setContext_menu(null);    
    };

    // Mapping der Folder in das Container Element
    const mapFolders = () => { 
        return folders_without_root.map((folder) => {
            let child_folders = folders_without_root.filter(cf => folder.id === cf.parent_id);
            
            // Der Ornder ist Child von root und HAT KEINE Children
            if (child_folders.length === 0 && folder.parent_id === -1) {    
                return (
                    <button onClick={() => selectFolder(folder)} key={folder.id} 
                            onContextMenu={(event) => handleContext(event, folder)} className={getButtonClass(folder)}
                    > 
                       {folder.id === 0 && "✉" + folder.folder_name}
                       {folder.id === 1 && "✈" + folder.folder_name}
                       {folder.id === 2 && "🗑" + folder.folder_name}
                       {folder.id > 2 && "⮞" + folder.folder_name}
                    </button>
                );
            } 
            
            // Der Ordner ist Child von root und HAT Children
            if (child_folders.length > 0 && folder.parent_id === -1) {
                return (
                    <div key={folder.id}>
                        <div className="flex">
                            <button 
                                onClick={() => selectFolder(folder)} 
                                onContextMenu={(event) => handleContext(event, folder)}
                                className={getButtonClass(folder)}
                            >
                                ➤ {folder.folder_name}
                            </button>
                            {folder.expanded ? <div className="m-1 text-[3vh] text-orange-400 hover:text-gray-500" onClick={() => handleAccordionCollapse(folder)}>⮝</div> : 
                                        <div className="ml-1 text-[3vh] text-orange-400 hover:text-gray-500" onClick={() => handleAccordionExpand(folder, child_folders[0])}>⮟</div>}
                            </div>
                        {folder.expanded && (
                            <div className="ml-5">
                                {child_folders.map((child) => (
                                    <button 
                                        key={child.id} 
                                        onClick={() => selectFolder(child)} 
                                        onContextMenu={(event) => handleContext(event, child)}
                                        className={getButtonClass(child)}
                                    >
                                        ⇨ {child.folder_name}
                                    </button>                                      
                                ))}
                            </div>
                        )}
                    </div>
                );      0
            }
            // return null;
        });
    };
    
    return (
        <>
        <div className="flex" onClick={() => setContext_menu(null)}>
            {/* Die Ordnerstruktur (POS: Links) */}
            <div className="h-[85vh] bg-uzk-light rounded-xl pt-[1vh] overflow-auto w-[18vw] lg:w-[30vw]"> 
                    {mapFolders()}
                    <div className="h-full w-full" onContextMenu={(event) => handleContext(event, folders[0])}></div>
            </div>
            {/* Der Emailcontainer (POS: Rechts): */}
            <div className="w-[81vw] lg:w-[90vw]">
                <ContainerEmails folder_emails={folder_emails} all_folders={folders_without_root} handleChange={handleChange}/>
            </div>
        </div>
    <div>{context_menu?.visible && <ContextMenu {...context_menu}/>}</div>
    </>   
    );
  };
  
  export default ContainerFolders;