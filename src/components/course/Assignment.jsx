import { SlCheck } from "react-icons/sl";
import { useState } from "react";

const Assignment = (props) => {
    const [isDone, setIsDone] = useState(false);
    const [label, setLabel] = useState("Abgabe");

    const handleChange = (event) => {
        setIsDone(true);
        setLabel("Abgegeben: " + event.target.files[0].name);
    }

    const handleClick = () => {
        showText(props.text);
    }

    return (
        <div className="text-center text-[17px] border-2 border-uzk-dark p-1 m-2 rounded-xl w-60 h-22.5 overflow-auto">
            --&gt; {props.date.toLocaleString()} &nbsp;
            <SlCheck className={`inline ${isDone ? "text-green-400" : "text-red-500"}`} /> <br />
            <button className="hover:underline" onClick={handleClick}>Aufgabenstellung</button> <br />
            <label className="hover:underline">{label}
                <input type="file" className="hidden" onChange={handleChange} />
            </label>
        </div>
    );
}

export default Assignment;