const questionContainer = document.getElementById('question-container');
const questionContainerNoBtn = document.getElementById('question-containerr');

const answerContainer = document.getElementById('answer-container');
const question = document.getElementById('question');
const answer = document.getElementById('answer');

const restartBtn = document.getElementById('restart');
const dropDownBtn = document.getElementById('drop-down');
const nextBtn = document.getElementById('next');

let cardDeck = [...flashcardDeck.cards];

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getAndDisplayCard() {
	let index = randomNumber(0, cardDeck.length - 1);
	let currentCard = cardDeck[index];
	console.log(currentCard);
	cardDeck.splice(index, 1);
	console.log(cardDeck);
	questionContainerNoBtn.innerHTML = `<h1 id="question" class="question">${currentCard.question}</h1>`;
	answerContainer.innerHTML = `<p class="answer" id="answer">${currentCard.answer}</p>`;
}

function restart() {
	cardDeck = [...flashcardDeck.cards];
	alert("Re-shuffling deck. Let's start again");
	getAndDisplayCard();
}

dropDownBtn.addEventListener('click', function (e) {
	e.preventDefault();
	if (e.target.classList == 'fas fa-arrow-down') {
		e.target.classList = 'fas fa-arrow-right';
		answerContainer.classList.add('not-answered');
		questionContainer.classList.remove('question-answered');
		return;
	}
	if (e.target.classList == 'fas fa-arrow-right') {
		e.target.classList = 'fas fa-arrow-down';
		answerContainer.classList.remove('not-answered');
		questionContainer.classList.add('question-answered');
		return;
	}
});

nextBtn.addEventListener('click', function () {
	answerContainer.classList.add('not-answered');
	questionContainer.classList.remove('question-answered');
	questionContainer.firstElementChild.firstElementChild.classList =
		'fas fa-arrow-right';
	getAndDisplayCard();
});

restartBtn.addEventListener('click', restart);

getAndDisplayCard();
