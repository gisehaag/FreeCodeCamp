import { projects, technologies } from './data.js';

const openDetails = document.querySelectorAll('.icon-chevron-down');

openDetails.forEach((button) => {
	button.addEventListener('click', displayDetails);
})

function displayDetails(event) {
	let moreInfoButton = event.currentTarget;
	let projectBox = moreInfoButton.closest('.project-item');
	let name = projectBox.dataset.name;

	let projectName = projects[name];

	let infoBox = document.createElement('div');
	infoBox.classList.add('more-info');
	projectBox.appendChild(infoBox);

	if (projectName) {
		moreInfoButton.classList.add('hidden');

		let projectTech = projects[name].technology;
		let icons = '';
		for (let i = 0; i < projectTech.length; i++) {
			for (let key in technologies) {
				if (projectTech[i] == key) {
					icons += `<span class="tech-icon" style="color: ${technologies[key].color}">${technologies[key].svg}</span>`
				};
			}
		}

		infoBox.innerHTML += `
			<div class="wrapper">
				<p class="date">${projectName.date}</p>
				<p>${icons}</p>
				<p>
					<span class="tooltip" data-title="inspiration">💡</span>
					<a class="inspiration-link" href="${projectName.inspirationURL}">${projectName.inspirationTitle}</a>
				</p>
				<p>${projectName.description}</p>
			</div>`

		let hideInfoButton = document.createElement('span');
		hideInfoButton.classList.add('icon-chevron-up');
		infoBox.querySelector('.wrapper').appendChild(hideInfoButton);

		setTimeout(() => infoBox.classList.add('visible'), 200);

		hideInfoButton.addEventListener('click', () => {
			infoBox.classList.remove('visible');

			setTimeout(() => {
				projectBox.removeChild(infoBox);
				moreInfoButton.classList.remove('hidden');
			}, 1200);
		});
	}
}
