import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
	const { handleKeys, currentGuess, guesses, isCorrect, turn } =
		useWordle(solution);

	useEffect(() => {
		document.addEventListener("keyup", handleKeys);
		return () => {
			document.removeEventListener("keyup", handleKeys);
		};
	}, [handleKeys]);

	useEffect(() => {
		console.log(guesses, isCorrect, turn);
	}, [guesses, isCorrect, turn]);
	return (
		<>
			<p>Solution is: {solution.word}</p>
			<p>Current Guess is: {currentGuess}</p>
		</>
	);
};

export default Wordle;
