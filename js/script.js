
document.getElementById('home').setAttribute("class","active");

function about()
{
	document.getElementById('aboutme').setAttribute("class","active");
	document.getElementById('home').removeAttribute("class");
	document.getElementById('myskills').removeAttribute("class");
	document.getElementById('contactme').removeAttribute("class");
}

function home()
{
	document.getElementById('aboutme').removeAttribute("class");
	document.getElementById('home').setAttribute("class","active");
	document.getElementById('myskills').removeAttribute("class");
	document.getElementById('contactme').removeAttribute("class");
}

function skills()
{
	document.getElementById('aboutme').removeAttribute("class");
	document.getElementById('home').removeAttribute("class");
	document.getElementById('myskills').setAttribute("class","active");
	document.getElementById('contactme').removeAttribute("class");
}

function contact()
{
	document.getElementById('aboutme').removeAttribute("class");
	document.getElementById('home').removeAttribute("class");
	document.getElementById('myskills').removeAttribute("class");
	document.getElementById('contactme').setAttribute("class","active");
}