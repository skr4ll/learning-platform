import Header from "../components/Header";
import Footer from "../components/Footer";

const Impressum = () => {
	return (
		<>
			<Header />
			<h1 className="text-4xl text-center font-bold">Impressum</h1><br /><br />
			<div className="text-center m-12">
				<h2 className="font-bold">Verantwortliche</h2><br />
				<p><div className="text-2xl">Veranstaltung: </div>Marilis<br /><a href="https://github.com/mar0303">https://github.com/mar0303</a></p><br /><br />
				<p><div className="text-2xl">FAQ: </div>Khanh<br /><a href="https://github.com/khanhviet5903">https://github.com/khanhviet5903</a></p><br /><br />
				<p><div className="text-2xl">Dashboard: </div>Linea<br /><a href="https://github.com/Finallineal">https://github.com/Finallineal</a></p><br /><br />
				<p><div className="text-2xl">Postfach: </div>Philipp<br /><a href="https://github.com/skr4ll">https://github.com/skr4ll</a></p><br /><br />
				<h2 className="font-bold">Anschrift</h2>
				<p>Universität zu Köln<br />Albertus-Magnus-Platz<br />50923 Köln</p>
			</div>
			<Footer />
		</>
	);
};

export default Impressum;