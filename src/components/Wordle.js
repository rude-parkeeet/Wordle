import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
	const { handleKeys } = useWordle(solution);

	useEffect(() => {
		document.addEventListener("keyup", handleKeys);
		return () => {
			document.removeEventListener("keyup", handleKeys);
		};
	}, []);

	return (
		<>
			<p>Solution is: {solution.word}</p>
		</>
	);
};

export default Wordle;
