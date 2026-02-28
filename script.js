const map = document.querySelector('svg');
const countryText = document.getElementById('countryText');

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
const randomId = ids[Math.floor(Math.random() * ids.length)];
const targetCountryName = countryNames[randomId];
countryText.innerText = `Click ${targetCountryName}`;

map.addEventListener('click', (e) => {
	const region = e.target.closest('.countries');

	if (region) {
		const clickedId = region.id;
		const clickedName = countryNames[clickedId];

		if (clickedId === randomId) {
			alert(`Correct! You found ${clickedName}!`);
			location.reload();
		} else {
			alert(`Close! That was ${clickedName}. Try to find ${targetCountryName}.`);
		}
	}
});
