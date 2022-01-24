Procedure

- Must be scss pre processor
- Clean scss process like bem
- Use of em and rem for sizing instead of pixel
- Create a resuable components for Clean process
- Javascript object focus is must

Progress

July 2021

- Push inside the array and stored it DONE
- loop array and create function that display the constructor
- Remove the stored value do it in dynamic way not in static way
- myLibrary.join('<br>') is for testing only find another way that's clean than that

August 2021

- Modal Design -- DONE
- Apply Javascript DOM to modal -- DONE
- Get values of input text in Javascript a). Pages and Complete Value must be restrict to numbers only and will error if string input -- DONE b). Validation wouldn't submit because of the null value or wrong input -- DONE c). Each Input Text Must have UI error Inside or upperside of Text -- DONE d). Change alert validation into text error message -- DONE e). Will not disappear the modal -- DONE f). Try to put loop the validation in order to work the validation process in modal -- NOT WORKING NOY APPLICABLE g). URGENT try to make the latest code and must be push array [{}, {}, {}] like this into object and selected(using dot notation or bracket notation) must be the last one / lastIndex of object therefore it will return to function the object that's return and add some if/else statement or maybe ternary isOpen and isClose function; -- FOCUSING ONLY PUSHING OBJECT INSIDE ARRAY h). New way is to be simple as possible instead of complicated validation make use of 'required' in input text and how to work on it and use 'type = `number` instead of text for pages'. -- DONE
- Modal animation must be excellent -- DONE another link is web dev simplified using modal animation
- Try to apply (width: clamp();) - link will fireship io modal
- Create new Object method outside the main objects in order to use it dynamically change book .info() method
- And post the values of javascript in console log as testing
- You Got this

September - October 2021 TODO :: { 1.) Book object must be post into box model in body -- DONE. 2.) Method info() must dynamic added to the objects Book automatically whenever it push inside the database -- NOT WISE. 3.) Use for loop to the addBookLibrary in order to iterate the value and name a function for it -- DONE. 4.) Data value from modal must be send to database of Book object. 5.) Try to implement if and else for pushing new array inside myLibrary and in order to post and display it. }

BONUS :: { 1.) Animation of modal must be presentable 2.) in box css must try to use 'clamp()' }

SOLVE :: {

Problems ::
1.) Problem is we can't iterate array of objects with 'Book' objects it's hindrance the object to manipulate.
2.) Find a way to solve no.1

Problems 2::
1.) Duplication array make sure no duplicate.

Solution ::
1.) Must try loop using FOR EACH || FOR IN in order to post the value of New Objects. 2.) To avoid the Book objects

Solution 2 ::
1.) Transform to a new array use map 2.) Then use for loop WORKING

}

SOLVE :: {
Problems ::
1.) if not include inside function scope it will not appear inside array. 2.) if included inside function scope it will appear inside array.

Solution ::
1.) remove it from outside make it block scope inside function scope but it will make error for Book().
2.) find a solution google.
3.) investigate the compile working on getting data.
4.) while other book it not working.
5.) if using prompt it's working and if using .value not working.
}

November Progress
SOLVE :: {

Problems::
1.) Duplicating array from submit button whenever submit.
2.) Repeating codes for For Loop in order to display.
3.) If using function and the result is boolean it will not allow to enter another value again.
4.) Function only works once find a solution for that.
5.) Wrong approach for includes it's always equal to true make it specific.
6.) Using localStorage refresh makes clear the display but it has data in localStorage

Solution::
1.) Declare only last index array in newLibrary. WORKING
2.) Try to use includes to check if present in array.
3.) Make function reusable than only once work.
4.) Try to use pure function where is will push inside the array will not affect the outside scope.
5.) Try to change the form html side.
6.) Check the addNewBook() what happened whenever executing new vals.
7.) Remove empty object values in AddNewBook() whenever the code execute therefore no blank.

}

December 2021 - Jan 2022 Progress
SOLVE:: {

- Transfering from array to localStorage
- Create delete Button
- Create read status button
- Responsive

Problem & Solution::
1.) using filter method delete button is working DONE
2.) auto update the view if someone deleted DONE
3.) Yes and No button for read. DONE
4.) Clicking the button will update.

}

    /*
    	- Array of Object still overwritten whenever refresh
    	- Look the at google history for information and reference
    	- getItem before setItem first but error will show up in dataLib[i].complete
    	- Try to remove storeLib.push instead
    	- Replace it will getStore()
    	- The answer is concat because it won't mutate the original array
    	- The problem not is lastArr which one of them will slice?
    	- Solution placing lastArr is problem and setup async in bookpost
    */
