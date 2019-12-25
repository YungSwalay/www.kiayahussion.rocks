const altButtonText = 'Close Card';

var originalButtonText = document.querySelector('button').textContent;

function openCard() {
	var button = document.getElementById('button');
	var cards = document.querySelectorAll('.card');
	var cardOpen;

	for (var i = 0; i < cards.length; i++) 
	{
		if (cards[i].classList.contains('open')) {
			cardOpen = true;
		} else {
			cardOpen = false;
		}
		cards[i].classList.toggle('open');
	}

	if (cardOpen) {
		button.innerHTML = originalButtonText;
	} else {
		button.innerHTML = altButtonText;
	}

}
