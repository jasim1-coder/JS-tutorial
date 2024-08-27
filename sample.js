// document.write("wassup maaaan");
// alert("hey keep dooing");

// string
// number
// Boolean
// Constant=const
// undefined
//;

// var pi = "joe";

// document.write("<br>");
// document.write(pi);

// document.write("<br>");

// document.write( typeof pi);

var a = 15;
var b = 3;

document.write(a + b);
document.write("<br>");

document.write(a - b);
document.write("<br>");

document.write(a * b);
document.write("<br>");

document.write(a / b);
document.write("<br>");

document.write(a ** 6)
document.write("<br>");

b=2;
document.write(a % b);
document.write("<br>");


a++;
document.write(a);
document.write("<br>");

a--;
document.write(a);
document.write("<br>");
var a=-5;
if (a > 0){
document.write("A is positive num");
}
else if(a < 0){
    document.write("A is negative num");
}
else{
    document.write("A is zero");

}
document.write("<br>");

var a = "B";
switch(a){
    case"A":
    document.write("apple");
    break;
    case"B":
    document.write("Banana");
    break;
    case"C":
    document.write("cat");
    break;
    default:
    document.write("invalid character");
    break;

}

document.write("<br>");
for(var a=1;  a <= 10;     a += 1)
    {
    document.write(a + "<br>");
}

var a = 10;
while(a>=0){
    document.write(a + "<br>");
    a--;
}

var a =6;
do{
    document.write(a + "<br>");
    a--;
}while(a>=1)


    document.write(a + "<br>");

function sum(n1,n2){
    document.write("Total sum = " + (n1 + n2));
}
sum(1,9);
document.write( "<br>");

function summ(n1,n2){
    return ("Total sum = " + (n1 + n2));
}
var a = summ(1,3);
document.write(a);
document.write( "<br>");

var numbers = [1,5,4,3,6,7,33,44,56,773,333333];
numbers.sort(function(a,b){return a-b});
var l = numbers.length;
document.write("The second largest element in the array is = " + numbers[ l-2 ])
// var l = numbers.length;
// document.write("the "+numbers[l])


var fruits = ["apples","mango","kiwi","berry","cherry"]
// fruits[5] = "orange";
fruits.push("grapes","pineapple")
//to delete the first element in the array
fruits.shift();
//to delete the last element in the array
fruits.pop();
//to delete the element in the (nth = 3, 2 = next 2 elements in the index of an array 

var l = fruits.length;
document.write( "<br>");
for(i=0; i<l; i++){
    document.write(fruits[i] + "<br>");
}


var text = "hey buddy how are you";
var text2 = " wassup broooo";
document.write(text.charAt(2)+ "<br>");
document.write(text.concat(text2)+ "<br>");
document.write(text.toLowerCase()+ "<br>");
document.write(text.toUpperCase()+"<br>");
document.write(text.slice(4, 9)+ "<br>");

var k = 5.5;
document.write(Math.round(k));