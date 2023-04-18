const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

quizForm.addEventListener('submit', function(e) {
	e.preventDefault();
	let score = 0;
	const userAnswers = {
		q1: quizForm.q1.value,
		q2: quizForm.q2.value,
		q3: quizForm.q3.value,
		q4: quizForm.q4.value,
		q5: quizForm.q5.value,
		q6: quizForm.q6.value,
		q7: quizForm.q7.value,
		q8: quizForm.q8.value,
		q9: quizForm.q9.value,
		q10: quizForm.q10.value
	};
	
	if(userAnswers.q1 === 'a') {
		score += 1;
	}
	
	if(userAnswers.q2 === 'c') {
		score += 1;
	}

	if(userAnswers.q3 === 'a') {
		score += 1;
	}
	if(userAnswers.q4 === 'c') {
		score += 1;
	}
	if(userAnswers.q5 === 'c') {
		score += 1;
	}
	if(userAnswers.q6 === 'c') {
		score += 1;
	}
	if(userAnswers.q7 === 'c') {
		score += 1;
	}
	if(userAnswers.q8 === 'c') {
		score += 1;
	}
	if(userAnswers.q9 === 'c') {
		score += 1;
	}
	if(userAnswers.q10 === 'c') {
		score += 1;
	}
	
	
	resultDiv.innerHTML = `You scored ${score} out of 10`;
});
