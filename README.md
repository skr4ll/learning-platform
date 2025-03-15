React Abschlussprojekt
--> Vercel:
https://learning-platform-seven-amber.vercel.app/

Die Arbeitsaufteilung sieht wiefolgt aus:
Login: Philipp, Marilis
Dashboard: Linea
Veranstaltung: Marilis
FAQ: Khanh
Postfach: Philipp
Header and Footer: Alle


Unsere Website ist eine Lernplattform, die sich an ILIAS orientiert. Zur Navigation zwischen den einzelnen Seiten wird react-router-dom verwendet. Die Routen wurden in App.jsx konfiguriert.
Die default landing page ist Login.jsx. Sie wird über die Route / angesprochen. Alle weiteren Verlinkungen laufen über den Header/Footer.

Dashboard.jsx:
Auf dem Dashboard ist auf der linken Seite sind Informationen über die Veranstaltungen wie Name der Veranstaltung, Dozent, Datum und Uhrzeit und Institut. Wenn man auf die Cards klickt, sollte die Veranstaltung geöffnet werden. Momentan wird man nur zu schon bestehenden Veranstaltung geleitet. Auf der rechten Seite sind aktuelle Informationen wie E-Mails, File Uploads oder Deadlines. 

Aufbau Veranstaltung.jsx

Auf der Seite "Veranstaltung" ist die Seite eines Kurses exemplarisch ausgearbeitet. Es gibt stichpunktartige Informationen zu Ort, Zeit und Dozentin sowie eine kurze Beschreibung des Kurses. Man erhält eine Übersicht über die Termine, Themen, Materialien und Abgaben, wobei ein Kalender bei der zeitlichen Orientierung hilft. Das Material ist durch Klicken auf den Namen der Datei herunterladbar. Die Aufgabenstellung jeder Abgabe wird nach dem Klicken auf den Text "Aufgabenstellung" am rechten Bildschirmrand unterhalb des Kalenders angezeigt. Durch das Klicken auf "Abgabe" kann eine Datei hochgeladen werden, was in der Grün-Färbung des Randes resultiert. 

Aufbau von Postfach.jsx

In der Datei ./data.js  befinden sich 2 Klassen: Email und Folder. Diese beiden Objekttypen stellen die Basis der Postfachanwendung dar.
Ebenfalls dort befindet sich ein Array namens "emails" dessen länge man einstellen kann und dementsprechend viele Testemailobjekte erzeugt.
Das Component Postfach.jsx stellt die Hauptseite der Postfachanwendung dar. Sie dient als Container für Header, Footer und ein weiteres
Component namens ContainerFolders. 
Dieser beinhaltet die Ordnerstruktur auf der linken Seite. Hier sind 3 Standardordner vorhanden (Objekte vom Typ Ordner): Posteingang, Gesendet und Papierkorb. 
Bei Rechtsklick in die freie Fläche unterhalb dieser Standardordner öffnet sich ein Kontextmenü. Hier kann beim Klick über "+ Neuer Ordner" ein form ausgeklappt werden.
Bei Rechtsklick auf einen selbstangelegten Ordner klappt sich ebenfalls ein Kontextmenü aus, welches die Option bietet Unterordner anzulegen oder den momentanen Ordner zu löschen.
Ist ein Unterordner angelegt, kann dort ebenfalls ein Kontextmenü geöffnet werden. Dieses bietet nur die Option den Unterordner wieder zu löschen. Wird der Unterordner gelöscht, dann
werden alle in ihm enthaltenen Mails in den Parentordner verschoben. Wird der Parentordner gelöscht, werden alle in ihm enthaltenen Unterordner und deren Mails gelöscht.
Auf der rechten Seite von ContainerFolders befindet sich das ContainerEmails Component.
Diese beinhaltet die Mailliste des aktuell ausgewählten Ordners und rechts davon die Leseansicht für die angeklickte Email. Die Liste der Emails ist aus Email Components aufgebaut (Pro Mail ein Component).
Bei Rechtsklick auf eine Email wird ebenfalls ein Kontextmenü geöffnet. Dieses bietet die Optionen die Email zu beantworten, in einen anderen Ordner zu verschieben oder zu löschen.
Bei Klick auf "antworten" wird ein Modal (ReplyModal) geöffnet und eine Antwort kann geschrieben werden. Hierbei wird die alte Mail unterhalb der neuen Nachricht angefügt und ein neues Emailobjekt an das emails Array angehängt. 
Diese Mail wird dem Ordner "Gesendet" zugewiesen. Bei Klick auf "Verschieben nach: " öffnet sich rechts neben dem Eintrag eine Liste mit allen Ordnern, in die verschoben werden kann (Posteingang und die selbstangelegten Ordner).

