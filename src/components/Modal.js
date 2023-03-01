const Modal = ({ solution, isCorrect, turn }) => {
	if (isCorrect) {
		return (
			<div className="modal">
				<div>
					<h1>Horray!! You won</h1>
					<p className="solution">{solution}</p>
					<p>You won in {turn} guesses</p>
				</div>
			</div>
		);
	}
	return (
		<div className="modal">
			<div>
				<h1>Nevermind!!</h1>
				<p className="solution">{solution}</p>
				<p>Better luck next time:)</p>
			</div>
		</div>
	);
};

export default Modal;
