import { transformDate, isEmpty } from "../../util";
  const MailView = (selected_mail) => {
  let no_mail_selected = isEmpty(selected_mail);
  return (
      // Container-div MailView
      <div className="bg-uzk-light h-145 overflow-auto rounded-xl">
        <p className={no_mail_selected ? "text-center text-5xl pt-[35%] text-white" : "hidden"}>
          {no_mail_selected && "Bitte eine Email anklicken ..."}</p>
        
        {/* Container-div Nachrichtenelemente */}
        <div className={no_mail_selected ? "hidden" : ""}>
          
          {/* Nachrichten-Header */}
          <div className="bg-uzk-dark m-5 p-3 rounded-xl text-xl text-white">
            <div className="flex justify-between">
              <div>Von: {selected_mail.from}</div>
              <div>{!no_mail_selected && transformDate(selected_mail.datetime)}</div>
            </div>
            <div className="text-center font-bold">{selected_mail.subject}</div>
          </div>
          
          {/* Nachrichten-Body */}
          <div className="bg-uzk-dark m-5 p-3 rounded-xl text-lg text-white overflow-scroll">
            {selected_mail.message}
          </div>
        </div>  
        </div>
    );
  };
  
  export default MailView;