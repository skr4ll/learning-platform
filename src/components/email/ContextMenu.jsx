import { useState } from "react";

const ContextMenu = (props) => {
    let add_name = "";
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const formData = new FormData(e.target);
        add_name = formData.get("folder_name");
        if(add_name){
            props.onAdd(add_name);
        } 
        props.handleClick();
      };

    // Je nach type (Folder/Email) wird das ContexMenu gefüllt
    
    // Bereich Ordner
    const [show_add_field, setShow_add_field] = useState(false);
    if (props.type === "folder"){        
        // Ist called_by.id == 2 dann handelt es sich um den Papierkorb
        console.log(props.called_by.id);
        if (props.called_by.id === 2){
            return (
                <>
                {props?.visible && (
                    <div 
                        className="absolute bg-gray-800 text-white shadow-lg rounded p-1 z-50"
                        style={{ top: props.y, left: props.x }}
                    >
                    <button className="hover:bg-green-800 border-1 rounded p-1">
                        🗑 Papierkorb leeren
                    </button>
                    </div>
                )}
                </>
            );
        }
        else{
            return (
                <>
                {props?.visible && (
                <div 
                    className="absolute bg-gray-800 text-white shadow-lg rounded p-1"
                    style={{ top: props.y, left: props.x }}
                >
                    <div onClick={() => {setShow_add_field(true)}}>
                        {props.called_by.id === -1 && (<div className="hover:bg-green-800 border-3 rounded p-1 mb-[0.5vh]">
                                                        ➕ Neuer Ordner</div>)}
                        {props.called_by.id > 2 && props.called_by.parent_id === -1 &&
                        (<div className="hover:bg-green-800 border-3 rounded p-1 mb-[0.5vh]">
                                                        ➕ Neuer UnterOrdner</div>)}
                    </div>
                    <div onClick={() => {setShow_add_field(true)}}>
                        {props.called_by.id > 2 && !show_add_field && (<div className="hover:bg-green-800 border-3 rounded p-1">
                                                        ❌ Ordner löschen</div>)}
                    </div>
                        <div className="mt-[1.5vh]">
                            {show_add_field && 
                            <form  onSubmit={handleSubmit}  >
                                <label> ✎ Ordnername:</label>
                                <input className="border-1 rounded h-[3vh] ml-[0.5vw]" 
                                    type="text" name="folder_name"></input>
                                <button className="rounded hover:bg-white text-4xl"
                                type="submit"
                                >
                                ✅
                                </button> 
                            </form>     
                            }
                        </div>
                    </div>
                )}
            </>
            );
        }
    }  
    // Bereich Emails
    else{
        alert("EMAIL");
    }
};

export default ContextMenu;