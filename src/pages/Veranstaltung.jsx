import Header from "../components/header";
import Footer from "../components/footer";
import Course from "../components/course/Course";

const Veranstaltung = () => {
  return (
    <>       
      <Header />
      <h1 className="text-4xl font-bold">Ausgewählte Veranstaltung</h1>
      <Course />
      <Footer />
    </>

  );
};

export default Veranstaltung;
