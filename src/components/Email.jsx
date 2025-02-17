const Email = (props) => {
    let tag = props.datetime.getDate(), monat = props.datetime.getMonth() + 1, jahr = props.datetime.getFullYear();
    let datum = (tag < 10 ? "0" + tag : tag) + "." + (monat < 10 ? "0" + monat : monat) + "." + jahr;
    let zeit = props.datetime.getHours() + ":" + props.datetime.getMinutes();
    console.log(props.datetime);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{"<" + props.from + ">"}</div>
                    <p className="text-gray-700 text-base ml-10">{datum + ", " + zeit}</p>
                    <p className="text-gray-700 text-base ml-20">{props.subject}</p>
            </div>
        </div>
    );
  };
  
  export default Email;
  