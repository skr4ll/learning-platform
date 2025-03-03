import EmailFolder from "./EmailFolder";
import { folders } from "../../data";
import ContainerEmails from "./ContainerEmails";
import { useState } from "react";

const ContainerFolders = () => {
    const [folder_name, setFolder_name] = useState("Posteingang");
    const handleClick = (fname) => {
        setFolder_name(fname);
    }
    const test = folders.find(f => f.folder_name === folder_name);
    console.log(test);
    return (
    <div className="flex">
        <div className="bg-uzk-light mr-1 rounded-xl h-145 overflow-auto"> 
            {folders.map((folder) =>(<div className="pl-1" onClick={() => 
                {handleClick(folder.folder_name)}} key={folder.id}>
                <EmailFolder {...folder} /></div>))}
        </div>
        <div>
            <ContainerEmails emails={(folders.find(f => f.folder_name === folder_name)).mails} />
        </div>
    </div>
       
    );
  };
  
  export default ContainerFolders;