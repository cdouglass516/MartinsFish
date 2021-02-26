import { getTip } from "./tipData.js";
import { Tip } from "./tips.js";
export const tipList = (type) => {
    const tips = getTip();
    const contentElement = document.querySelector(".div_tip");
    // Generate all of the HTML for all of the tips
    let fishHTMLRepresentations = ""
    fishHTMLRepresentations = '';
    let tipnbr = 0;
    for (const tip of tips) {
        fishHTMLRepresentations += Tip(tip);
    }
    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += fishHTMLRepresentations;
    ;
}