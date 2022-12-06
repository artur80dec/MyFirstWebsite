
function counting()
{
	var now = new Date();
	
	var dzien = now.getDate();
	var miesiac = now.getMonth()+1;
	var rok = now.getFullYear();
	
	if ( miesiac == 1 ) miesiac = "stycznia";
	if ( miesiac == 2 ) miesiac = "lutego";
	if ( miesiac == 3 ) miesiac = "marca";
	if ( miesiac == 4 ) miesiac = "kwietnia";
	if ( miesiac == 5 ) miesiac = "maja";
	if ( miesiac == 6 ) miesiac = "czerwca";
	if ( miesiac == 7 ) miesiac = "lipca";
	if ( miesiac == 8 ) miesiac = "sierpnia";
	if ( miesiac == 9 ) miesiac = "września";
	if ( miesiac == 10 ) miesiac = "października";
	if ( miesiac == 11 ) miesiac = "listopada";
	if ( miesiac == 12 ) miesiac = "grudnia";
	
	var godzina = now.getHours();
	// if ( godzina < 10 ) godzina = "0"+godzina;
	var minuta = now.getMinutes();
	if ( minuta < 10 ) minuta = "0"+minuta ;
	var sekunda = now.getSeconds();
	if ( sekunda < 10 ) sekunda = "0"+sekunda;
	
	
	document.getElementById("part3").innerHTML = dzien + " " + miesiac + " " + rok + " " + godzina + ":" + minuta + ":" + sekunda;
	
	setTimeout("counting()",1000);
}

function bwpng1()
{
	// var bwpng1 = document.getElementById('tileone');

	document.getElementById('tileone').src="./images/html5bw.png";
}

function color1()
{
	// var color1 = document.getElementById('tileone');

	document.getElementById('tileone').src="./images/html5.png";
}

function bwpng2()
{
	// var bwpng1 = document.getElementById('tiletwo');

	document.getElementById('tiletwo').src="./images/css3bw.png";
}

function color2()
{
	// var color1 = document.getElementById('tiletwo');

	document.getElementById('tiletwo').src="./images/css3.png";
}

function bwpng3()
{
	// var bwpng3 = document.getElementById('tilethree');

	document.getElementById('tilethree').src="./images/JSbw.png";
}

function color3()
{
	// var color1 = document.getElementById('tilethree');

	document.getElementById('tilethree').src="./images/JS.png";
}