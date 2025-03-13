import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "./App"
import * as Accordion from "@radix-ui/react-accordion";

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
			<h1 className="text-4xl font-bold">FAQ</h1>
			< Accordion type="single" collapsible >
				{categories.map ((category,categoryIndex) => (
	                <AccordionItem key={categoryIndex} value={"category-"+categoryIndex}>
					<AccordionItem.Trigger className="text-2xl font-bold">
					{category.title} </AccordionItem.Trigger>
				
	                        <AccordionItem.Content>
	                           <Accordion type="single" collapsible>
					   {categories.faqs.map((faq,faqIndex) => (
					   <AccordionItem key={faqIndex} value={"faq-" + categoryIndex + "-" + faqIndex}>
						   <AccordionItem.Trigger classname="font-semibold">{faq.question}</AccordionItem.Trigger>
					            <AccordionItem.Content>{faq.answer}</AccordionItem.Content>
					   </AccordionItem>
					   ))}
				   </Accordion>
	                       </AccordionItem.Content>
	                    </AccordionItem>
				))}
			</Accordion>
			
		</div>
		<Footer />
	</>
  );
};

export default FAQ;
