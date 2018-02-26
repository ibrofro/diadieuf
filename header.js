
	function hideShow(sub_elem){
		// This code hide/show the cliqued menu button 	
		var sel_style=getComputedStyle(sub_elem).display;
		if (sel_style=='none') {
			sub_elem.style.display='block';
		}
		else {
			sub_elem.style.display='none';
		}

		// if the menu button is clicked 
		// this code gonna retrieve all elements excepted the 
		// the current one clicked.
		var sel_hideshow_class=document.getElementsByClassName('hideshowclass');
		for (var i = 0; i < sel_hideshow_class.length; i++) {
			if (sel_hideshow_class[i] !== sub_elem) {
				sel_hideshow_class[i].style.display='none';
			}	
		}
	}

	// function Delete(array) {
	// 	if (typeof(array) === "object" && array[0] !== undefined) {
	// 		var divs = [];
	// 		var classes = [];
	// 		for (var i = 0; i < array.length; i++) {
	// 			if(array[i].charAt(0) === "#" || array[i].charAt(0) === '.')
	// 			{ 
	// 			array[i].style.display='none';
	// 		} else{
	// 			throw new Error('Sorry invalid selectot : '+array[i]);
	// 		}
	// 		}
	// 	} else {
	// 		throw new Error("Sorry this is not an Array");
	// 	}
	// }
	//These selections select the buttons .
	var sel_profil=document.getElementsByClassName('profil')[0];
	var sel_message=document.getElementsByClassName('message')[0];
	var sel_notification=document.getElementsByClassName('notification')[0];
	var sel_retrouver=document.getElementsByClassName('retrouver')[0];
	var sel_menu_responsive=document.getElementsByClassName('menu_responsive')[0];
	//These selections select the sub_menus .
	var sel_sub_profil=document.getElementsByClassName('sub_profil')[0];
	var sel_sub_received_message=document.getElementsByClassName('sub_received_message')[0];
	var sel_sub_notification=document.getElementsByClassName('sub_notification')[0];
	var sel_sub_retrouver=document.getElementsByClassName('sub_retrouver')[0];
	var sel_sub_menu_responsive=document.getElementsByClassName('sub_menu_responsive')[0];
	//Other Selections
	var sel_close_icon_message=document.getElementsByClassName('close_icon_responsive_message')[0];
	var sel_close_icon_notification=document.getElementsByClassName('close_icon_responsive_notification')[0];
	var sel_close_icon_tabs=document.getElementsByClassName('close_icon_responsive_tabs')[0];
	var sel_close_icon_sub_retrouver = document.getElementsByClassName('close_icon_sub_retrouver')[0];
	var sel_close_icon_sub_profil = document.getElementsByClassName('close_icon_sub_profil')[0];
	//Avoid bubbling on the elements 
	sel_profil.onclick=function (e) {
		e.stopPropagation();
		hideShow(sel_sub_profil);
	};
	sel_message.onclick=function (e) {
		e.stopPropagation();
		hideShow(sel_sub_received_message);
	};
	sel_notification.onclick=function (e) {
		e.stopPropagation();
		hideShow(sel_sub_notification);
	};
	sel_retrouver.onclick=function (e) {
 		e.stopPropagation();
		hideShow(sel_sub_retrouver);
		//This anonymous function gonna place '.sub_retrouver' below the button '.retrouver'
		(function(){
			var x_retrouver=sel_retrouver.offsetLeft;
			var width_sub_retrouver=sel_sub_retrouver.offsetWidth;
			console.log(x_retrouver);
			console.log(width_sub_retrouver);
			sel_sub_retrouver.style.position='absolute';
  			sel_sub_retrouver.style.left=x_retrouver-85+'px';
			})();
	};//The end of sel_retrouver onclick event........

	sel_menu_responsive.onclick=function (e) {
		e.stopPropagation();
		hideShow(sel_sub_menu_responsive);
		//This anonymous function gonna place '.sel_menu_responsive' below the button '.menu_responsive'
		(function(){
			 var x_menu_responsive=sel_menu_responsive.offsetLeft;
			 var width_sub_menu_responsive=sel_sub_menu_responsive.offsetWidth;
			 // console.log(x_retrouver);
			 // console.log(width_sub_retrouver);
			 sel_sub_menu_responsive.style.position='absolute';
  			sel_sub_menu_responsive.style.left=0;
			})();
	};//The end of sel_menu_responsive onclick event........

	window.onresize=function (e) {
	//This anonymous function gonna place '.sub_retrouver' below the button '.retrouver'
		(function() {
			var x_retrouver=sel_retrouver.offsetLeft;
			var width_sub_retrouver=sel_sub_retrouver.offsetWidth;
			sel_sub_retrouver.style.position='absolute';
  			sel_sub_retrouver.style.left=x_retrouver-85+'px';
			})();
	};
	// hide_if_resize(sel_sub_profil,sel_sub_retrouver);
	// hide_if_resize(sel_sub_menu_responsive,'>',617);
	function hide_if_resize(elem,condition,width) {
		if (condition === '>') {
			if(window.innerWidth > width)
			{
				elem.style.display='none';
			}
		}
		if (condition === '<') {
			if (window.innerWidth < width)
			{
			elem.style.display='none';	
			}
		}
	}
	window.addEventListener('resize',function(){
		hide_if_resize(sel_sub_menu_responsive,'>',615);
	},false);

	window.addEventListener('resize',function(){
		hide_if_resize(sel_sub_retrouver,'<',615);
	},false);
	//hide all elements if the user click on document...
	document.onclick=function(e) {
		e = e || window.event;
		var sel_hideshow_class=document.getElementsByClassName('hideshowclass');
		for (var i = 0; i < sel_hideshow_class.length; i++) {
			sel_hideshow_class[i].style.display='none';
		}

	};

	// Stop the propagation of the click event handled by document on sub menus
	 sel_sub_profil.onclick=function(e) {
	 	e.stopPropagation();
	};
	sel_sub_received_message.onclick=function(e) {
	 	e.stopPropagation();
	};
	sel_sub_notification.onclick=function(e) {
	 	e.stopPropagation();
	};
	sel_sub_retrouver.onclick=function(e) {
	 	e.stopPropagation();
	};
	sel_sub_menu_responsive.onclick=function (e) {
		e.stopPropagation();
	};
	function close_sub_menu(sel_button,sub_elem) {
		sel_button.onclick=function() {
			sub_elem.style.display='none';
		};
	}
	close_sub_menu(sel_close_icon_message,sel_sub_received_message);
	close_sub_menu(sel_close_icon_notification,sel_sub_notification);
	close_sub_menu(sel_close_icon_tabs,sel_sub_menu_responsive);
	close_sub_menu(sel_close_icon_sub_retrouver,sel_sub_retrouver);
	close_sub_menu(sel_close_icon_sub_profil,sel_sub_profil);
	console.log(sel_message);
	console.log(sel_sub_received_message);
	

