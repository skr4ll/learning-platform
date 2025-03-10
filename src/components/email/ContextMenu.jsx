import { useState } from "react";

const ContextMenu = (props) => {
    let add_name = "";
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const formData = new FormData(e.target);
        add_name = formData.get("folder_name");
        props.onAdd(add_name);
        props.handleClick();
      };

      // Je nach type (Folder/Email) wird das ContexMenu gefüllt
    
    // Bereich Ordner
    const [show_add_field, setShow_add_field] = useState(false);
    if (props.type === "folder"){        
        // Kontextmenü bei Klick in freie Fläche um Ordner auf oberster Ebene anzulegen
        if (props.called_by.id === -1){
            return (
                <>
                {props?.visible && (
                    <div 
                        className="absolute bg-gray-800 text-white shadow-lg rounded p-1 z-50"
                        style={{ top: props.y, left: props.x }}
                    >
                        <div className="p-1 hover:bg-gray-700" onMouseEnter={() => {setShow_add_field(true)}}>
                            ➕ Neuer Ordner
                            <div className="mt-[1.5vh]" onMouseLeave={() =>{setShow_add_field(false)}}>
                                {show_add_field && 
                                    <form  onSubmit={handleSubmit}  >
                                        <label> ✎ Ordnername:</label>
                                        <input className="border-1 rounded ml-[0.5vw]" type="text" name="folder_name"></input>
                                        <button className="p-[0.5vw] ml-[0.5vw] border-1 rounded hover:bg-green-500"
                                        type="submit"
                                        >
                                        Hinzufügen
                                        </button> 
                                    </form>     
                                }
                            </div>
                        </div>
                    </div>
                )}
            </>
            );
        }
        else{
            return (
            <>
            {props?.visible && (
                <ul 
                    className="absolute bg-gray-800 text-white shadow-lg rounded p-2 z-50"
                    style={{ top: props.y, left: props.x }} onMouseLeave={props.handleClick}
                >
                    <li className="flex p-2 hover:bg-gray-700 cursor-pointer" onMouseEnter={() => {setShow_add_field(true)}}
                        onMouseLeave={() =>{setShow_add_field(false)}}  onClick={props.onAdd}>
                        ➕ Unterordner Hinzufügen
                        <div className="ml-5 flex" >{show_add_field && "test"}</div>
                    </li>
                    <li className="p-2 hover:bg-gray-700 cursor-pointer text-red-400">
                        ❌ Ordner löschen
                    </li>
                </ul>
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