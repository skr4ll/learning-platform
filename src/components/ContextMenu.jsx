const ContextMenu = (props) => {
    // Je nach type (Folder/Email) wird das ContexMenu gefüllt
    if (props.type === "folder"){
        return (
            <>
            {props?.visible && (
                <ul 
                    className="absolute bg-gray-800 text-white shadow-lg rounded p-2 z-50"
                    style={{ top: props.y, left: props.x }}
                >
                    <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={props.onAdd}>
                        ➕ Unterordner Hinzufügen
                    </li>
                    <li className="p-2 hover:bg-gray-700 cursor-pointer text-red-400" onClick={props.onDelete}>
                        ❌ Ordner löschen
                    </li>
                </ul>
            )}
        </>
        );
    }
    else{
        alert("EMAIL");
    }
};

export default ContextMenu;