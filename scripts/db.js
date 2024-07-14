let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },
    {
        "question": "Was bedeutet das <strong>strong</strong> Tag in HTML?",
        "answer_1": "Hebt Text fett hervor",
        "answer_2": "Unterstreicht Text",
        "answer_3": "Macht Text kursiv",
        "answer_4": "Macht Text kleiner",
        "right_answer": 1,
    },
    {
        "question": "Welches Attribut wird verwendet, um den Zielort eines Hyperlinks festzulegen?",
        "answer_1": "src",
        "answer_2": "link",
        "answer_3": "href",
        "answer_4": "target",
        "right_answer": 2,
    },
    {
        "question": "Welches HTML-Element wird verwendet, um ein Bild anzuzeigen?",
        "answer_1": "<img>",
        "answer_2": "<image>",
        "answer_3": "<picture>",
        "answer_4": "<src>",
        "right_answer": 1,
    },
    {
        "question": "Wie definiert man eine Tabelle in HTML?",
        "answer_1": "<div>",
        "answer_2": "<table>",
        "answer_3": "<list>",
        "answer_4": "<form>",
        "right_answer": 2,
    },{
        "question": "Welches Attribut wird verwendet, um eine eindeutige ID für ein HTML-Element festzulegen?",
        "answer_1": "class",
        "answer_2": "type",
        "answer_3": "name",
        "answer_4": "id",
        "right_answer": 4,
    },{
        "question": "Welches Attribut wird verwendet, um Text in einem Eingabefeld vorzugeben?",
        "answer_1": "value",
        "answer_2": "name",
        "answer_3": "placeholder",
        "answer_4": "text",
        "right_answer": 3,
    }
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');