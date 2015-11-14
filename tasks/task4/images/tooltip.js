dom = (document.getElementById) ? true : false;
nn4 = (document.layers) ? true : false;
ie = (document.all) ? true : false;
ie4 = ie && !dom;
function empty(){}
var stdMouseX = -1, stdMouseY = -1;
var MouseMoved = 0;
var hint="";
var MouseMove = empty;
var Init = empty;
var Margins=2;

if(nn4) document.captureEvents(Event.MOUSEMOVE); 
document.onmousemove = stdMouseMove; 

function stdMouseMove(e)
{
	stdMouseX = (nn4) ? (e.pageX):(event.x + document.body.scrollLeft);
	stdMouseY = (nn4) ? (e.pageY):(event.y + document.body.scrollTop);
	MouseMoved++;
	MouseMove(e);
	HintMouseMove();
}


function HintMouseMove()
{
	if(hint)moveElem(hint, Margins, stdMouseY+10);
}

function showElem(elemId) {
if (dom) document.getElementById(elemId).style.visibility = "visible";
	else if (ie4) document.all[elemId].style.visibility = "visible";
		else if (nn4) document.layers[elemId].visibility = "show";
}

function hideElem(elemId) {
if (dom) document.getElementById(elemId).style.visibility = "hidden";
	else if (ie4) document.all[elemId].style.visibility = "hidden";
		else if (nn4) document.layers[elemId].visibility = "hide";
}

function moveElem(idname,x,y)
{
if (dom)
	with(eval(idname)){
		style.left = x;
		style.top = y;
	}
else if(nn4){
		document.layers[idname].left=x;
		document.layers[idname].top=y;
	}
}

function OverIm(id)
{
	if(hint)hideElem(hint);
	hint=id;
	// moveElem(hint, stdMouseX+10, stdMouseY+10);
	moveElem(hint, Margins, stdMouseY+10);
	showElem(hint);
}

function OutIm()
{
	hideElem(hint);
	hint="";
}

