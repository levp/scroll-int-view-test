const sectionSet = new Set(document.querySelectorAll('.section'));

function hideSectionsThatAreNotInView() {
	for (const section of sectionSet) {
		if (!isElementInView(section)) {
			section.classList.add('hidden-section');
		}
	}
}

function showSectionsThatAreInView() {
	for (const section of sectionSet) {
		if (isElementInView(section)) {
			sectionSet.delete(section);
			section.classList.remove('hidden-section');
		}
	}
}

function isElementInView(element) {
	const appearMargin = 60;
	const bounds = element.getBoundingClientRect();
	return bounds.top + appearMargin < window.innerHeight;
}

// Call once on page load.
document.addEventListener('DOMContentLoaded', hideSectionsThatAreNotInView);
// Call on scroll.
window.addEventListener('scroll', showSectionsThatAreInView);
