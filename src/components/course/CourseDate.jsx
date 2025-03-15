

const CourseDate = (props) => {
return (
    <div className="bg-uzk-dark border-white border-2 text-white text-center text-[17px] w-60 h-22.5 p-1 m-2 rounded-xl flex items-center justify-center">
        {props.date.toLocaleDateString()} <br />
        {props.topic}
    </div> 
);
}
export default CourseDate;
