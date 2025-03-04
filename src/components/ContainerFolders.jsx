import EmailFolder from "./EmailFolder";
import { folders } from "../../data";
import ContainerEmails from "./ContainerEmails";
import { useState } from "react";

const ContainerFolders = () => {
    const [folder_name, setFolder_name] = useState("Posteingang");
    const handleClick = (fname) => {
        setFolder_name(fname);
    }
    const curr_folder = folders.find(f => f.folder_name === folder_name);

    return (
    <div className="flex h-[77vh]">
        <div className="bg-uzk-light rounded-xl overflow-auto w-[18vw] lg:w-[9vw]"> 
            {folders.map((folder) =>(<div className="pl-1" onClick={() => 
                {handleClick(folder.folder_name)}} key={folder.id}>
                <EmailFolder {...folder} /></div>))}
        </div>
        <div className="w-[81vw] lg:w-[90vw]">
            <ContainerEmails {...curr_folder} />
        </div>
    </div>
       
    );
  };
  
  export default ContainerFolders;