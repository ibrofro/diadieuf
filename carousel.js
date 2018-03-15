var carousel = {

	handleMargin: function () {
		var selection = select('.item');
		var lastInlineBlock;
		for (var i = selection.length - 1; i > -1; i--) {
			if (getComputedStyle(selection[i]).display === 'inline-block') {
				selection[i].style.marginRight = 0+'px';
				lastInlineBlock = selection[i];
			 	if (selection[i-1]) {
			 		selection[i-1].style.marginRight = 18+'px';
			 	}
				i = 0;
			}	 
		}
	for (var o = selection.length - 1; o >= 0; o--) {
		if (getComputedStyle(selection[0]).display === 'inline-block' && selection[o] !== lastInlineBlock) {
			selection[o].style.marginRight = 18 + 'px';
		}			
	}
},

	/* show(number) is going to display inline-block items according to it's parameter  
	 * it performs it with croissant style, from 0 to number.
	 */		
 show: function(number) {
	if (typeof(number) === 'number' && number < 11 && number > 0) {
		var selection = select(".item");
		for (var i = 0; i < number; i++) {
			selection[i].style.display = 'inline-block';
		}	
	} else {
		err('Unvalid parameter');
	}
},

hideAll: function() {
	var selection = select(".item");
	for (var i = 0; i < selection.length; i++) {
		selection[i].style.display = 'none';
	}
},

/* handleButton() is going to display or hide a button.  
 * Hide left Button if the first item is displayed. If not show the left button.
 * hide right Button if the last item is displayed. If not show the right button.
 */	 	
handleButton: function() {
	var selection = select('.item');
	//-------For Left Button----------------
	var selButLeft = select('.button_left');
	if (selection[0].style.display === 'inline-block') {
		selButLeft[0].style.visibility = 'hidden';
	} else {
		selButLeft[0].style.visibility = 'visible';
	}
	//-------For Right Button----------------
	var selButRight = select('.button_right');
	if (selection[selection.length - 1].style.display === 'inline-block') {
		selButRight[0].style.visibility = 'hidden';
	} else {
		selButRight[0].style.visibility = 'visible';
	}
},

noneFirst: function() {
	var selection = select('.item');
	for (var i = 0 ; i < selection.length; i++) {
		if (getComputedStyle(selection[i]).display === 'inline-block') {
			selection[i].style.display = 'none';
			i = selection.length -1;
		}
	}
},

noneLast: function() {
	var selection = select('.item');
	for (var i = selection.length - 1; i > -1; i--) {
		if (getComputedStyle(selection[i]).display === 'inline-block') {
			selection[i].style.display = 'none';
			i = 0;
		}
	}
},

inlineBlockFirst: function() {
	var selection = select('.item');
	for (var i = 0 ; i < selection.length; i++) {
		if (getComputedStyle(selection[i]).display === 'inline-block' && selection[i] !== selection[0]) {
			selection[i-1].style.display = 'inline-block';
			i = selection.length - 1;
		}
	}
},

inlineBlockLast: function() {
	var selection = select('.item');
	for (var i = selection.length - 1 ; i > -1 ; i--) {
		if (getComputedStyle(selection[i]).display === 'inline-block' && selection[i] !==
				selection[selection.length - 1]) {
			selection[i+1].style.display = 'inline-block';
			i = 0;
		} 
	}
},

init: function() {
	//This function gonna display the correct number of items on the carousel.
	if (window.innerWidth <= 1025 && window.innerWidth > 835) {
		carousel.hideAll();
		carousel.show(3);
	} else if (window.innerWidth <= 835 && window.innerWidth > 625) {
		carousel.hideAll();
		carousel.show(2)
	} else if (window.innerWidth <= 625) {
		carousel.hideAll();
		carousel.show(1);
	} else { 
		carousel.hideAll();
		carousel.show(4);
	}
	carousel.handleButton();
	carousel.handleMargin();
},

nextExist: function() {
	var selection = select('.item');
	var sel = select('.item');
	var lastItem = sel.pop();
	for (var i = selection.length - 1; i > -1; i--) {
		if (getComputedStyle(selection[i]).display === 'inline-block' && selection[i] === lastItem) {
			return false;
		} else {
			return true;;

		}
	}
},

previousExist: function() {
	var selection = select('.item');
	var sel = select('.item');
	var firstItem = sel.shift();
	for (var i = 0; i < selection.length; i++) {
		if (getComputedStyle(selection[i]).display === 'inline-block' && selection[i] === firstItem) {
			return false;
		} else {
			return true;;

		}
	}
}

} //The end of the Namespace 'carousel'
carousel.init();
// window.onresize = function () {
// 	carousel.init();
// 	carousel.handleButton();
// 	carousel.handleMargin();
// }
window.addEventListener('resize',function(){
	carousel.init();
	carousel.handleButton();
	carousel.handleMargin();
},false);
var selButRight = select('.button_right');
var selButLeft = select('.button_left');
selButRight = selButRight[0];
selButLeft = selButLeft[0];
function next() {
	if (carousel.nextExist()) {
		carousel.inlineBlockLast();
		carousel.noneFirst();
		carousel.handleMargin();
		carousel.handleButton();
	}
}
function previous() {
	if (carousel.previousExist()) {
		carousel.inlineBlockFirst();
		carousel.noneLast();
		carousel.handleMargin();
		carousel.handleButton();
	}
}
selButRight.onclick = function () {
	next();
};
selButLeft.onclick = function () {
	previous();
}







