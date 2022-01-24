Second Solution for modal validation

<!-- function modalWrong() {
	const array = [
		validationTitle(),
		validationAuthor(),
		validationPages(),
		validationComplete()
	];
	return array.map((arr) => {
		arr = modal.classList.add('modal');
		console.log(arr);
	});
}

function modalRight() {
	const array = [
		validationTitle(),
		validationAuthor(),
		validationPages(),
		validationComplete()
	];
	return array.map((arr) => {
		modal.classList.remove('modal');
		modal.classList.add('modalHide');
		console.log(arr);
	});
} -->

Third Solution for modal validation

<!-- function modalRight() {
	validationTitle();
	validationAuthor();
	validationPages();
	validationComplete();
}

function modalWrong() {
	console.log(validationTitle());
	console.log(validationAuthor());
	console.log(validationPages());
	console.log(validationComplete());
}

function modalPost() {
	// const post = false !== modalWrong ? modalRight() : modalWrong();
	// return post;
	const wrong = null;
	let testing;
	if (wrong === null) {
		testing = modalWrong();
		isOpen();
	} else {
		testing = modalRight();
		isClose();
	}
	return testing;
} -->

Validation Submit

<!-- function modalPost() {
	let testing;
	if (modalWrong() === false) {
		testing = modalWrong() && isOpen();
	} else {
		testing = modalRight() && isClose();
	}
	return testing;
} -->

Validation Compile make it less

<!-- function modalRight() {
	validationTitle();
	validationAuthor();
	validationPages();
	validationComplete();
}

function modalWrong() {
	console.log(validationTitle());
	console.log(validationAuthor());
	console.log(validationPages());
	console.log(validationComplete());
} -->

Validation Submit another Example using with pushing object in array

<!-- const modalTestArr = [];

function modalTestCompile() {
	return modalTestArr.push(
		validationTitle(),
		validationAuthor(),
		validationPages(),
		validationComplete()
	);
}

const falsyArr = modalTestArr.map((item) => item === false);

function modalTestPost() {
	return falsyArr === false ? `close` : `open`;
}

console.log(modalTestArr);

// MODAL AREA submit
modalSubmit.addEventListener('click', modalTestPost); -->

Validation Submit another example using simple with ternary

<!-- function modalCompile() {
	console.log(validationTitle());
	console.log(validationAuthor());
	console.log(validationPages());
	console.log(validationComplete());
}

function modalPost() {
	let testing;
	if (modalCompile === false || modalCompile === NaN) {
		testing = modalCompile();
	} else {
		testing = modalCompile();
	}
	var testingArr = [testing];
	// console.log(testingArr);
	return testing === undefined
		? console.log(undefined)
		: console.log(testingArr);
} -->

Validation Main Back up for submit

<!--

function validationTitle() {
	if (modalTitle.value === '' || modalTitle.value == null) {
		return (modalLabelTitle.innerText = 'Please Enter a string');
	} else {
		return modalTitle.value;
	}
}

function validationAuthor() {
	if (modalAuthor.value === '' || modalAuthor.value == null) {
		return (modalLabelAuthor.innerText = 'Please Enter a string');
	} else {
		return modalAuthor.value;
	}
}

function validationPages() {
	if (isNaN(modalPages.value)) {
		return (modalLabelPages.innerText = 'Please Enter a number only');
	} else if (modalPages.value === '' || modalPages.value == null) {
		return (modalLabelPages.innerText = 'Please Enter a number');
	} else {
		return modalPages.value;
	}
}

function validationComplete() {
	if (modalComplete.value === '' || modalComplete.value == null) {
		return (modalLabelComplete.innerText = 'Please Enter a string');
	} else {
		return modalComplete.value;
	}
}

function modalCompile() {
	console.log(validationTitle());
	console.log(validationAuthor());
	console.log(validationPages());
	console.log(validationComplete());
}

// MODAL AREA submit
modalSubmit.addEventListener('click', (e) => {
	modalCompile();
	e.preventDefault();
});
 -->

NOTHING JUST EXAMPLE

<!---
for (initialized; condition; final expression) {
statement
}

    const newArr = [23, 45, 123, 4234, 90];
    for (let i = 0; i < newArr.length; i++) {
    	console.log(newArr[i]);
    }

    for (let i = 1; i < arr.length; i++) {
    	if (modalPost() === true){ return statement && break; }
    	else { return modalWrong type again }

    }

    // not finished and having error at the same time
    function modalPost() {
    let testing;
    for (let i = 0; i < 10; i++) {
    	if (modalCompile() === false) {
    		testing[i] = modalCompile() && isOpen();
    		break;
    	} else {
    		testing[i] = modalCompile() && isClose();
    	}
    }

    return testing;

}
---->

BACK UP CODE FOR REMOVING DUPLICATES FROM ARRAY OF OBJECTS

<!----
// es6 version
	const uniqueArr = newLibrary.filter(
		(value, index, array) =>
			array.findIndex((obj) => obj.title === value.title) === index
	);

	const uniqueLib = [
		...new Map(newLibrary.map((item) => [item.title, item])).values()
	];
---->
