let btn = document.querySelector("#btn");
let quoteText = document.querySelector("#quote");
let authorText = document.querySelector("#author");

btn.addEventListener("click", async() => {
  document.body.style.background = `linear-gradient(to right, ${randomColor()}, ${randomColor()})`;
  quoteText.innerText = await fetchingApi();
  authorText.innerText = '-'+await fetchingApiAuthor();
});

function randomColor() {
  let random1 = Math.floor(Math.random() * 256);
  let random2 = Math.floor(Math.random() * 256);
  let random3 = Math.floor(Math.random() * 256);
  let rgb = `rgb(${random1},${random2},${random3})`;
  return rgb;
}

async function fetchingApi() {
  try {

    const response = await fetch("https://dummyjson.com/quotes/random/1");
    quote = await response.json();
    return quote[0].quote;

  } catch (error) {
    console.log(error);
  }
}

async function fetchingApiAuthor() {
  try {

    const response = await fetch("https://dummyjson.com/quotes/random/1");
    quote = await response.json();
    return quote[0].author;

  } catch (error) {
    console.log(error);
  }
}