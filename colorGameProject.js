var boxes = document.querySelectorAll("div div");
//var colors=["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 0, 255)"];
var colors = generateColorArray(6);
var display_1 = document.querySelector("h1 span");
var span=document.querySelector("div span")
var pickedColor = pickColor();
display_1.innerText=pickedColor;
var number_of_squares =6;
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected")
	colors = generateColorArray(3);
	number_of_squares=3;
	pickedColor = pickColor();
	display_1.textContent = pickedColor;
	initializebackgroundColor();
	for(var i=3;i<boxes.length;i++){
		boxes[i].style.display = "none";
	}
})
hard.addEventListener("click",function(){
	hard.classList.add("selected")
	easy.classList.remove("selected")
	colors = generateColorArray(6);
	number_of_squares=6;
	pickedColor = pickColor();
	display_1.textContent = pickedColor;
	initializebackgroundColor();
	for(var i=3;i<boxes.length;i++){
		boxes[i].style.display = "block";
	}
})
document.querySelector("#button").addEventListener('click',function(){
	colors = generateColorArray(number_of_squares);
	pickedColor = pickColor();
	display_1.textContent=pickedColor;
	initializebackgroundColor();
	document.querySelector("h1").style.backgroundColor="steelblue";
	span.textContent ="";
	document.querySelector("#button").textContent="New Game"


})


initializebackgroundColor();

function changeColor(color){
	//now we will loop through eachh of the boxes that we have made and will change their color ~bhavesh
	for(var i=0;i<boxes.length;i++){
		boxes[i].style.backgroundColor=color;
	}
	document.querySelector("h1").style.backgroundColor=color;
}
function pickColor(){
	//what this funnction actually do is that it generates a number in between 0 to 1 (using Math.random) and then multiply it with colors.length and get the the range changed ~bhavesh
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateColorArray(num){
	//We will create an array and return it filled with random colors ~bhavesh
	var arr=[]
	for(var i=0;i<num;i++){
		var first = Math.floor(Math.random()*256)
		var second = Math.floor(Math.random()*256)
		var third = Math.floor(Math.random()*256)
		arr.push("rgb(" + first +", " +second + ", " + third + ")");

	}
	return arr;
}
function initializebackgroundColor(){
	for(var i=0;i<boxes.length;i++){
	//adding Colors To The Boxes~bhavesh
	boxes[i].style.backgroundColor=colors[i];
	//adding EventListener to Each Box~bhavesh
	boxes[i].addEventListener('click',function(){
		//grab picked Square~bhavesh	
		var clickedColor=this.style.backgroundColor;
		if(clickedColor === pickedColor){
			span.textContent="Correct!";
			changeColor(pickedColor);
			document.querySelector("#button").textContent="Play Again?"
		}
		else{
			this.style.backgroundColor="steelblue";
			span.textContent="Try Again";
		}
	})
}
}

