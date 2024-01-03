function generateJoke(event) {
  event.preventDefault();
  new Typewriter("#joke", {
    strings: "The joke will go here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);
