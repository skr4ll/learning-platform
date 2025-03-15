const Material = (props) => {
    return(
        <div className="text-center text-[17px] border-2 border-uzk-dark p-1 m-2 rounded-xl w-60 h-22.5 flex items-center justify-center flex-col">
            {/*Links, unter denen die Materialien mit dem vorgegebenen Namen heruntergeladen werden können.
            Werden unterstrichen, wenn die Maus darüber schwebt.*/}
            <a href={props.code} download={props.codeName} className="hover:underline">{props.codeName}</a> <br />
            <a href={props.pp} download={props.ppName} className="hover:underline">{props.ppName}</a>
        </div>
    );
}

export default Material;