import { SlCheck } from "react-icons/sl";
import { useState } from "react";

const Assignment = (props) => {
    const [isDone, setIsDone] = useState(false);

    const handleClick = () => {
        setIsDone(true);
    }

    return (
        <div className="text-center text-[17px] border-2 border-uzk-dark p-1 m-2 rounded-xl w-50 h-22.5">
            --&gt; {props.date.toLocaleDateString()} &nbsp;
            <SlCheck className={`inline ${isDone ? "text-green-400" : "text-red-500"}`} /> <br />
            <button className="hover:underline">Aufgabenstellung</button> <br />
            {/* <button className="hover:underline" onClick={handleClick}>Abgabe</button> */}
            <input type="file" id="file" className="hidden"/>
        </div>
    );
}

export default Assignment;