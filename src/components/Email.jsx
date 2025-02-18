import { useState } from "react";
const Email = (props) => {
    let tag = props.datetime.getDate(), monat = props.datetime.getMonth() + 1, jahr = props.datetime.getFullYear();
    let datum = (tag < 10 ? "0" + tag : tag) + "." + (monat < 10 ? "0" + monat : monat) + "." + jahr;
    let zeit = props.datetime.getHours() + ":" + props.datetime.getMinutes();
    const [email_clicked, setEmail_clicked] = useState(false);

    return (
        <div className="text-center max-w-sm rounded-xl border-3 overflow-hidden shadow-lg bg-blue-200 mb-0.5">
            <div onClick= {() => setEmail_clicked(true)} 
            className={email_clicked === true ? "font-normal" : "font-bold"}>
                <div className="text-xl">{"<" + props.from + ">"}</div>
                    <p className="text-base">{datum + ", " + zeit}</p>
                    <p className="text-base">{props.subject}</p>
            </div>
        </div>
    );
  };
  
  export default Email;
  