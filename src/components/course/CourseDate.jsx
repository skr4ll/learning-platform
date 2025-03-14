

const CourseDate = (props) => {
return (
    <div className="bg-uzk-dark border-white border-2 text-white text-center text-[2.5vh] w-60 p-1 m-2 rounded-xl">
        {props.date.toLocaleDateString()} <br />
        {props.topic}
    </div> 
);
}
export default CourseDate;
