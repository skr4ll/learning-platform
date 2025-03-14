import Header from "../components/Header";
import Footer from "../components/Footer";
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
