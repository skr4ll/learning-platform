import { useState } from "react";
import { transformDate } from "../../util";
const Email = (props) => {
    let datum = transformDate(props.datetime)
    const [email_clicked, setEmail_clicked] = useState(false);

    return (
        <div className="text-center max-w-sm rounded-xl border-3 overflow-hidden shadow-lg bg-blue-200 mb-0.5">
            <div onClick= {() => setEmail_clicked(true)} 
            className={email_clicked === true ? "font-normal" : "font-bold"}>
                <div className="text-xl">{"<" + props.from + ">"}</div>
                    <p className="text-base">{datum}</p>
                    <p className="text-base">{props.subject}</p>
            </div>
        </div>
    );
  };
  
  export default Email;
  