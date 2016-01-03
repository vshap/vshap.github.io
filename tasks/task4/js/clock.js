/**
 * [ShowTime description]
 */
function ShowTime () {
	nowtime = new Date();

	if (nowtime.getHours() > 9) {
		var nowtimeHours = nowtime.getHours();
	} else {
		var nowtimeHours = '0' + nowtime.getHours();
	}

	if (nowtime.getMinutes() > 9) {
		var nowtimeMinutes = nowtime.getMinutes();
	} else {
		var nowtimeMinutes = '0' + nowtime.getMinutes();
	}

	if (nowtime.getSeconds() > 9) {
		var nowtimeSeconds = nowtime.getSeconds();
	} else {
		var nowtimeSeconds = '0' + nowtime.getSeconds();
	}

	var TimeString = nowtimeHours + ':' + nowtimeMinutes + ':' + nowtimeSeconds;
	document.getElementById('ShowTime').innerHTML = TimeString;
	setTimeout("ShowTime()", 1000);
}

//ShowTime();