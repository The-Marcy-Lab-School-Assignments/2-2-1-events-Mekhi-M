const clickCounterHandler = (event) => {
  console.log(event);
  event.target.dataset.clicks++;
  const numOfClicks = Number(event.target.dataset.clicks);

  if (numOfClicks === 1) {
    event.target.textContent = `I've been clicked ${numOfClicks} time.`;
  } else {
    event.target.textContent = `I've been clicked ${numOfClicks} times!`;
  }
};

const handleKeydown = (event) => {
  console.log(event.code);
  document.querySelector(
    "#keydown-tracker"
  ).textContent = `You pressed ${event.code}`;
};

const handleDelegation = (event) => {
  const resultSpan = document.querySelector("#delegation-result");
  if (!event.target.matches("#delegation")) {
    resultSpan.textContent = event.target.textContent;
  }
};

const addNewRandomNumber = () => {
  const liEl = document.createElement("li");
  rdmNum = Math.floor(Math.random() * 100) + 1;

  liEl.textContent = rdmNum;

  document.querySelector("#random-numbers").append(liEl);
};

const main = () => {
  // question 4 event
  const delegationContainer = document.querySelector("#delegation");
  delegationContainer.addEventListener("click", handleDelegation);

  // question 1 event
  const clickCountButton = document.querySelector("#click-button");
  clickCountButton.addEventListener("click", clickCounterHandler);

  // question 2 event
  document.body.addEventListener("keydown", handleKeydown);

  // question 3 event
  const inlineFuncButton = document.querySelector("#inline-example");
  inlineFuncButton.addEventListener("click", clickCounterHandler);

  // question 5 event
  const rndmNumButton = document.querySelector("#add-random-num");
  rndmNumButton.addEventListener("click", addNewRandomNumber);

  // question 6 event
  const eventRemoveButt = document.querySelector("#remove");
  eventRemoveButt.addEventListener("click", (event) => {
    delegationContainer.removeEventListener("click", handleDelegation);
  });
};

main();
