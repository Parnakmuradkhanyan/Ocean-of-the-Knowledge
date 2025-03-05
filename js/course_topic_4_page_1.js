const words = [
    { word: 'Zoo', translation: '- зоопарк', image: '../img/new-words-pics/zoo-learn-new-word-pic.jpg', audio: '../audio/zoo-how-to-say.mp3' },
    { word: 'Lion', translation: '- лев', image: '../img/new-words-pics/lion-learn-new-word-pic.jpg', audio: '../audio/lion-how-to-say.mp3' },
    { word: 'Tiger', translation: '- тигр', image: '../img/new-words-pics/tiger-learn-new-word-pic.jpg', audio: '../audio/tiger-how-to-say.mp3' },
    { word: 'Giraffe', translation: '- жираф', image: '../img/new-words-pics/giraffe-learn-new-word-pic.jpg', audio: '../audio/giraffe-how-to-say.mp3' },
    { word: 'Monkey', translation: '- мавпа', image: '../img/new-words-pics/monkey-learn-new-word-pic.jpg', audio: '../audio/monkey-how-to-say.mp3' },
    { word: 'Panda', translation: '- панда', image: '../img/new-words-pics/panda-learn-new-word-pic.jpg', audio: '../audio/panda-how-to-say.mp3' },
    { word: 'Bear', translation: '- ведмідь', image: '../img/new-words-pics/bear-learn-new-word-pic.jpg', audio: '../audio/bear-how-to-say.mp3' },
    { word: 'Turtle', translation: '- черепаха', image: '../img/new-words-pics/turtle-learn-new-word-pic.jpg', audio: '../audio/turtle-how-to-say.mp3' },
    { word: 'Crocodile', translation: '- крокодил', image: '../img/new-words-pics/crocodile-learn-new-word-pic.jpg', audio: '../audio/crocodile-how-to-say.mp3' },
    { word: 'Snake', translation: '- змія', image: '../img/new-words-pics/snake-learn-new-word-pic.jpg', audio: '../audio/snake-how-to-say.mp3' },

];

let currentIndex = 0;

function updateContent() {
    document.getElementById('new-word-text').innerText = words[currentIndex].word;
    document.getElementById('translation-text').innerText = words[currentIndex].translation;
    document.getElementById('word-pic-container').style.backgroundImage = `url(${words[currentIndex].image})`;
    document.getElementById('audio-player').src = words[currentIndex].audio;
}

function nextWord() {
    currentIndex = (currentIndex + 1) % words.length;
    updateContent();
}

function previousWord() {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    updateContent();
}

function playAudio() {
    document.getElementById('audio-player').play();
}

// Ініціалізуємо початковий контент
updateContent();