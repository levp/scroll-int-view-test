///////////////////////////////////////////////////////////

// Configuration.

const elementSelector = 'section';
const elementHiddenClass = 'hidden-section';
const appearMargin = 80;

///////////////////////////////////////////////////////////

// Functionality.

const elementSet = new Set(document.querySelectorAll('.' + elementSelector));

function hideElementsThatAreNotInView() {
	for (const element of elementSet) {
		if (!isElementInView(element)) {
			element.classList.add(elementHiddenClass);
		}
	}
}

function showElementThatAreInView() {
	for (const element of elementSet) {
		if (isElementInView(element)) {
			elementSet.delete(element);
			element.classList.remove(elementHiddenClass);
		}
	}
}

function isElementInView(element) {
	const bounds = element.getBoundingClientRect();
	return bounds.top + appearMargin < window.innerHeight;
}

// Call once on page load.
document.addEventListener('DOMContentLoaded', hideElementsThatAreNotInView);
// Call on scroll.
window.addEventListener('scroll', showElementThatAreInView);
