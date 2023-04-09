// Get all FAQ questions and answers
const faqItems = document.querySelectorAll('.faq-item');

// Loop through each FAQ item
faqItems.forEach((item) => {
	// Get the question and answer elements
	const question = item.querySelector('.faq-question');
	const answer = item.querySelector('.faq-answer');

	// Add a click event listener to the question
	question.addEventListener('click', () => {
		// Toggle the 'active' class on the item
		item.classList.toggle('active');

		// Toggle the '+' and '-' symbols on the question
		const faqToggle = question.querySelector('.faq-toggle');
		faqToggle.textContent = item.classList.contains('active') ? '-' : '+';

		// Toggle the visibility of the answer
		answer.style.maxHeight = item.classList.contains('active') ? answer.scrollHeight + 'px' : 0;
	});
});
