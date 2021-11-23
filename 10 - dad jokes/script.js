/*
 * Description: fetch + async&await
 * Author:LinJ
 * Date:2021-11-23 12:25:10
 * LastEditors:LinJ
 * LastEditTime:2021-11-23 12:25:10
 */
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
