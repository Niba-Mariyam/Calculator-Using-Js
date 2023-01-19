let num1=document.getElementById('num1');
let num2=document.getElementById('num2');
let result=document.getElementById('result');
let add=document.getElementById('add');
let sub=document.getElementById('sub');
let prod=document.getElementById('prod');
let divi=document.getElementById('divi');
 
add.addEventListener('click',addition);

function addition(event)
{

	event.preventDefault();
	result.value=Number(0);
	console.log(result.value)
	let answer=Number(num1.value)+Number(num2.value);
	console.log(answer);//30
	// result.value=answer;
	result.innerText=answer
}
sub.addEventListener('click',subtraction);

function subtraction(event)
{

	event.preventDefault();
	result.value=Number(0);
	console.log(result.value)
	let answer=Number(num1.value)-Number(num2.value);
	console.log(answer);
	result.innerText=answer
}

prod.addEventListener('click',multiplication);

function multiplication(event)
{

	event.preventDefault();
	result.value=Number(0);
	console.log(result.value)
	let answer=Number(num1.value)*Number(num2.value);
	console.log(answer);
	result.innerText=answer
}

divi.addEventListener('click',division);

function division(event)
{

	event.preventDefault();
	result.value=Number(0);
	console.log(result.value)
	let answer=Number(num1.value)/Number(num2.value);
	console.log(answer);
	result.innerText=answer
}
