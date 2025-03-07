import { emails, Folder } from "../../data";
import ContainerEmails from "./ContainerEmails";
import { useState } from "react";
import ContextMenu from "./ContextMenu";

const ContainerFolders = () => {
    // Tracken der Änderungen am folders array sowie aktueller folder und ob folder geklickt wurde
    const [folders, setFolders] = useState([
        { id: 0, parent_id: -1, folder_name: "Posteingang", clicked: false },
        { id: 1, parent_id: -1, folder_name: "Gesendet", clicked: false },
        { id: 2, parent_id: -1, folder_name: "Papierkorb", clicked: false },
    ]);
    const [curr_folder, setCurr_folder] = useState(folders[0]);
    const [contextMenu, setContextMenu] = useState(null);

    const folder_emails = emails.filter(email => email.folder_id === curr_folder.id).sort((a, b) => b.datetime - a.datetime);

    const selectFolder = (folder) => {
        
        setCurr_folder(folder);
    }
    
    const addFolder = (formData) => {
        let parent_id = Number(formData.get("parent_id"));
        let new_folder_name =  formData.get("folder_name");
        !parent_id ? parent_id = -1 : parent_id; 
        const folder_to_add = new Folder(parent_id, new_folder_name);
        console.log(folder_to_add)
        // Momentan nur eine Unterordnerebene: alle ids > 2 sind keine Standardordner, alle ids = -1 sind auf der obersten Ebene.
        // Haben die parents dieser Ordner selber die parent_id: -1 kann der neue Ordner angelegt werden.
        if (parent_id === -1 || parent_id > 2 && folders[parent_id].parent_id === -1){
            setFolders([...folders, folder_to_add]);
            selectFolder(folder_to_add);
        }

        else{
            alert("INVALID ACTION!");
        }
    }    


    const getButtonClass = (folder) => {
        if (folder.clicked) {
            return "flex text-white cursor-pointer hover:text-blue-50 text-[3vw] p-[0.5vh] border-1 rounded lg:text-base";
        } else {
            return "flex cursor-pointer hover:text-blue-50 text-[3vw] lg:text-base";
        }
    };
    
    // Kontextmenü handler Funkktionen
    const handleContext = (event, fid) => {
        if (fid > 2) {
            event.preventDefault(); 
            setContextMenu({
                visible: true,
                x: event.pageX,
                y: event.pageY,
                type: "folder",
                ele_id: fid,
                onDelete: () => handleDeleteFolder(fid),
                onAdd: () => handleAddFolder(fid),
            })
        }
        else if (fid === 2){
            event.preventDefault(); 
            setContextMenu({
                visible: true,
                x: event.pageX,
                y: event.pageY,
                type: "folder",
                ele_id: fid,
                onEmpty: () => handleEmptyTrashbin(fid),
            })
        }
    }
    
    const handleDeleteFolder = (folder_id) => {
        console.log(`Lösche Ordner: ${folder_id}`);
        // ToDo Implementieren
    };
    
    const handleAddFolder = (parent_id) => {
        console.log(`Füge Ordner ${parent_id} hinzu`);
        // ToDo Implementieren
    };

    const handleClick = () => {
        setContextMenu(null);
    };

    const handleEmptyTrashbin = (parent_id) => {
        console.log(`Adding a subfolder to folder ${parent_id}`);
        // ToDo Implementieren
    };
    
    // Mapping der Folder in das Container Element
    const mapFolders = () => {
        return folders.map((folder) => {
            let child_folders = folders.filter(cf => folder.id === cf.parent_id);
            if (child_folders.length === 0) {    
                return (
                    <button onClick={() => selectFolder(folder)} key={folder.id} 
                            onContextMenu={(event) => handleContext(event, folder.id)} className={getButtonClass(folder)}
                    >
                        {folder.parent_id === -1 && folder.folder_name}
                    </button>
                );
            } 
            else if (child_folders.length > 0 && folder.parent_id === -1) {
                return (
                    <div key={folder.id}>
                        <button onClick={() => selectFolder(folder)} onContextMenu={(event) => handleContext(event, folder.id)} 
                                className={getButtonClass(folder)}
                        >
                            {folder.folder_name} (Parent)
                        </button>
                        <div className="ml-4">
                            {child_folders.map((child) =>(
                                <button key={child.id} onClick={() => selectFolder(child)} 
                                        onContextMenu={(event) => handleContext(event, child.id)} className={getButtonClass(child)}
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
        
        <div className="flex h-[45vh]" onClick={handleClick}>
            {/* Die Ordnerstruktur (POS: Links) */}
            <div className="bg-uzk-light rounded-xl pt-[1vh] overflow-auto w-[18vw] lg:w-[30vw]"> 
                    {mapFolders()}
            </div>
            {/* Der Emailcontainer (POS: Rechts): */}
            <div className="w-[81vw] lg:w-[90vw]">
                <ContainerEmails folder_emails={folder_emails} />
            </div>
        </div>
    



    
    <br></br>
    <div className="bg-green-900 h-[35vh]">
        <p>TESTAREA</p>
        <br></br>
        <form className="bg-uzk-light h-[10vh]" action={addFolder}>
            <label>FOLDERNAME: </label>
            <input className="ml-3 bg-white" name="folder_name" />
            <label className="ml-[1vw]">PARENT_ID?: </label>
            <input className="ml-3 bg-white" name="parent_id" />
            <button className="ml-3 mt-1 border-1 rounded bg-uzk-dark text-white text-2xl hover:bg-green-700" type="submit">AddFolder</button>
        </form> 
    </div>
    <div>{contextMenu?.visible && <ContextMenu {...contextMenu} />}</div>
    </>   
    );
  };
  
  export default ContainerFolders;