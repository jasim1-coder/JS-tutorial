var a = document.getElementById("head1");
a.innerHTML = "learn javascript";
a.style.color="blue";



var b = document.getElementsByClassName("head");
b[0].innerHTML = "hello jasim";
b[0].style.color = "gree";
console.log(b);

var c = document.getElementsByTagName("p")
c[0].innerHTML = "changed pa ragraph";
var l = document.getElementsByName("text1");
console.log(l);
l[0].value = "Name";

var a = document.querySelectorAll("h1");
a[1].innerHTML = "Learn Java";
a[0].style.color = "blue";

var a = document.querySelectorAll(".hclass");
a[1].innerHTML = "Learn Java";
a[0].style.color = "blue";

var a = document.querySelectorAll("#st1");
a[0].innerHTML="Nee eethada";
var a = document.querySelector("#st1")
a.innerHTML="EVIDE MOOOONE"

var heading = document.createElement("h1");
function create(){
    heading.innerHTML = "Hello worldddddddd";
    document.body.appendChild(heading);
}

function delet(){
    heading.remove();
}

//    class creation

class employee {
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary
    }
    getsalary()
        {document.write("<br>" + "The salary of Mr "+this.name+ " is "+this.salary);
    }
}

let e1 = new employee("jasim", "engineer",5000);
document.write(e1.name)

e1.getsalary();


//child class

class manager extends employee{

}
let m1 = new manager ("binu","swe",50000)

m1.getsalary();

console.log(m1);

