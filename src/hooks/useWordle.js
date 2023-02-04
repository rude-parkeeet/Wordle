import { useState } from "react";

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState([...Array(6)]); // [{'leter':'a','color':''}]
	const [history, setHistory] = useState([]); // ["ninja","steal"];
	const [isCorrect, setIsCorrect] = useState(false);

	const formatGuess = () => {
		const solutionArray = [...solution.word];
		const formatedArray = [...currentGuess].map((letter) => {
			return { key: letter, color: "grey" };
		});

		// Mark character with color green
		formatedArray.forEach((value, index) => {
			if (value.key === solutionArray[index]) {
				value.color = "green";
				solutionArray[index] = null;
			}
		});
		// Mark characters with color yellow
		formatedArray.forEach((value) => {
			if (solutionArray.includes(value.key) && value.color !== "green") {
				value.color = "yellow";
			}
		});

		return formatedArray;
	};

	const addNewGuess = (formattedGuess) => {
		if (turn <= 5) {
			setGuesses((prev) => {
				const newGuesses = [...prev];
				newGuesses[turn] = formattedGuess;
				return newGuesses;
			});
		}
		setTurn(turn + 1);
		setHistory([...history, currentGuess]);
		if (currentGuess === solution.word) {
			setIsCorrect(true);
		}
		setCurrentGuess("");
	};

	const handleKeys = ({ key }) => {
		if (key === "Enter") {
			if (currentGuess.length !== 5) {
				console.log("The word is not 5 characters long");
				return;
			}
			if (history.includes(currentGuess)) {
				console.log("The currentGuess is already used");
				return;
			}
			if (turn > 5) {
				console.log("The user have no more turns");
				return;
			}

			console.log("Formatting the Guess");
			const formattedGuess = formatGuess();
			addNewGuess(formattedGuess);
		}

		if (key === "Backspace") {
			setCurrentGuess(currentGuess.slice(0, -1));
		}

		if (/^[A-Za-z]$/.test(key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess(currentGuess + key);
			}
		}
	};

	return { handleKeys, currentGuess, guesses, isCorrect, turn };
};

export default useWordle;
