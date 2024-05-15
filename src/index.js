const incrementButtonHandler = () => {
  const resultsText = document.querySelector("#results");

  resultsText.textContent++;
};

const main = () => {
  const incrementButton = document.querySelector("#add-one");
  incrementButton.addEventListener("click", incrementButtonHandler);
};

main();
