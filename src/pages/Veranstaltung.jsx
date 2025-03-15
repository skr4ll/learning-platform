import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseDate from "../components/course/CourseDate";
import Material from "../components/course/Material";
import Assignment from "../components/course/Assignment";
import { dates } from "../../data";
import { materials } from "../../data";
import { assignments } from "../../data";
import { SlCalender } from "react-icons/sl";
import { SlClock } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import Calendar from 'react-calendar';

const Veranstaltung = () => {
  const dateArr = [];
  for (let i = 0; i < dates.length; i++) {
    dateArr.push(<CourseDate {...dates[i]} />);
  }

  const materialArr = [];
  for (let i = 0; i < materials.length; i++) {
    materialArr.push(<Material {...materials[i]} />);
  }

  const assignmentArr = [];
  for (let i = 0; i < assignments.length; i++) {
    assignmentArr.push(<Assignment {...assignments[i]}/>);
  }

  function showText(text) {
    return text;
  }

  return (
    <>
      <Header />
      <h1 className="text-3xl text-center font-bold m-2"><span className="bg-cyan-200">
        Basissysteme der Informationsverabeitung 1
      </span></h1>
      <p className="text-xl text-center m-2">
        <SlCalender className="inline" /> Mittwoch | <SlClock className="inline" /> 10:00 Uhr |
        <SlLocationPin className="inline" /> S93 (Philosophikum) | <SlUser className="inline" /> Susanne Kurz
      </p>
      <p className="ml-2 mr-2">In diesem Kurs werden die Grundlagen von HTML, CSS und JavaScript
        behandlet, um anschließend mit React arbeiten zu können.
        Währenddessen werden außerdem weitere nützliche Frameworks für
        JavaScript in Kurzvorträgen vorgestellt und ein Blick auf UX geworfen.
      </p>
      <br />
      <div className="flex-container flex justify-evenly">
        <div className="mb-[14vh]">
          <p className="text-center font-bold text-2xl">Termine</p>
          {dateArr}
        </div>
        <div>
          <p className="text-center font-bold text-2xl">Material</p>
          {materialArr}
        </div>
        <div>
          <p className="text-center font-bold text-2xl">Abgaben</p>
          {assignmentArr}
        </div>
        <div>
          <p className="text-center font-bold text-2xl">Kalender</p>
          <Calendar className="w-70 text-[2.5vh] text-center bg-indigo-50 m-2"/>
          <p>Ausgewählte Aufgabe: {showText()}</p>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Veranstaltung;