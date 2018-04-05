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
			selection[i-1].style.opacity = 0;
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
			selection[i+1].style.opacity = 0;
			selection[i+1].style.display = 'inline-block';
			i = 0;
		} 
	}
},

opacityFirst: function() {
	var selection = select('.item');
	var firstItem;
	for (var i = 0; i < selection.length; i++) {
		if (getComputedStyle(selection[i]).display === 'inline-block') {
			firstItem = selection[i];
			i = selection.length - 1;
		}
		if (firstItem) {
			function resetOpacity() {
				firstItem.style.opacity = 1;
			}
			resetOpacity();
		}
	}
},

opacityLast: function() {
	var selection = select('.item');
	var lastItem;
	for (var i = selection.length - 1; i > -1; i--) {
		if (getComputedStyle(selection[i]).display === 'inline-block') {
			lastItem = selection[i];
			i = 0;
		}
		if (lastItem) {
			function resetOpacity() {
				lastItem.style.opacity = 1;
			}
			resetOpacity();
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
		carousel.show(2);
	} else if (window.innerWidth <= 625) {
		carousel.hideAll();
		carousel.show(1);
	} else { 
		carousel.hideAll();
		carousel.show(4);
	}
	carousel.lastNumber();
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
			return true;

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
			return true;

		}
	}
},

lastNumber: function() {
	var selection = select('.item');
	var info;
	for (var i = selection.length - 1; i > -1; i--) {
		 if (window.getComputedStyle(selection[i]).display === 'inline-block') {
			var classs = selection[i].className;
			var classses = classs.split(' ');
			for (var i = 0; i < classses.length; i++) {
			 	if(parseInt(classses[i]) !== NaN) {
			 		info = classses[i];
			 	}
			}
			i=0;	 
		}	
	}		
	var selSpan = select('#number');
	selSpan = selSpan[0];
	selSpan.innerHTML = info;	
}

};//The end of the Namespace 'carousel'
carousel.init();
window.addEventListener('resize',function(){
	carousel.init();
	carousel.lastNumber();
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
		carousel.opacityLast();
		carousel.noneFirst();
		carousel.lastNumber();
		carousel.handleMargin();
		carousel.handleButton();
	}
}
function previous() {
	if (carousel.previousExist()) {
		carousel.inlineBlockFirst();
		carousel.opacityFirst();
		carousel.noneLast();
		carousel.lastNumber();
		carousel.handleMargin();
		carousel.handleButton();
	}
}
selButRight.onclick = function () {
	next();
};
selButLeft.onclick = function () {
	previous();
};
