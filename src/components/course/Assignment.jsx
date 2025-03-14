const Assignment = (props) => {

    return(
        <div className="text-center text-[2.5vh] border-2 border-uzk-dark p-1 m-2 rounded-xl w-50">
            -- {props.date.toLocaleDateString()} <br /> 
            <button onClick={() => "h"}>Aufgabenstellung</button> <br />
            Abgabe
        </div>
    );
}

export default Assignment;