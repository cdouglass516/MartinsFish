import { tipData } from "./tipData.js"

export const Tip = (tip) =>{
    return `
    <article class="tip-card">
    <div class="tip-container">
        <h3 class="tip-name">${tip.tipName}</h3>
        <span>${tip.shortTip}</span>
        <textarea name="" id="" cols="30" rows="10">${tip.tipInfo}</textarea>
    </div>
    </article>
    `
}
