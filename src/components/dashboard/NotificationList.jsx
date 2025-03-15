import NotificationCard from "../NotificationCards"

const NotificationList = ({ notifications }) => {
    return (
      <div className="w-full flex flex-col gap-4 text-center h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        {notifications.map((notification, index) => (
          <NotificationCard key={index} notification={notification} />
        ))}
      </div>
    );
  };
  
  export default NotificationList;