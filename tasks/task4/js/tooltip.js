/**
 * [dom description]
 * @type {[type]}
 */
dom = (document.getElementById) ? true : false;
ie = (document.all) ? true : false;

function empty() {

}

var stdMouseX = -1, stdMouseY = -1;
var MouseMoved = 0;
var hint = "";
var MouseMove = empty;
var Init = empty;
var Margins = 2;

/**
 * [stdMouseMove description]
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function stdMouseMove(e) {
	stdMouseX = (event.x + document.body.scrollLeft);
	stdMouseY = (event.y + document.body.scrollTop);
	MouseMoved++;
	MouseMove(e);
	HintMouseMove();
}

/**
 * [HintMouseMove description]
 */
function HintMouseMove()
{
	if (hint) moveElem(hint, Margins, stdMouseY + 10);
}

/**
 * [showElem description]
 * @param  {[type]} elemId [description]
 * @return {[type]}        [description]
 */
function showElem(elemId) {
	if (dom) document.getElementById(elemId).style.visibility = "visible";
}

/**
 * [hideElem description]
 * @param  {[type]} elemId [description]
 * @return {[type]}        [description]
 */
function hideElem(elemId) {
	if (dom) document.getElementById(elemId).style.visibility = "hidden";
}

/**
 * [moveElem description]
 * @param  {[type]} idname [description]
 * @param  {[type]} x      [description]
 * @param  {[type]} y      [description]
 * @return {[type]}        [description]
 */
function moveElem(idname, x, y) {
	if (dom)
		with (eval(idname)) {
			style.left = x;
			style.top = y;
		}
}

/**
 * [OverIm description]
 * @param {[type]} id [description]
 */
function OverIm(id) {
	if (hint) hideElem(hint);
	hint = id;
	// moveElem(hint, stdMouseX+10, stdMouseY+10);
	// moveElem(hint, Margins, stdMouseY + 10);
	showElem(hint);
}

/**
 * [OutIm description]
 */
function OutIm() {
	hideElem(hint);
	hint = "";
}