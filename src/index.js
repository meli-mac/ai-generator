function displayJoke(response) {
  console.log("joke generated");
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateJoke(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "560eatef1f75aofbc96fd19f393b84ab";
  let prompt = `User instructions: Generate a joke about ${instructionsInput.value}`;
  let context =
    "You are a funny joke expert and love to tell funny jokes. Your mission is to generate a joke in basic HTMl and separate each line with a <br />. Do not include a title to the joke. Only include one joke. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the joke and NOT at the beginning. Make sure to follow the user intructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden-display");
  jokeElement.innerHTML = `Generating the joke about ${instructionsInput.value} <span class="blink">⏳</span>`;
  axios.get(apiUrl).then(displayJoke);
  console.log("Generating joke");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);
