const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

let quotes = [];

// Fetch quotes once and store in memory
async function getQuotes() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    quotes = await response.json();
    showRandomQuote();
  } catch (error) {
    quoteText.textContent = "Oops! Could not fetch quotes.";
    authorText.textContent = "";
  }
}

// Show a random quote from the list
function showRandomQuote() {
  if (quotes.length === 0) return;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.textContent = `"${quote.text}"`;
  authorText.textContent = quote.author ? `– ${quote.author}` : "– Unknown";
}

// Event listener
newQuoteBtn.addEventListener('click', showRandomQuote);

// Initial load
getQuotes();
