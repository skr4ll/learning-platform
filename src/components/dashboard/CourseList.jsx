import CourseCards from "./CourseCards"

const CourseList = ({ courseData }) => {
  return (
    <div className="w-full flex flex-col gap-4 text-center h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      {courseData.map((course, index) => (
       <CourseCards key={index} course={course} />
      ))}
    </div>
  );
};

export default CourseList;