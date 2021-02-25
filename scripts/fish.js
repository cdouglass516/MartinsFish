/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return `
			<article class="fish-card">
				<div><img class="fish-image" src="images/bluefish.jpg" /></div>
				<h3 class="fish-name">Swisher</h3>
				<ul>
					<li class="fish-details">Stripped Jelly Fish</li>
					<li class="fish-details">Length: 2 inches</li>
					<li class="fish-details">Found: Myrtle Beach</li>
					<li class="fish-details">Diet: Crumbs</li>
				</ul>
        		</article>
 
        `
}
