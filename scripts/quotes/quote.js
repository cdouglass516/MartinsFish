export const Quote = (quote) =>{
    return `
    <article class="quote-card">
    <div class="quote-container">
        <h4 class="quote quote-name">${quote.quote}</h4>
        <h5 class="quote">${quote.author}</h5>
    </div>
    </article>
    `
}