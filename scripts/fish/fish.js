/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return `
			<article class="fish-card">
				<div><img class="fish-image" src="images/${fish.image}" /></div>
				<h3 class="fish-name">${fish.name}</h3>
				<ul>
					<li class="fish-details">${fish.species}</li>
					<li class="fish-details">${fish.harvestLocation}</li>
					<li class="fish-details">${fish.inches}</li>
					<li class="fish-details">${fish.diet}</li>
				</ul>
        		</article>
 
        `
}
