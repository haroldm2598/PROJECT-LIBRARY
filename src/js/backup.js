// SELECTOR FOR html id & html elements
const headerTitle = document.querySelector('#headerTitle');
const headerBtn = document.querySelector('#headerBtn');
const mainContainer = document.querySelector('#mainBody');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('#modalClose');
const modalSubmit = document.querySelector('#modalSubmit');
const modalTitle = document.querySelector('#modalTitle');
const modalAuthor = document.querySelector('#modalAuthor');
const modalPages = document.querySelector('#modalPages');
const modalComplete = document.querySelector('#modalComplete');
const modalValidation = document.querySelector('#modalValidation');

headerTitle.innerHTML = 'Library';
// ----------------- Stored values Area -----------------------
let oldLibrary = [];
let newLibrary = [];

// ----------------- Object Area ------------------------------
function Book(title, author, pages, complete) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.complete = complete;
}

Book.prototype.arrayConcat = function () {
	const concatArray = myLibrary.concat([newBook]);
	return concatArray;
};

function addBookLibrary() {
	const theHobbit = new Book('The hobbit', 'J,R,R Tolkien', 255, 250);
	const theLordOfTheRings = new Book('TLOR', 'J,R,R Tolkien', 350, 250);
	const starWars = new Book('Game of Thrones', 'George R.R Martin', 6969, 666);
	const harryPotter = new Book('Harry potter', 'J. K. Rowling', 223, 223);

	oldLibrary.push(theHobbit, theLordOfTheRings, starWars, harryPotter);

	for (let i = 0; i < oldLibrary.length; i++) {
		// Create New Element for HTML
		const mainCard = document.createElement('div');
		let mainCardTitle = document.createElement('h3');
		let mainCardAuthor = document.createElement('h4');
		let mainCardPages = document.createElement('p');
		let mainCardComplete = document.createElement('p');

		// Setting a atrribute for Elements
		mainCard.setAttribute('class', 'main__card');
		mainCardTitle.setAttribute('class', 'main__card--title');
		mainCardAuthor.setAttribute('class', 'main__card--author');
		mainCardPages.setAttribute('class', 'main__card--pages');
		mainCardComplete.setAttribute('class', 'main__card--read');

		mainCardTitle.textContent = oldLibrary[i].title;
		mainCardAuthor.textContent = oldLibrary[i].author;
		mainCardPages.textContent = oldLibrary[i].pages;
		mainCardComplete.textContent = oldLibrary[i].complete;

		mainCard.appendChild(mainCardTitle);
		mainCard.appendChild(mainCardAuthor);
		mainCard.appendChild(mainCardPages);
		mainCard.appendChild(mainCardComplete);
		mainContainer.appendChild(mainCard);
	}

	return oldLibrary;
}

function addNewBook() {
	const mDtValue = modalTitle.value;
	const mDaValue = modalAuthor.value;
	const mDpValue = modalPages.value;
	const mDcValue = modalComplete.value;

	const newBook = new Book(mDtValue, mDaValue, mDpValue, mDcValue);
	newLibrary.push(newBook);

	const lastArr = [newLibrary.slice(-1).pop()];

	for (let i = 0; i < lastArr.length; i++) {
		// Create New Element for HTML

		const mainCard = document.createElement('div');
		let mainCardTitle = document.createElement('h3');
		let mainCardAuthor = document.createElement('h4');
		let mainCardPages = document.createElement('p');
		let mainCardComplete = document.createElement('p');

		// Setting a atrribute for Elements
		mainCard.setAttribute('class', 'main__card');
		mainCardTitle.setAttribute('class', 'main__card--title');
		mainCardAuthor.setAttribute('class', 'main__card--author');
		mainCardPages.setAttribute('class', 'main__card--pages');
		mainCardComplete.setAttribute('class', 'main__card--read');

		mainCardTitle.textContent = lastArr[i].title;
		mainCardAuthor.textContent = lastArr[i].author;
		mainCardPages.textContent = lastArr[i].pages;
		mainCardComplete.textContent = lastArr[i].complete;

		mainCard.appendChild(mainCardTitle);
		mainCard.appendChild(mainCardAuthor);
		mainCard.appendChild(mainCardPages);
		mainCard.appendChild(mainCardComplete);
		mainContainer.appendChild(mainCard);
	}

	// const testingUnique = [...new Set(newLibrary.map((item) => item.title))];
	// const value = '';
	// const testing1 = testingUnique.filter((item) => item !== value);
	// console.log(testing1);
	// return testingUnique;
}
// -------------- FIRST -----------------

// const uniqueLib = function () {
// 	let storeTitle = [];

