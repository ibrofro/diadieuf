var selCategoriesButton = select('#categories_button');
selCategoriesButton = selCategoriesButton[0];
//-------------------------------------------------------------------------
// This Script is targeting the section 'Toutes les categories' only
// This Script retrieve the content of 'toutes les categories' when clicked.
// Finally it gives the content to categories.yourElem.
// More information on categories.js
var selTous = select('.tous');
selTous = selTous[0];
selTous.onclick = function (e) {
	alert("Tu viens de cliquer sur "+e.target.textContent);
	categories.yourElem.textContent = e.target.textContent;
	var selCategories = select('#categories_container');
			selCategories[0].style.display='none';
};
//-------------------------------------------------------------------------
selCategoriesButton.onclick = function (e) {
	e.stopPropagation();
	var selSearch = select('#search');
	categories.displayShow(selSearch[0]);
	
};

var selElem = select('#cat_but_text');
selElem = selElem[0];
categories.yourElem = selElem;
console.log(categories.yourElem);
categories.categoriesClicked();


