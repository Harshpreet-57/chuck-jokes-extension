fetch('https://api.chucknorris.io/jokes/random')
      .then(data => data.json())
      .then(jokeData => {
        const JokeText = jokeData.value;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = JokeText;
      })