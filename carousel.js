function deleteFirst(container,item) {
	var selContainer = select(container);
	var selItem = select(item);
	selContainer = selContainer[0];
	selItem = selItem[0];
	selContainer.removeChild(selItem);
}
function deleteLast(container,item) {
	var selContainer = select(container);
	var selItem = select(item);
	selContainer = selContainer[0];
	for (var i = selItem.length-1; i > -1; i--) {
		if(getComputedStyle(selItem[i]).display === 'inline-block'){
			selContainer.removeChild(selItem[i]);
			i = 0;
		}
	}
}
function lastImageSrc(container,item) {
	var selContainer = select(container);
	var selItem = select(item);
	selContainer = selContainer[0];
	for (var i = selItem.length-1; i > -1; i--) {
		if(getComputedStyle(selItem[i]).display === 'inline-block'){
			var childs = selItem[i].childNodes;
			console.log(childs);
			for (var o = 0; o < childs.length; o++) {
				console.log(childs[o].className);
				console.log(childs[o].nextSibling.nodeName);
				if (childs[o].className === 'img_container' && childs[o].firstChild.nodeName === 'IMG') {
					var src = childs[o].firstChild.getAttribute('src');
					for (var p = 1; p < 11; p++) {
						if (src.indexOf(p) !== -1) {
							return p;
						}
					}
					
					o = childs.length-1;
				}
			}

			i = 0;
		}
	}
	
}

// deleteLast('#item_carousel_container','.item');
function createItem(categorie,srcNumber,price,name,view) {
	var itemBigContainer = document.createElement('div');
	itemBigContainer.className = 'item';

	var categorieContainer = document.createElement('div');
	categorieContainer.className = 'categorie';
	categorieContainer.innerHTML = categorie;

	var imgContainer = document.createElement('div');
	imgContainer.className = 'img_container';
	var img = document.createElement('img');
	img.className = 'carousel_image';
	img.setAttribute('src','carousel_image/'+srcNumber+'.jpg');
	imgContainer.appendChild(img);

	var priceContainer = document.createElement('div');
	priceContainer.className = 'price';
	priceContainer.innerHTML = price;

	var nameContainer = document.createElement('div');
	nameContainer.className = 'name_carousel';
	nameContainer.innerHTML = name;

	var viewContainer = document.createElement('div');
	viewContainer.className = 'view';
	viewContainer.innerHTML = view;

	itemBigContainer.appendChild(categorieContainer);
	itemBigContainer.appendChild(imgContainer);
	itemBigContainer.appendChild(priceContainer); 
	itemBigContainer.appendChild(nameContainer);
	itemBigContainer.appendChild(viewContainer);
  return itemBigContainer;
}

function next() {
	deleteFirst('#item_carousel_container','.item');
	var selItem = select('.item');
	var src = lastImageSrc('#item_carousel_container','.item');
	if (src > 3) {
		var item = createItem('Alimentation',src+1,'8000','Abdou Sarr',src+1);
		item.style.display = 'inline-block';
		var selContainer = select('#item_carousel_container');
		selContainer = selContainer[0];
		console.log(item);
		selContainer.appendChild(item);
	}
	// if (src < 5) {
	// 	deleteFirst('#item_carousel_container','.item');

	// 	for (var i = selItem.length-1; i > -1; i--) {
	// 		if(getComputedStyle(selItem[i]).display === 'inline-block'){
	// 			selItem[i+1].style.display = 'inline-block';
	// 			i = 0;
	// 		}
	// 	}

	// }	
}

var selButRight = select('.button_right');
var selButRight = selButRight[0];
selButRight.onclick = function () {
	next();
};