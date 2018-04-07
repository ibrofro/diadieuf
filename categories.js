var categories = {
	close: function () {
		var selCategories = select('#categories_container');
		selCategories = selCategories[0];
		selCategories.style.display = 'none';
	},

	displayShow: function (element) {
		var selCategories = select('#categories_container');
		selCategories = selCategories[0];
		var displayState = selCategories.style.display;
		if (displayState === '' || displayState === 'none') {
			element.appendChild(selCategories);
			selCategories.style.boxShadow = 'none';
			selCategories.style.display = 'block';
		}
		else {
			selCategories.style.display = 'none';
		}
	},

	selCategoriesContainer: function () {
	var selCategories = select('#categories_container');
	childs = selCategories[0].childNodes;
	var groupContainer = [];
	for (var i = 0; i < childs.length; i++) {
		if (childs[i].nodeName === 'DIV') {
			if (childs[i].className.indexOf(' ') !== -1) {
				var classes = childs[i].className.split(' ');
				for (var p = 0; p < classes.length; p++) {
					if (classes[p] === 'group_container') {
						groupContainer.push(childs[i]);
						p = classes.length - 1;
					}
				}
			}		
		}
	}
return groupContainer;
},

selAllCategories: function(callback) {
	var groups = callback();
	var allCategories = [];
	for (var i = 0; i < groups.length; i++) {
		for (var k = 0; k < groups[i].childNodes.length; k++) {
			var current = groups[i].childNodes[k];
			allCategories.push(current); 
		}		
	}
	return allCategories;	
},

yourElem:null,

categoriesClicked: function() {
	res = this.selAllCategories(this.selCategoriesContainer);
	var categoriesNeeded = [];
	for (var i = 0; i < res.length; i++) {
		if (res[i].nodeName === 'DIV') {
			categoriesNeeded.push(res[i]);
		}
	}
	// return alert(categoriesNeeded.length);
	for (var y = 0; y < categoriesNeeded.length; y++) {
		categoriesNeeded[y].onclick = function (e) {
			categories.yourElem.textContent = e.target.textContent;
			var selCategories = select('#categories_container');
			selCategories[0].style.display='none';
		};
	}
}

};//The end of the namespace...

var selCloseIcon = select('.close_categories');
selCloseIcon[0].onclick = function () {
	categories.close();
};

document.onclick=function(e) {
		e = e || window.event;
		var selCategories = select('#categories_container');
			selCategories[0].style.display='none';
	};
	var selCategories = select('#categories_container');
			selCategories[0].onclick = function (e) {
				e.stopPropagation();
			};