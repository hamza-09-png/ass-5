function sum(num1,num2)
{ return num1+num2}
function sub(num1,num2)
{ return num1-num2}
function mult(num1,num2)
{ return num1*num2}
function divide(num1,num2)
{ return num1/num2}

var choice = prompt("Enter the operand");
var num1=prompt("Enter first number");
var num2=prompt("Enter second number");
if(choice=="+")
{alert(sum(num1,num2))}
else if(choice=="-")
{alert(sub(num1,num2))}
else if(choice=="*")
{alert(mult(num1,num2))}
else if(choice=="/")
{alert(divide(num1,num2))}
