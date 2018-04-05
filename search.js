var selCategoriesButton = select('#categories_button');
selCategoriesButton = selCategoriesButton[0];
selCategoriesButton.onclick = function () {
	var selSearch = select('#search');
	categories.displayShow(selSearch[0]);
	// categories.choice();
};