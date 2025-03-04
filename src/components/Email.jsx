import { useState } from "react";
import { transformDate } from "../../util";
const Email = (props) => {
    let datum = transformDate(props.datetime)
    const [email_clicked, setEmail_clicked] = useState(false);

    return (
        <div className="text-center rounded-xl border-3 overflow-hidden shadow-lg bg-blue-200 pl-[0.5vw] pr-[0.5vw] mr-[0.5vw] mt-0.5 w-auto">
            <div onClick= {() => setEmail_clicked(true)} 
            className={email_clicked === true ? "font-normal" : "font-bold"}>
                <div className="text-[1.5vw] sm:text-[0.5vh] lg:text-[1vw] xl:text-l">{"<" + props.from + ">"}</div>
                    <p className="text-[1.5vw] sm:text-[0.5vh] lg:text-[1vw] xl:text-base">{datum}</p>
                    <p className="text-[1.5vw] sm:text-[0.5vh] lg:text-[1vw] xl:text-base">{props.subject}</p>
            </div>
        </div>
    );
  };
  
  export default Email;
  