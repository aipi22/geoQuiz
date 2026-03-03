const map = document.querySelector('svg');
const countryText = document.getElementById('countryText');
const scoreText = document.getElementById('score');
const hintsText = document.getElementById('hints');

const countryNames = {
	"BD": "Bangladesh",
	"BT": "Bhutan",
	"KH": "Cambodia",
	"CN": "China",
	"TL": "East Timor",
	"IN": "India",
	"ID": "Indonesia",
	"JP": "Japan",
	"LA": "Laos",
	"MY": "Malaysia",
	"MM": "Burma/Myanmar",
	"NP": "Nepal",
	"KP": "North Korea",
	"PK": "Pakistan",
	"PG": "Papua New Guinea",
	"PH": "Philippines",
	"SG": "Singapore",
	"KR": "South Korea",
	"LK": "Sri Lanka",
	"TW": "Taiwan",
	"TH": "Thailand",
	"VN": "Vietnam"
};
const ids = Object.keys(countryNames);
const length = ids.length;

let currentTargetId = "";
let score = 0;

function newRound() {
	if (ids.length === 0) {
		countryText.innerText = "Done!";
		hintsText.innerText = "Great job!";
		currentTargetId = "";
		return;
	}

	currentTargetId = ids[Math.floor(Math.random() * ids.length)];
	countryText.innerText = `Click on ${countryNames[currentTargetId]}`;
}

map.addEventListener('click', (e) => {
	const region = e.target.closest('.countries');

	if (!region) {
		return;
	}

	if (region.id === currentTargetId) {
		hintsText.innerText = `Yup, that was ${countryNames[currentTargetId]}`;
		score++;
		scoreText.innerText = `${score}/${length}`;
		region.style.fill = "green";
		const index = ids.indexOf(currentTargetId);
		ids.splice(index, 1);
		newRound();
	} else {
		hintsText.innerText = `Whoops! That was ${countryNames[region.id]}. You're looking for ${countryNames[currentTargetId]}. We will come back to that one.`;
		region.style.fill = "red";
		newRound();
	}
});
newRound();