// 	newLibrary.forEach((item) => {
// 		storeTitle.push(item.title);
// 	});

// 	// var valueStore = storeTitle.slice(-1).pop();
// 	var valueStore = 'store';
// 	var resultLib = storeTitle.includes(valueStore);

// 	console.log(storeTitle);
// 	return resultLib;
// };

// -------------- SECOND -----------------
// const uniqueLibTesting = (() => {
// 	var executed = false;

// 	return function () {
// 		if (!executed) {
// 			executed = true;

// 			let storeTitle = [];

// 			for (let i = 0; i < newLibrary.length; i++) {
// 				storeTitle.push(newLibrary[i].title);
// 			}

// 			const value = storeTitle.toString();
// 			const result = storeTitle.includes(value);

// 			console.log(storeTitle);
// 			return result;
// 		}
// 	};
// })();

// -------------- THIRD -----------------
// let storeTitle = [];
// var uniqueLib = function () {
// 	newLibrary.forEach((item) => {
// 		storeTitle.push(item.title);
// 	});

// 	let resultLib = storeTitle.includes('store');

// 	return resultLib;
// };

// -------------- FOURTH -----------------
// let storeTitle = [];
// function uniqueLib() {
// 	newLibrary.forEach((item) => {
// 		storeTitle.push(item.title);
// 	});
// }

// -------------- FIFTH -----------------

function uniqueLib() {
	let storeTitle = [];
	newLibrary.forEach((item) => {
		storeTitle.push(item.title);
	});

	console.log(`StoreTitle: ${storeTitle.join(' ')}`);
	let resultLib = storeTitle.includes('store');

	return [resultLib ? 1 : 0];
}

// ----------------- Button Area ------------------------------
headerBtn.addEventListener('click', isOpen);
modalClose.addEventListener('click', isClose);

function isOpen() {
	modal.classList.remove('modalHide');
	modal.classList.add('modal');
	modal.classList.remove('modalAnimationUp');
	modal.classList.add('modalAnimationDown');
}

function isClose() {
	modal.classList.remove('modal');
	modal.classList.add('modalHide');
	modal.classList.remove('modalAnimationDown');
	modal.classList.add('modalAnimationUp');
}

// MODAL AREA submit & VALIDATION
modalSubmit.addEventListener('click', () => {
	let message = [];

	// ------- FIRST --------
	// if (uniqueLib() === true) {
	// 	message.push('Title already have');
	// 	modalSubmit.disabled = true;

	// 	setTimeout(() => {
	// 		modalSubmit.disabled = false;
	// 	}, 1000);
	// }

	// ------- SECOND --------
	// if (uniqueLib()) {
	// 	alert('Title already have');
	// 	isValue = !isValue;
	// }

	// ------- FOURTH {code} --------
	// if (storeTitle.includes('store')) {
	// 	alert('Title already have');
	// }

	if (modalTitle.value === '' || modalTitle.value == null) {
		message.push('Title is required');
	}

	if (modalAuthor.value === '' || modalAuthor.value == null) {
		message.push('Author is required');
	}

	if (modalPages.value === '' || modalPages.value == null) {
		message.push('Pages is required');
	}

	if (message.length > 0) {
		// try to replace e.preventDefault() and insert isOpen() function ensuring it won't close if ever has problem
		isOpen();
		modalValidation.innerText = message.join(', ');
	} else {
		addNewBook();
		isClose();

		console.log(uniqueLib());
		/* GLOBAL {code} */
		// modalTitle.value = '';
		// modalAuthor.value = '';
		// modalPages.value = '';
		// modalComplete.value = '';

		/* FOURTH {code} */
		// uniqueLib();
		// console.log(storeTitle);
	}
});

// ----------------- Testing Area ------------------------------
console.log(addBookLibrary());

/*
- Validation for duplication title still not working having some errors
- no.1 after the message in other executioon not same still it will come.
- no.2 includes still big hendrance for the code.

- Try to use pure function where is will push inside the array will not affect the outside scope.
- Try to change the form html side.
- Try to use localStorage or sessionstorage instead of normal array.
*/

// ------------------------ Testing ------------------------
// // testing for removing empty object inside the localStorage
// const testingObj = {
// 	testingName: 'name',
// 	testingAge: 26,
// 	testingEmpty: null
// };

// // using ES6
// let objEntry = Object.entries(storeLib).reduce(
// 	(a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
// 	{}
// );

// // using less than ES5
// function clean(obj) {
// 	for (let propName in obj) {
// 		if (
// 			obj[propName] === null ||
// 			obj[propName] === undefined ||
// 			obj[propName] === ''
// 		) {
// 			delete obj[propName];
// 		}
// 	}

// 	return obj;
// }
