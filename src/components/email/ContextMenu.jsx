import { useState } from "react";

const ContextMenu = (props) => {
    let add_name = "";
    const [show_add_field, setShow_add_field] = useState(false);
    const [show_folders, setShow_folders] = useState(false);
    
    // Submit neuen Ordner
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const formData = new FormData(e.target);
        add_name = formData.get("folder_name");
        if(add_name){
            props.onAdd(add_name);
        } 
      };

    const mapCurrFolders = () => {
        return (
            <ul>
                {props.curr_folders.filter(f => f.id !== 2 && f.id !== 1).map((f) => (
                    <li className="p-1 bg-uzk-light hover:bg-green-500 cursor-pointer" key={f.id} onClick={ () => props.onMove(props.called_by, f)}>{f.folder_name}</li>
                ))}
            </ul>
        );
    }
    
    return (
        <div 
            className="absolute bg-gray-800 text-white shadow-lg rounded p-1"
            style={{ top: props.y, left: props.x }}
        >
            {/* Ordner Kontextmenü */}
            {props.type === "folder" && (
                <>
                    {props.called_by.id === -1 && (
                        <div className="hover:bg-green-800 border-3 rounded p-1 mb-[0.5vh]" 
                             onClick={() => setShow_add_field(true)}>
                            ➕ Neuer Ordner
                        </div>
                    )}
                    {props.called_by.id === 2 && !show_add_field && (
                        <div className="hover:bg-red-800 border-3 rounded p-1" 
                             onClick={() => props.onDelete(props.called_by)}>
                            🗑 Papierkorb leeren
                        </div>
                    )}
                    {props.called_by.id > 2 && props.called_by.parent_id === -1 && (
                        <div className="hover:bg-green-800 border-3 rounded p-1 mb-[0.5vh]" 
                             onClick={() => setShow_add_field(true)}>
                            ➕ Neuer UnterOrdner
                        </div>
                    )}
                    {props.called_by.id > 2 && !show_add_field && (
                        <div className="hover:bg-red-800 border-3 rounded p-1" 
                             onClick={() => props.onDelete(props.called_by)}>
                            ❌ Ordner löschen
                        </div>
                    )}

                    {show_add_field && (
                        <form onSubmit={handleSubmit}>
                            <label> ✎ Ordnername:</label>
                            <input className="border-1 rounded h-[3vh] ml-[0.5vw]" 
                                type="text" name="folder_name" />
                            <button className="rounded hover:bg-white text-4xl" type="submit">
                                ✅
                            </button> 
                        </form>
                    )}
                </>
            )}

            {/* Email Kontextmenü */}
            {props.type === "email" && (
                <>
                    <div className="hover:bg-blue-800 border-3 rounded p-1 mb-[0.5vh]" 
                         onClick={() => props.onReply(props.called_by)}>
                        ✉️ Antworten
                    </div>
                    <div className="flex hover:bg-yellow-800 border-3 rounded p-1 mb-[0.5vh]" 
                         onClick={() => setShow_folders(true)}>
                        📂 Verschieben nach:
                        {show_folders && (<div className=" ml-3 flex">{mapCurrFolders()}</div>)}
                    </div>
                    <div className="hover:bg-red-800 border-3 rounded p-1" 
                         onClick={() => props.onMove(props.called_by, props.curr_folders[2])}>
                        🗑 Löschen
                    </div>
                </>
            )}
        </div>
    );
};

export default ContextMenu;