const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];

const h1 = document.querySelector('h1');
const changeColor = function(){
	h1.style.color = this.style.backgroundColor;
}

const container = document.querySelector('#boxes');
for(let color of colors){
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('mouseover', changeColor);
}

