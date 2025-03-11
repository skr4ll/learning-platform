import Header from "../components/header";
import Footer from "../components/footer";
import CourseDate from "../components/course/CourseDate";
import { dates } from "../../data";

const Veranstaltung = () => {
  return (
    <>       
      <Header />
      <h1 className="text-4xl font-bold">Ausgewählte Veranstaltung</h1>
      
      <CourseDate {...dates[0]} />
      <CourseDate {...dates[1]} /> <br />
      

      <Footer />
    </>

  );
};

export default Veranstaltung;
