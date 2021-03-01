/**
 *  Fish which renders individual location objects as HTML
 */
export const Loc = (loc) => {
    return `
			<article class="loc-card">
				<div><img class="locImage" src="images/locations/${loc.image}" /></div>
				<h3 class="loc-name">${loc.name}</h3>
				<ul>
					<li class="loc-details">${loc.bodyOfWater}</li>
					<li class="loc-details">${loc.country}</li>
					<li class="loc-details">${loc.latLong}</li>
				</ul>
        		</article>
 
        `
}

