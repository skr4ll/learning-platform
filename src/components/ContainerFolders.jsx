import EmailFolder from "./EmailFolder";
import { folders } from "../../data";

const ContainerFolders = () => {
    return (
    <div className="bg-uzk-light mr-1 rounded-xl h-145 overflow-auto"> 
        {folders.map((folder) =>(<div className="pl-1"><EmailFolder {...folder} /></div>))}
    </div>
       
    
    );
  };
  
  export default ContainerFolders;