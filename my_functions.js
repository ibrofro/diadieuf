function err(mess) {
  throw new Error(mess);
}
/* Tiny Documentation for getClass and getId
 * Last update February 26, 2018. 15:03
 *-------------------------------------------
 * getClass and getId are built for select function in order to organise code and 
 * probably reuse it if needed.
 *---------------------------------------------------
 * getClass and getId will take 2 parameters a selector and a Array 
 * They both gonna select given element on the DOM and return an Array.
 * The returned Array is specified by the Select
 */
function getClass(completeSelector,tab) {
  var sel;
  if (arguments.length < 2 && Array.isArray(tab)) {
  	err("getClass must take 2 parameters, a valid Css class selector, and an array.");
  }
  if (typeof completeSelector === 'string' && completeSelector.slice(0,1) === '.') {
    var arg = completeSelector.slice(1);
    sel = document.getElementsByClassName(arg);
  } else {
    err("Unvalid Selector "+completeSelector+"must be a String and have to begin with '.'"); 
  }
  if (sel.length !== 0) {
    for (var i = 0; i < sel.length; i++) {
      tab.push(sel[i]);	  
    }
  } else {
    err("Unexist element '"+completeSelector+"' on the DOM.");
  }	
}
  
function getId(completeSelector,tab) {
  var sel;
  if (arguments.length < 2 && Array.isArray(tab)) {
  	err("getId must take 2 parameters, a valid Css id selector, and an array.");
  }
  if (typeof completeSelector === 'string' && completeSelector.slice(0,1) === '#') {
    var arg = completeSelector.slice(1);
    sel = document.getElementById(arg);
  } else {
    err("Unvalid Selector "+completeSelector+"must be a String and have to begin with '#'"); 
  }
  if (sel !== undefined && sel !== null) {
    tab.push(sel);	  
  } else {
    err("Unexist element '"+completeSelector+"' on the DOM.");
  }	
}
function select() {
 /* Verify if the arguments are not void
  * Verify if the arguments are Strings
  * Verify if the arguments are Valid Css Selectors.
  * Use getClass or getId to select the element.
  */ 
    // Verify if the arguments are not void
  if (arguments.length === 0) {
    err("No arguments passed.Specifie id or class selector in string format.");
  }
  // Verify if the arguments are Strings
  for (var i = 0; i < arguments.length; i++){
    if (typeof(arguments[i]) !== 'string' /*|| typeof(arguments[i] === undefined)*/) {
    	err("Unvalid argument '"+arguments[i]+"' only String allowed");
    }
  }
    // Verify if the arguments are Valid Css Selectors.
  for (var i = 0; i < arguments.length; i++) {
    var firstChar = arguments[i].slice(0,1);
    if (firstChar !== '#' && firstChar !== '.') {
      err("The Selector '"+arguments[i]+"' is not a valid Css Selector");
    }
  }

  var selected = [];
  for (var i = 0; i < arguments.length; i++) {
    var first = arguments[i].slice(0,1);
    if (first === '.') {
    	getClass(arguments[i],selected);
    } else {
    	getId(arguments[i],selected);
    }
  }
               
 return selected;
}
