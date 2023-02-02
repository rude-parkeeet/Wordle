import { useState } from "react";
import words from "./data/db.json";
import Wordle from "./components/Wordle";
// Use a database dictonary
// Use third-party API
// Use a json

function App() {
	const [solution, setSolution] = useState(
		words[Math.floor(Math.random() * words.length)]
	);
	return (
		<div className="App">
			<header>
				<h1>Wordle</h1>
				<Wordle solution={solution} />
			</header>
		</div>
	);
}

export default App;
