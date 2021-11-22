// got most of the "time keeping" code from here: https://dev.to/walternascimentobarroso/creating-a-timer-with-javascript-8b7
const testWrapper = document.querySelector('.test-wrapper');
const testArea = document.querySelector('#test-area');
const originText = document.querySelector('#origin-text p');
const resetButton = document.querySelector('#reset');
const theTimer = document.querySelector('.timer');
const textSource = document.getElementById('source');
const errors = document.getElementById('errors');
const wpm = document.getElementById('wpm');
const progress = document.getElementById('progress');
const topThreeScores = [
    document.getElementById('hs-one'),
    document.getElementById('hs-two'),
    document.getElementById('hs-three'),
];

let cron;
let randomText = '';
const time = {
    minutes: 0,
    seconds: 0,
    milliseconds: 0
};

const highscores = {
    first: [],
    second: [],
    third: [],
};
let errorsCounter = 0;
let wpmCounter = 0;

const text = [
    [
        "Memes spread through human culture as genes spread through the gene pool. Memes can be good ideas, good tunes, good poems, as well as dribbling mantras; anything that spreads by imitation as genes spread by bodily reproduction or by viral infection, is a meme.",
        "https://sydneyreviewofbooks.com/essay/unintentional-literature-poememes-as-poetic-practice/"
    ],
    [
        "An internet meme is a hijacking of the original idea -- instead of mutating by random chance before spreading by a form of Darwinian selection, internet memes are altered deliberately by human creativity. In the hijacked version mutations are designed, not random, with the full knowledge of the person doing the mutating.",
        "https://sydneyreviewofbooks.com/essay/unintentional-literature-poememes-as-poetic-practice/"
    ],
    [
        "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
        "https://parade.com/940913/parade/funny-quotes/"
    ],
    [
        "Beware of the man who works hard to learn something, learns it, and finds himself no wiser than before. He is full of murderous resentment of people who are ignorant without having come by their ignorance the hard way.",
        "https://thejohnfox.com/2016/06/funny-books/"
    ],
    [
        "What advice would I give the average homeowner to protect himself against burglars? Well, the first thing is to keep a light on in the house when you go out. It must be at least a sixty-watt bulb; anything less and the burglar will ransack the house, out of contempt for the wattage.",
        "https://thejohnfox.com/2016/06/funny-books/"
    ],
];

// starts the timer
function start() {
    pause();
    cron = setInterval(() => timer(), 10);
    checkText(testArea.value, randomText[0]);
}

// pauses the timer
function pause() {
    clearInterval(cron);
}

// resets timer, DOM, and re-enables textArea
function reset() {
    pause();
    time.minutes = 0;
    time.seconds = 0;
    time.milliseconds = 0;
    theTimer.textContent = '00:00:00';
    testArea.disabled = false;
    randomText = selectRandomText();
    originText.textContent = randomText[0];
    textSource.href = randomText[1];
    testArea.value = '';
}

// calculates ms, sec, and mins then updates DOM
function timer() {
    if ((time.milliseconds += 10) === 1000) {
        time.milliseconds = 0;
        time.seconds++;
    }
    if (time.seconds === 60) {
        time.seconds = 0;
        time.minute++;
    }
    // should never really reach here
    if (time.minute === 60) {
        // if here, user has taken more than an hour to type text
        time.minute = 0;
    }
    theTimer.textContent = `${time.minutes.toLocaleString(undefined, {minimumIntegerDigits: 2})}:${time.seconds.toLocaleString(undefined, {minimumIntegerDigits: 2})}:${time.milliseconds.toString().slice(0, -1)}`;
}

// random text between 0 and length of text array
function selectRandomText() {
    return text[Math.floor(Math.random() * text.length)];
}


// let tempProgress = 0;
function checkText(typedText, text) {
    const original = [...text];
    const typed = [...typedText];

    progress.textContent = ((typed.length / original.length) * 100).toFixed(2);

    if (typedText === text) {
        pause();
        testArea.disabled = true;
        determineHighScore();
        return;
    }

    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === original[i]) {
            testWrapper.style.borderColor = 'green';
        } else {
            testWrapper.style.borderColor = 'red';
        }
    }
    
    // if backspace key is not pressed and border color is red
    // then you know you have an error
    if ((window.event.key !== 'Backspace') && testWrapper.style.borderColor === 'red') {
        errorsCounter++;
    }

    // console.log(window.event);
    // if (window.event.key === ' ') {
    //     console.log('hit space bar');
    // }

    errors.textContent = errorsCounter;
}

// converts string '00:00:00' into a integer value
function convertStringTimeToIntTime(stringTime) {
    const splitTime = stringTime.split(':');
    const minutes = splitTime[0] * 60 * 1000;
    const seconds = splitTime[1] * 1000;
    const milliseconds = splitTime[2] * 1;
    return minutes + seconds + milliseconds;
}

// updates the high score DOM board
function updateHighScores() {
    topThreeScores[0].textContent = highscores.first[0] || '00:00:00';
    topThreeScores[1].textContent = highscores.second[0] || '00:00:00';
    topThreeScores[2].textContent = highscores.third[0] || '00:00:00';
}

function determineHighScore() {
    const userStringTime = theTimer.textContent;
    const userIntTime = convertStringTimeToIntTime(userStringTime);

    const firstHighScoreEmpty = highscores.first.length === 0;
    const secondHighScoreEmpty = highscores.second.length === 0;
    const thirdHighScoreEmpty = highscores.third.length === 0;
    const allHighScoresEmpty = firstHighScoreEmpty && secondHighScoreEmpty && thirdHighScoreEmpty;

    if (allHighScoresEmpty) {
        highscores.first = [userStringTime, userIntTime];
        topThreeScores[0].textContent = userStringTime;
        return;
    }

    if (firstHighScoreEmpty || userIntTime < highscores.first[1]) {
        const tempFirst = highscores.first;
        const tempSecond = highscores.second;
        highscores.first = [userStringTime, userIntTime];
        highscores.second = tempFirst;
        highscores.third = tempSecond;
        updateHighScores();
        return;
    }
    
    if (secondHighScoreEmpty || userIntTime < highscores.second[1]) {
        const tempSecond = highscores.second;
        highscores.second = [userStringTime, userIntTime];
        highscores.third = tempSecond;
        updateHighScores();
        return;
    }
    
    if (thirdHighScoreEmpty || userIntTime < highscores.third[1]) {
        highscores.third = [userStringTime, userIntTime];
        updateHighScores();
        return;
    }
}

randomText = selectRandomText();
originText.textContent = randomText[0];
textSource.href = randomText[1];

resetButton.addEventListener('click', () => reset());
document.addEventListener('keyup', () => start());