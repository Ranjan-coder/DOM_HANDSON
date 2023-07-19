var a = document.getElementsByTagName("h1")
a[0].innerText="THis is H1 tag"
console.log(a);

var b = document.getElementsByClassName("box")
b[0].innerText="THis is class box element"


function changehallo(){
    var c = document.getElementById("change_hallo")
    c.innerText = "Hello World"
}

function welcometoelevation(){
    var d = document.getElementById("change_hallo_to_elevation")
    d.innerText = "Welcome to Elevation academy"
}

var e = document.getElementsByTagName("h3")
e[0].setAttribute("id", "heading")
e[0].style.color = "red";

function change(){
    const f = document.getElementById("box")

    if (f.style.flexDirection ==='row' ||f.style.flexDirection === undefined){
        f.style.flexDirection = 'column';
    }
    else {
        f.style.flexDirection = 'row';
    }

}


const g = new Date();
let text = g.toLocaleTimeString();
document.getElementById("timeliteral").innerHTML = text;