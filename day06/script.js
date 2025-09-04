const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("new-quote");

const apiURL = "https://api.quotable.io/random";

const localQuotes = [
  { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { content: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { content: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { content: "If you’re going through hell, keep going.", author: "Winston Churchill" },
  { content: "Action is the foundational key to all success.", author: "Pablo Picasso" }
];

async function getQuote() {
  try {
    const res = await fetch(apiURL, { cache: "no-store" });
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    quoteEl.textContent = `"${data.content}"`;
    authorEl.textContent = `— ${data.author}`;
  } catch (error) {
   
    const rand = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    quoteEl.textContent = `"${rand.content}"`;
    authorEl.textContent = `— ${rand.author}`;
  }
}

window.onload = getQuote;

btn.addEventListener("click", getQuote);
