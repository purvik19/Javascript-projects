const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you."
];

function generateQuote(){
    let randomIndex = Math.floor(Math.random() * quotes.length); 
    document.getElementById("quote").innerText = quotes[randomIndex];
}

