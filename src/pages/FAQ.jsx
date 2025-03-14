import Header from "../components/header";
import Footer from "../components/footer";
import Accordion, { AccordionItem, AccordionTrigger, AccordionContent } from "../components/Accordion";

const FAQ = () => {
	const categories = [
		{
		title: "Allgemeines",
		faqs: [
			{question: "Was ist ILIAS ?", answer: "ILIAS ist ein Integriertes Lern-, Informations- und Arbeitskooperations-System."},
			{question: "Wie melde ich mich in ILIAS an ?", answer: "Den Login-Button finden Sie oben rechts. Nach dem Klick auf den Login-Button gelangen Sie zur Anmeldeseite."},
			{question: "Was tun ich, wenn ich mein Passwort vergesse ?", answer:"Die Personal-Accounts werden vom RRZK verwaltet und sind über ein Identitäts-Management-System (Uni-KIM) verbunden. Das Passwort können Sie selbst nur über das Identitätsmanagement System des RRZK zurücksetzen."}
                      ]
                  },
              {
	        title: "Kurs",
		faqs: [
			{question: "Wo finde ich meine Kurse?", answer: "Nach dem Login finden Sie Ihre Kurse auf dem ILIAS-Dashboard."},
			{question: "Ich kann in meinem Kurse/Gruppen/Ordner keine Inhalte hochladen. Was kann ich tun?", answer: "Prüfen Sie, ob Sie ausreichend Rechte für den Ordner/den Kurs/die Gruppe besitzen, indem Sie Ihre Rolle im Objekt (Reiter Mitglieder im Objekt) und die dazugehörigen Rechte (Reiter Rechte im Objekt) überprüfen."}
                       ]
	      }, 
             {
		title: "sonstiges",
		faqs: [
			{ question: "Wie nutze ich ein Studienprogramm?", 
answer: " 1. Klicken Sie auf den Titel des Studienprogrammes.2. ILIAS zeigt eine ggf. vorhandene Untergliederung des Studienprogrammsoder Links auf die zugehörigen Kurse. 3. Wenn das Programm weiter untergliedert ist, können Sie mit den kleinen Pfeilen in weitere Ebenen öffnen.4. Auf der letzten Ebene, sehen Sie immer Links zu den dazugehörigen Kursen." },
{question: "Was tun ich beim technischen Probleme?", answer: "Bitte kontaktieren Sie unser Technischer Support unter diesem Nummer:  0221 470–1359"} 
     ]
   }
];
		      
  return (
    <>
		<Header />
		<div className="flex justify-center items-center h-screen">
		<h1 className="text-4xl font-bold text-center text-gray-900 mb-8">FAQ</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <h2 className="text-2xl font-semibold text-gray-800 p-6 bg-gray-50">
                {category.title}
              </h2>
              <div className="divide-y divide-gray-200">
                {category.faqs.map((faq, faqIndex) => (
                  <Accordion key={faqIndex} type="single" collapsible>
                    <AccordionItem value={`faq-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900 p-6 hover:bg-gray-50 focus:outline-none">
                        <span>{faq.question}</span>
                        <span className="ml-4">+</span>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 pt-0 text-gray-600">
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
