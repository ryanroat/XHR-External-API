/* eslint-disable linebreak-style */
// listen for button click
document.querySelector('#get-jokes').addEventListener('click', getJokes);

// retrieve joke(s) from external API with XHR
function getJokes(e) {
  const number = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      // display retrieved joke(s) in DOM

      let output = '';

      if (response.type === 'success') {
        response.value.forEach((joke) => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };
  xhr.send();
  e.preventDefault();
}
