//DOM load event
window.addEventListener("DOMContentLoaded",	() => {

	const phoneticAlphabet = {
		A: {
			telephony: 'alpha', 
			pronunciation: 'al-fah', 
			morse: '• −', 
			semaphore: [180, 225],
			image: '1484953682155-3d2c7dbc325b'
		},
		B: {
			telephony: 'bravo', 
			pronunciation: 'brah-voh', 
			morse: '− • • •', 
			semaphore: [180, 270],
			image: '1458891216473-4f26bb4eb40e'
		},
		C: {
			telephony: 'charlie', 
			pronunciation: 'char-lee', 
			morse: '− • − •', 
			semaphore: [180, 315],
			image: '1519677704001-6d410c3ef07e'			
		},
		D: {
			telephony: 'delta', 
			pronunciation: 'dell-tah', 
			morse: '− • •', 
			semaphore: [180, 0],
			image: '1475088092121-b7d3cd6e1482'
		},
		E: {
			telephony: 'echo', 
			pronunciation: 'eck-oh', 
			morse: '•', 
			semaphore: [180, 45],
			image: '1512446816042-444d641267d4'
		},
		F: {
			telephony: 'foxtrot', 
			pronunciation: 'foks-trot', 
			morse: '• • − •', 
			semaphore: [180, 90],
			image: '1498903891748-110dc39423d6'
		},
		G: {
			telephony: 'golf', 
			pronunciation: 'golf', 
			morse: '− − •', 
			semaphore: [180, 135],
			image: '1496062339235-ae16724801fb'
		},
		H: {
			telephony: 'hotel', 
			pronunciation: 'hoh-tel', 
			morse: '• • • •', 
			semaphore: [225, 270],
			image: '1514192858121-201a7ab1c06e'
		},
		I: {
			telephony: 'india', 
			pronunciation: 'in-dee-ah', 
			morse: '• •', 
			semaphore: [225, 315],
			image: '1506462945848-ac8ea6f609cc'
		},
		J: {
			telephony: 'juliett', 
			pronunciation: 'jew-lee-ett', 
			morse: '• − − −', 
			semaphore: [90, 0],
			image: '1498928968612-3c2067ded23e'
		},
		K: {
			telephony: 'kilo', 
			pronunciation: 'key-loh', 
			morse: '− • −', 
			semaphore: [0, 225],
			image: '1521804906057-1df8fdb718b7'
		},
		L: {
			telephony: 'lima', 
			pronunciation: 'lee-mah', 
			morse: '• − • •', 
			semaphore: [45, 225],
			image: '1517081105831-736d3da80907'			
		},
		M: {
			telephony: 'mike', 
			pronunciation: 'mike', 
			morse: '− −', 
			semaphore: [90, 225],
			image: '1478737270239-2f02b77fc618'
		},
		N: {
			telephony: 'november', 
			pronunciation: 'no-vem-ber', 
			morse: '− •', 
			semaphore: [135, 225],
			image: '1425100599170-85ec4f00a6ee'
		},
		O: {
			telephony: 'oscar', 
			pronunciation: 'oss-cah', 
			morse: '− − −', 
			semaphore: [315, 270],
			image: '1505438345460-85283011b7c3'
		},
		P: {
			telephony: 'papa', 
			pronunciation: 'pah-pah', 
			morse: '• − − •', 
			semaphore: [0, 270],
			image: '1513337915236-364fe3ee1f53'
		},
		Q: {
			telephony: 'quebec', 
			pronunciation: 'keh-beck', 
			morse: '− − • −', 
			semaphore: [45, 270],
			image: '1494969877776-d827f02c70dc'
		},
		R: {
			telephony: 'romeo', 
			pronunciation: 'rom-eh-oh', 
			morse: '• − •', 
			semaphore: [90, 270],
			image: '1456553405974-0712f71f2e69'
		},
		S: {
			telephony: 'sierra', 
			pronunciation: 'see-air-ah', 
			morse: '• • •', 
			semaphore: [135, 270],
			image: '1507315991476-aece7be22af9'
		},
		T: {
			telephony: 'tango', 
			pronunciation: 'tan-go', 
			morse: '−', 
			semaphore: [0, 315],
			image: '1504609813442-a8924e83f76e'
		},
		U: {
			telephony: 'uniform', 
			pronunciation: 'you-nee-form', 
			morse: '• • −', 
			semaphore: [45, 315],
			image: '1508313494143-60204a419ca9'
		},
		V: {
			telephony: 'victor', 
			pronunciation: 'vik-tah', 
			morse: '• • • −', 
			semaphore: [135, 0],
			image: '1501743411739-de52ea0ce6a0'
		},
		W: {
			telephony: 'whiskey', 
			pronunciation: 'wiss-key', 
			morse: '• − −', 
			semaphore: [90, 45],
			image: '1508253730651-e5ace80a7025'
		},
		X: {
			telephony: 'xray', 
			pronunciation: 'ecks-ray', 
			morse: '− • • −', 
			semaphore: [135, 45],
			image: '1512615199361-5c7a110a8d11'
		},
		Y: {
			telephony: 'yankee', 
			pronunciation: 'yang-key', 
			morse: '− • − −', 
			semaphore: [90, 315],
			image: '1449356669056-f1c1e6e56b0f'
		},
		Z: {
			telephony: 'zulu', 
			pronunciation: 'zoo-loo', 
			morse: '− − • •', 
			semaphore: [90, 135],
			image: '1513154570962-43d860927f26'
		}
	},
	letterInput = document.querySelector('.letter-input'),
	letterOutput = document.querySelector('.letter'),
	telephonyOutput = document.querySelector('.telephony'),
	pronunciationOutput = document.querySelector('.pronunciation'),
	morseOutput = document.querySelector('.morse-code'),
	semaphoreHand1 = document.querySelector('.hand-1'),
	semaphoreHand2 = document.querySelector('.hand-2'),
	speakButton = document.querySelector('.speak-btn');

	let key = 'A',
		voice = '';

	//Set semaphore to initial position
	semaphoreHand1.style.transform = `rotate(${phoneticAlphabet[key].semaphore[0] + 90}deg)`;
	semaphoreHand2.style.transform = `rotate(${phoneticAlphabet[key].semaphore[1] + 90}deg)`;	

	//Throttle function
	function throttle (func, wait = 200) {

		let throttling;

		return function() {

			if (!throttling) {

				func.apply(this, arguments);

				throttling = true;

				setTimeout(() => throttling = false, wait);

			}
		}
	}

	//Key press event listener
	window.addEventListener('keydown', throttle(e => {

		//Get key pressed
		const keyPressed = e.key.toUpperCase();

		//Check if pressed key is in alphabet
		if (keyPressed.match(/^[A-Z]{1}$/)) {

			//Assign pressed key to global key variable
			key = keyPressed;

			//Output letter
			letterOutput.textContent = key;

			//Output telephony
			telephonyOutput.textContent = phoneticAlphabet[key].telephony;

			//Output pronunciation
			pronunciationOutput.textContent = `(${phoneticAlphabet[key].pronunciation})`;

			//Output morse code
			morseOutput.textContent = phoneticAlphabet[key].morse;

			//Update semaphore
			semaphoreHand1.style.transform = `rotate(${phoneticAlphabet[key].semaphore[0] + 90}deg)`;
			semaphoreHand2.style.transform = `rotate(${phoneticAlphabet[key].semaphore[1] + 90}deg)`;	

			//Update background image
			document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
			url(https://images.unsplash.com/photo-${phoneticAlphabet[key].image}?w=1280&h=720)`;
			
			//Clear letter input field			
			letterInput.value = '';

		}
	}));

	//Speak button click event listener
	speakButton.addEventListener('click', throttle(() => {

		//Stop current speech if active
		speechSynthesis.cancel();

		//Create new speech synthesis utterance
		const speech = new SpeechSynthesisUtterance();	

		//Set text to be spoken
		speech.text = phoneticAlphabet[key].telephony;

		//Check if custom voice was loaded
		if (voice) {
			//Set voice
			speech.voice = voice;
		}

		//Set voice speed
		speech.rate = 1.4;

		//Speak telephony
		speechSynthesis.speak(speech);

	}));

	//Speech synthesis voices ready event listener
	speechSynthesis.addEventListener('voiceschanged', () => {

		//Get array of all possible voices
		const voices = speechSynthesis.getVoices();

		//Get Google voice or use default
		voice = voices.find(voice => voice.name === 'Google UK English Male') || voices[0];

	});
});