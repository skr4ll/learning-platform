import { useState } from "react";

const Assignment = (props) => {
    const [isDone, setIsDone] = useState(false);
    const [label, setLabel] = useState("Abgabe");

    const handleChange = (event) => {
        setIsDone(true);

        //Name der hochgeladenen Datei anzeigen
        setLabel("Abgegeben: " + event.target.files[0].name);
    }

    const handleClick = () => {
        //Die Aufgabenstellung wird der Funktion select aus den props für Assignment übergeben
        props.select(props.text);
    }

    return (
        //Der Rand ist blau, wenn die Abgabe noch aussteht und grün, wenn sie erfolgt ist
        <div className={`text-center text-[17px] border-2 ${isDone? "border-green-400" : "border-uzk-dark"} p-1 m-2 rounded-xl w-60 h-22.5 overflow-auto`}>
            --&gt; {props.date.toLocaleString()} &nbsp;<br />

            <button className="hover:underline" onClick={handleClick}>Aufgabenstellung</button> <br />
            <label className="hover:underline">{label}
                <input type="file" className="hidden" onChange={handleChange} />
            </label>
        </div>
    );
}

export default Assignment;