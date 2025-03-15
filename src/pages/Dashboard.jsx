import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseList from "../components/dashboard/CourseList"
import { courseData } from "../../data";
import NotificationList from "../components/dashboard/NotificationList"
import { notifications } from "../../data";

import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
	const navigate = useNavigate();
  return (
    <>

      <Header />
      <div className="flex min-h-screen">

        <div className="w-1/2 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-center border-uzk-dark">Seminarübersicht</h1>
            <img 
              src="/filterbutton.webp" 
              alt="Filter" 
              className="cursor-pointer ml-4 w-[10%] h-[10%]" 
            />
          </div>
          <div className="mt-4"> 
            <CourseList courseData={courseData} />
          </div>
        </div>


        <div className="w-1/2 p-6 border-l-2 border-uzk-dark">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-center">Aktuelle Informationen</h1>
          <img 
              src="/filterbutton.webp" 
              alt="Filter" 
              className="cursor-pointer ml-4 w-[10%] h-[10%]" 
            />
          </div>
          <div className="mt-4"> 
            <NotificationList notifications={notifications} />
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Dashboard;

