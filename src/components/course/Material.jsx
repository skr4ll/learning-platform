const Material = (props) => {
    return(
        <div className="text-center text-[2.5vh] border-2 border-uzk-dark p-1 m-2 rounded-xl w-50">
            <a href={props.code} download={props.codeName} className="hover:underline">{props.codeName}</a> <br />
            <a href={props.pp} download={props.ppName} className="hover:underline">{props.ppName}</a>
        </div>
    );
}

export default Material;