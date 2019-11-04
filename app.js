const form = document.getElementById("joke-form");
const jokeOutput = document.querySelector(".joke-output");

form.addEventListener("submit", loadJokes);

function loadJokes(e) {
  e.preventDefault();

  const number = document.querySelector(".jokes-number").value;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = "";

      if (response.type === "success") {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Something Went Wrong</li>";
      }
      jokeOutput.innerHTML = output;
    }
  };
  xhr.send();
}
