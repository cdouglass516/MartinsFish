import { getLocations } from "./locationData.js"
import { Loc } from "./locations.js"

export const LocLost = (type) => {
    const locs = getLocations();
    const contentElement = document.querySelector(".locationDiv");
    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    fishHTMLRepresentations = '';
    let tipnbr = 0;
    for (const location of locs) {
        fishHTMLRepresentations += Loc(location);
    }
console.log(fishHTMLRepresentations);
    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += fishHTMLRepresentations;
    ;
}