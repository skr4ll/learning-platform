

const CourseDate = (props) => {
return (
    <div className="bg-uzk-dark text-white">
        Datum: {props.date.toLocaleDateString()} <br />
        Thema: {props.topic}
    </div>
);
}
export default CourseDate;
