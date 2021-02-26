/**
 *   FishList which renders individual fish objects as HTML
 */
import { getFish,getSaltWater } from "./fishCollection.js"
import { Fish } from "./Fish.js"

export const FishList = (type) => {
    const fishes = getFish();
    const contentElement = document.querySelector(".fishList");
    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    fishHTMLRepresentations = '';
    let tipnbr = 0;
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish);
    }
console.log(fishHTMLRepresentations);
    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += fishHTMLRepresentations;
    ;
}

//<section class="fishList">
//<span id='salt-fish'></span>
//<span id='fresh-fish'></span>

//</section>