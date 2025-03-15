import { useNavigate } from "react-router-dom";

const NotificationCard = ({ notification, deleteNotification }) => {
  const navigate = useNavigate();

  const link = notification.type === "E-Mail" ? "/postfach" : "/veranstaltung";

  const datefont = notification.type === "Deadline" ? "text-red-700 font-bold" : "text-gray-400 text-sm";

  let imageSrc = '';
  if (notification.type === "E-Mail") {
    imageSrc = '/mail_button.png'; 
  } else if (notification.type === "Data Upload") {
    imageSrc = '/fileicon.jpg';
  } else if (notification.type === "Deadline") {
    imageSrc = '/todo.png'; 
  }

  return (
    <div className="flex items-center justify-between w-full bg-uzk-dark text-white rounded-2xl p-4 shadow-lg">
      <button
        onClick={() => navigate(link)}
        className="flex-1 flex items-center justify-between"
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center">
          <img src={imageSrc} alt={notification.type} className="w-18 h-18 object-cover" />
        </div>
        <div className="flex-1 text-center">
          <p className="text-sm text-gray-300">{notification.Sender}</p>
          <h1 className="text-lg font-bold mt-1">{notification.name}</h1>
        </div>
        <p className={datefont}>{notification.date}</p> 
      </button>

      <button
        onClick={() => deleteNotification(notification.id)}
        className="text-red-500 ml-4 hover:text-red-700 focus:outline-none"
      >
        <span className="text-2xl">❌</span>
      </button>
    </div>
  );
};

export default NotificationCard;

