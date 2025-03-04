const EmailFolder = (props) => {
    return (
      <button className="cursor-pointer hover:text-blue-50 text-[3vw] lg:text-base">{props.folder_name}</button>
    );
  };
  
  export default EmailFolder;