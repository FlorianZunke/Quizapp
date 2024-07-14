function init() {
    document.getElementById('all_question').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if (gameIsOver()) {
        showEndscreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}


function gameIsOver(params) {
    return currentQuestion >= questions.length
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); // Nimmt die letzte Zahl von selection (das ist die ID von den Antwort Karten)
    let idOfRightAnswer = `answer_${question.right_answer}`;

    if (rightAnswerSelected(selectedQuestionNumber)) {
        document.getElementById(selection).parentNode.classList.add('bg-success'); // parentNode gibt dem Eltern Element eine Class
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}


function rightAnswerSelected(selectedQuestionNumber) {
    return selectedQuestionNumber == question.right_answer
}


function nextButton() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');

    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');

    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');

    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}


function endscreen() {
    document.getElementById('amount_of_questions').innerHTML = questions.length;
}


function restartGame() {
    currentQuestion = 0;
    rightQuestions = 0;
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('question-body').style = '';

    init();
}


function showEndscreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('question-body').style = 'display: none';

    document.getElementById('amount_of_questions').innerHTML = questions.length;
    document.getElementById('amount_of_right_questions').innerHTML = rightQuestions;
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('current_question').innerHTML = currentQuestion + 1;
    document.getElementById('question_text').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}