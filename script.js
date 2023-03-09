
const siteButton = document.querySelector (".glow-on-hover")


function quoteChanger () {
  
  let quoteList = ["allow me develop yours!!", "a very offordable site!!", "be a website owner today!!", "limited financial opportunities through traffic, ads, content postage and lot more!!", "i promise that yours will be more finer!!", "free hosting and little domain fee!", "accessible all over the world!!", "dont miss the opportunity to lunch your own website!!", "fast developing timeframe!", "3 months free debugging and undate!", "simplified code for easy management by anyother developer!!"];
  
  
  const randomQuoteIndex = Math.floor(Math.random() * quoteList.length);
  
  let randomQuote = quoteList.at(randomQuoteIndex);
  
  let paragraph = document.getElementById("quote-pick");
let text = document.createTextNode(randomQuote);

if(text) {
  paragraph.innerHTML = ''; 
}

paragraph.appendChild(text);

}


