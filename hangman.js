const hearts = document.getElementById("heartsConteainer");
const wordStatus = document.getElementById("wordStatus");
const gmText = document.getElementById("gmText");
const input = document.getElementById("input");
const enterButton = document.getElementById("enter");
const restartButton = document.getElementById("restart");
const clueButton = document.getElementById("clue");
const topic = document.getElementById("topic");

const topics = Object.keys(wordLists);

// Select a random topic
const randomTopicKey = topics[Math.floor(Math.random() * topics.length)];

// Get the word list for the selected topic
const randomTopic = wordLists[randomTopicKey];

// Select a random word from the selected topic
const randomWord = randomTopic[Math.floor(Math.random() * randomTopic.length)];

console.log("Random Word:", randomWord);

topic.innerText = `Current Topic: ${randomTopicKey.toUpperCase()}`;

let remainingLetters = randomWord.length;
let defaultAttempts = 6;
let remainingAttempts = defaultAttempts;

let randomWordArray = [];
for (let i = 0; i < randomWord.length; i++) {
  randomWordArray.push(randomWord[i]);
}
console.log("randomWordArray: " + randomWordArray);

let riddledWordArray = [];
for (let i = 0; i < randomWord.length; i++) {
  riddledWordArray.push("_");
}

function updateWordStatus() {
  wordStatus.innerHTML = riddledWordArray.join("");
}
function updateGmText(text) {
  gmText.innerHTML = text;
}

input.focus();
heartsRendering();
updateWordStatus();
updateGmText(
  `Guess the word before you run out of attempts. Here is only one clue.` +
    `<br>` +
    `Enter one letter at a time.`
);

console.log("riddledWordArray: " + riddledWordArray);

const wrongAnswers = [];

enterButton.onclick = function () {
  const guess = input.value.toLowerCase();
  input.value = "";
  input.focus();
  checkGuess(guess);
};
restartButton.onclick = function () {
  location.reload();
};

function checkGuess(guess) {
  guess = guess.toLowerCase(); // Убедитесь, что буква в нижнем регистре
  let correctGuess = false;

  if (randomWordArray.indexOf(guess) === -1) {
    // Новый неправильный ответ
    if (wrongAnswers.indexOf(guess) === -1) {
      updateGmText("There is no such letter.");
      wrongAnswers.push(guess);
      remainingAttempts--;
      heartsRendering();
      updateWordStatus();
    } else {
      // Старый неправильный ответ
      updateGmText("Sorry, but we already tried this letter.");
    }
  } else {
    // Правильный ответ
    updateGmText(`Nice! There is letter "${guess.toUpperCase()}"`);
    for (let j = 0; j < randomWord.length; j++) {
      if (randomWord[j] === guess && riddledWordArray[j] === "_") {
        riddledWordArray[j] = guess.toUpperCase();
        remainingLetters--;
        correctGuess = true;
      }
    }

    if (!correctGuess) {
      updateGmText(`We already got letter "${guess.toUpperCase()}".`);
    }
  }

  updateWordStatus();

  if (remainingLetters <= 0) {
    updateGmText("Congratulations! You guessed the word!");
    input.disabled = true;
    input.placeholder = `Well played`;
    enterButton.disabled = true;
    clueButton.disabled = true;
  } else if (remainingAttempts <= 0) {
    updateGmText(
      `Sorry, you've run out of attempts. The word was ${randomWord.toUpperCase()}.`
    );
    input.placeholder = `Try again`;
    input.disabled = true;
    enterButton.disabled = true;
    clueButton.disabled = true;
  }

  console.log("remainingLetters = " + remainingLetters);
  console.log("remainingAttempts = " + remainingAttempts);
  console.log("numberOfClues = " + numberOfClues);
}

let numberOfClues = 0;
let defaultMAxNumberOFClues = 1;
clueButton.onclick = function () {
  if (numberOfClues < defaultMAxNumberOFClues) {
    let randomNumberOfLetter;
    let randomLetter;

    do {
      randomNumberOfLetter = Math.floor(Math.random() * randomWord.length);
      randomLetter = randomWord[randomNumberOfLetter];
    } while (riddledWordArray[randomNumberOfLetter] !== "_");
    input.value = randomLetter;
    clueButton.disabled = true;
    numberOfClues++;
  } else {
    updateGmText("You can only use the clue once.");
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    enterButton.onclick();
  }
  if (event.key === "Shift") {
    clueButton.onclick();
  }
  if (event.key === "Control") {
    restartButton.onclick();
  }
});

function filledHeart() {
  return `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="filled__heart"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            d="M5 2V3.99997H3V6H1V12H3V14H5V16H6.99998V18H9.00001V20H11V22H13V20H15V18H17V16H19V14H19.0175H21V12H23V6H21V3.99997H19.0175H19V2H15V3.99997H13V6H11V3.99997H9.03317H9.00001V2H5Z"
          />
        </svg>
`;
}
function emptyHeart() {
  return `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="empty__heart"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4z"
          />
        </svg>
`;
}
function heartsRendering() {
  hearts.innerHTML = "";
  for (i = 1; i <= remainingAttempts; i++) {
    hearts.insertAdjacentHTML("beforeend", filledHeart());
  }
  for (i = remainingAttempts + 1; i <= defaultAttempts; i++) {
    hearts.insertAdjacentHTML("beforeend", emptyHeart());
  }
}
