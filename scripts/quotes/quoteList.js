import { getQuote } from "./quoteData.js"
import { Quote } from "./quote.js"

export const quoteList = (type) => {
    const quptes = getQuote();
    const contentElement = document.querySelector(".div_quotes");
    // Generate all of the HTML for all of the fish
    let quoteHTMLRepresentations = ""
    quoteHTMLRepresentations = '';
    for (const quote of quptes) {
        quoteHTMLRepresentations += Quote(quote);
    }
console.log(quoteHTMLRepresentations);
    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += quoteHTMLRepresentations;
    ;
}