// function deleteFirst(container,item) {
// 	var selContainer = select(container);
// 	var selItem = select(item);
// 	selContainer = selContainer[0];
// 	selItem = selItem[0];
// 	selContainer.removeChild(selItem);
// }
// function deleteLast(container,item) {
// 	var selContainer = select(container);
// 	var selItem = select(item);
// 	selContainer = selContainer[0];
// 	for (var i = selItem.length-1; i > -1; i--) {
// 		if(getComputedStyle(selItem[i]).display === 'inline-block'){
// 			selContainer.removeChild(selItem[i]);
// 			i = 0;
// 		}
// 	}
// }
// function lastImageSrc(container,item) {
// 	var selContainer = select(container);
// 	var selItem = select(item);
// 	selContainer = selContainer[0];
// 	for (var i = selItem.length-1; i > -1; i--) {
// 		if(getComputedStyle(selItem[i]).display === 'inline-block'){
// 			var childs = selItem[i].childNodes;
// 			console.log(childs);
// 			for (var o = 0; o < childs.length; o++) {
// 				console.log(childs[o].className);
// 				console.log(childs[o].nextSibling.nodeName);
// 				if (childs[o].className === 'img_container' && childs[o].firstChild.nodeName === 'IMG') {
// 					var src = childs[o].firstChild.getAttribute('src');
// 					for (var p = 1; p < 11; p++) {
// 						if (src.indexOf(p) !== -1) {
// 							return p;
// 						}
// 					}
					
// 					o = childs.length-1;
// 				}
// 			}

// 			i = 0;
// 		}
// 	}
	
// }

// // deleteLast('#item_carousel_container','.item');
// function createItem(categorie,srcNumber,price,name,view) {
// 	var itemBigContainer = document.createElement('div');
// 	itemBigContainer.className = 'item';

// 	var categorieContainer = document.createElement('div');
// 	categorieContainer.className = 'categorie';
// 	categorieContainer.innerHTML = categorie;

// 	var imgContainer = document.createElement('div');
// 	imgContainer.className = 'img_container';
// 	var img = document.createElement('img');
// 	img.className = 'carousel_image';
// 	img.setAttribute('src','carousel_image/'+srcNumber+'.jpg');
// 	imgContainer.appendChild(img);

// 	var priceContainer = document.createElement('div');
// 	priceContainer.className = 'price';
// 	priceContainer.innerHTML = price;

// 	var nameContainer = document.createElement('div');
// 	nameContainer.className = 'name_carousel';
// 	nameContainer.innerHTML = name;

// 	var viewContainer = document.createElement('div');
// 	viewContainer.className = 'view';
// 	viewContainer.innerHTML = view;

// 	itemBigContainer.appendChild(categorieContainer);
// 	itemBigContainer.appendChild(imgContainer);
// 	itemBigContainer.appendChild(priceContainer); 
// 	itemBigContainer.appendChild(nameContainer);
// 	itemBigContainer.appendChild(viewContainer);
//   return itemBigContainer;
// }

// function next() {
// 	deleteFirst('#item_carousel_container','.item');
// 	var selItem = select('.item');
// 	var src = lastImageSrc('#item_carousel_container','.item');
// 	if (src > 3) {
// 		var item = createItem('Alimentation',src+1,'8000','Abdou Sarr',src+1);
// 		item.style.display = 'inline-block';
// 		var selContainer = select('#item_carousel_container');
// 		selContainer = selContainer[0];
// 		console.log(item);
// 		selContainer.appendChild(item);
// 	}
// 	// if (src < 5) {
// 	// 	deleteFirst('#item_carousel_container','.item');

// 	// 	for (var i = selItem.length-1; i > -1; i--) {
// 	// 		if(getComputedStyle(selItem[i]).display === 'inline-block'){
// 	// 			selItem[i+1].style.display = 'inline-block';
// 	// 			i = 0;
// 	// 		}
// 	// 	}

// 	// }	
// }

// var selButRight = select('.button_right');
// var selButRight = selButRight[0];
// selButRight.onclick = function () {
// 	next();
// };
