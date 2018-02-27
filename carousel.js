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
	document.body.appendChild(itemBigContainer);    
}
