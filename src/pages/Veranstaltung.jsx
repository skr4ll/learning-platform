import Header from "../components/header";
import Footer from "../components/footer";
import Date from "../components/course/Date";

const Veranstaltung = () => {
  return (
    <>       
      <Header />
      <h1 className="text-4xl font-bold">Ausgewählte Veranstaltung</h1>
      <Date />
      <Footer />
    </>

  );
};

export default Veranstaltung;
