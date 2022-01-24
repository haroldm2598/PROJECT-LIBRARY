// SELECTOR FOR html id & html elements
const headerTitle = document.querySelector('#headerTitle');
const headerBtn = document.querySelector('#headerBtn');
const footer = document.querySelector('#footer');
const mainContainer = document.querySelector('#mainBody');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('#modalClose');
const modalSubmit = document.querySelector('#modalSubmit');
const modalTitle = document.querySelector('#modalTitle');
const modalAuthor = document.querySelector('#modalAuthor');
const modalPages = document.querySelector('#modalPages');
const modalRead = document.querySelectorAll('input[name="choice"]');
const modalValidation = document.querySelector('#modalValidation');

headerTitle.innerHTML = 'Library';

function footerSection() {
	const date = new Date().getFullYear();
	const para = document.createElement('p');
	para.setAttribute('class', 'footer__para');
	para.innerHTML = `all right reserve ${date}`;
	footer.appendChild(para);
}

footerSection();
// ----------------- Stored values Area -----------------------
const storeLib = [];

// ----------------- Object Area ------------------------------
function Book(id, title, author, pages, complete) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.complete = complete;
}

function addBookLibrary() {
	const mDiValue = Math.floor(Math.random() * 10000);
	const theHobbit = new Book(
		mDiValue,
		'The hobbit',
		'J,R,R Tolkien',
		255,
		'no'
	);
	const theLordOfTheRings = new Book(
		mDiValue,
		'TLOR',
		'J,R,R Tolkien',
		350,
		'yes'
	);
	const starWars = new Book(
		mDiValue,
		'Game of Thrones',
		'George R.R Martin',
		6969,
		'yes'
	);
	const harryPotter = new Book(
		mDiValue,
		'Harry potter',
		'J. K. Rowling',
		223,
		'no'
	);

	let storeArr = [theHobbit, theLordOfTheRings, starWars, harryPotter];
	localStorage.setItem('oldLibrary', JSON.stringify(storeArr));
	let oldStorage = JSON.parse(localStorage.getItem('oldLibrary') || '[]');

	return oldStorage;
}

function getStore() {
	let newLib = JSON.parse(localStorage.getItem('newLibrary') || '[]');

	return newLib;
}

function radioChoice() {
	let radioVal;
	for (let i = 0; i < modalRead.length; i++) {
		if (modalRead[i].checked) {
			radioVal = modalRead[i].value;
			break;
		}
	}
	return radioVal;
}

function uniqueName(arr, key) {
	return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function addNewBook() {
	const mDiValue = Math.floor(Math.random() * 10000);
	const mDtValue = modalTitle.value;
	const mDaValue = modalAuthor.value;
	const mDpValue = modalPages.value;
	const mDcValue = radioChoice();
	const newBook = new Book(mDiValue, mDtValue, mDaValue, mDpValue, mDcValue);
	const currentBook = getStore();

	storeLib.push(newBook);
	const lastArr = [storeLib.slice(-1).pop()];
	localStorage.setItem(
		'newLibrary',
		JSON.stringify(currentBook.concat(lastArr))
	);

	return lastArr;
}
/*
// BACK UP
function addNewBook() {
	const mDiValue = Math.floor(Math.random() * 10000);
	const mDtValue = modalTitle.value;
	const mDaValue = modalAuthor.value;
	const mDpValue = modalPages.value;
	const mDcValue = radioChoice();
	const newBook = new Book(mDiValue, mDtValue, mDaValue, mDpValue, mDcValue);

	storeLib.push(newBook);
	localStorage.setItem('newLibrary', JSON.stringify(storeLib));
	const lastArr = [storeLib.slice(-1).pop()];

	return lastArr;
}
*/

async function bookPost(dataLib) {
	const greenColor = '#a2d18c';
	const redColor = '#ff4f4f';

	for (let i = 0; i < dataLib.length; i++) {
		// Create New Element for HTML
		let mainCard = document.createElement('div');
		let mainCardTitle = document.createElement('h3');
		let mainCardAuthor = document.createElement('h4');
		let mainCardPages = document.createElement('p');
		let mainReadBtn = document.createElement('button');
		let mainDeleteBtn = document.createElement('button');

		// Setting a atrribute for Elements
		mainCard.setAttribute('class', 'main__card');
		mainCardTitle.setAttribute('class', 'main__card--title');
		mainCardAuthor.setAttribute('class', 'main__card--author');
		mainCardPages.setAttribute('class', 'main__card--pages');
		mainReadBtn.setAttribute('class', 'main__card--readBtn');
		mainDeleteBtn.setAttribute('class', 'main__card--deleteBtn');

		dataLib[i].complete == 'yes' || dataLib[i].complete == 'Yes'
			? (mainReadBtn.style.backgroundColor = greenColor)
			: (mainReadBtn.style.backgroundColor = redColor);

		mainCardTitle.textContent = dataLib[i].title;
		mainCardAuthor.textContent = dataLib[i].author;
		mainCardPages.textContent = dataLib[i].pages;
		mainReadBtn.textContent = dataLib[i].complete;
		mainDeleteBtn.innerHTML = ` Delete Book ${'<i class="fas fa-trash"></i>'}`;

		mainCard.appendChild(mainCardTitle);
		mainCard.appendChild(mainCardAuthor);
		mainCard.appendChild(mainCardPages);
		mainCard.appendChild(mainReadBtn);
		mainCard.appendChild(mainDeleteBtn);
		mainContainer.appendChild(mainCard);

		// update read button
		mainReadBtn.addEventListener('click', () => {
			const data = getStore();
			const valBook = dataLib[i].complete === 'yes' ? 'no' : 'yes';
			const selectBook = data.find((e) => e.title === dataLib[i].title);
			let orderBook = () => {
				let replaceBook = Object.create(selectBook);
				replaceBook.complete = valBook;

				let assignBook = Object.assign(selectBook, replaceBook);

				return data.concat(assignBook);
			};

			localStorage.setItem(
				'newLibrary',
				JSON.stringify(uniqueName(orderBook(), 'title'))
			);
			location.reload();
			console.log(selectBook);

			/*
				WORKING BUT NOT GOOD
				
				... const data
				// const valBook =
				// 	dataLib[i].complete === 'yes'
				// 		? ['complete', 'no']
				// 		: ['complete', 'yes'];
				... const selectBook
				// const iterateBook = Object.entries(selectBook); 
				// const replaceBook = iterateBook.splice(3, 1, valBook);

			*/
		});

		// delete book button
		mainDeleteBtn.addEventListener('click', () => {
			const data = getStore();
			const newNotes = data.filter((book) => book.title != dataLib[i].title);

			localStorage.setItem('newLibrary', JSON.stringify(newNotes));
			location.reload();
		});
	}

	await new Promise((resolve, reject) => setTimeout(1000, resolve));
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

function removeAllVal() {
	modalTitle.value = '';
	modalAuthor.value = '';
	modalPages.value = '';
	modalRead.value = '';
}

// MODAL AREA submit & VALIDATION
modalSubmit.addEventListener('click', () => {
	let message = [];

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
		getStore();
		bookPost(addNewBook());
		isClose();
		removeAllVal();
	}
});

// ----------------- onLoad Area ------------------------------
window.addEventListener('load', bookPost(addBookLibrary()));
window.addEventListener('load', bookPost(getStore()));
