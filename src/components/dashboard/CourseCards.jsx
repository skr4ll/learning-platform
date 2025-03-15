import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("S/veranstaltung")}
      className="w-full h-full flex flex-col items-center justify-center bg-uzk-dark text-white rounded-2xl p-6 text-center shadow-lg"
    >
      <div>
        <p className="text-sm text-gray-300">{course.lecturer}</p>
        <h1 className="text-xl font-bold mt-1">{course.name}</h1>
        <p className="text-gray-200 mt-2">{course.weekday}, {course.time}</p>
        <p className="text-gray-400 text-sm mt-1">{course.institut}</p>
      </div>
    </button>
  );
};

export default CourseCard;
