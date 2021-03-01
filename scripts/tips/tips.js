export const Tip = (tip) =>{
    return `
    <article class="tip-card">
    <div class="tip-container">
        <h3 class="tip-name">${tip.tipName}</h3>
        <h4>${tip.shortTip}</h4>
        <p>${tip.tipInfo}</p>
    </div>
    </article>
    `
}
