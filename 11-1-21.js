//paragraph er color add remove kora button er sahajje

var paraVar = document.querySelector("#paraId");
/*
function addStyle(){
    paraVar.style.color = "red";
    paraVar.style.fontSize = "3rem";
    paraVar.style.fontweight = "bold";

}
*/
/*
function addStyle(){
    paraVar.classList.add("para-style");
}

function removeStyle(){
    paraVar.classList.remove("para-style");
}
function nextPage(){
    location.href="next.html";
}*/



/*
//add event listener, html a onclick use korbo na..btn a click korle direct js a jabe 
document.querySelector("button").addEventListener("click", listenerfucntion);
function listenerfucntion(){
    alert("Hello");
}


document.querySelector("button").addEventListener("mouseover", function listenerfucntion(){
    alert("Hello mouseover")
});


document.querySelector("button").addEventListener("dblclick", fucntion(){
    document.write("Hello from anonymous function");
});

*/


/*
//without array
document.querySelectorAll(".myButton")[0].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked";
})*/



/*
var len = document.querySelectorAll(".myButton").length;
for(var i=0; i<len; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked";
    })
}*/



/*

//map keyword
var numbers = [11, 10, 1, 9, 6, 8];
document.write("<br/> Map use: <br/>");
var squareNumbers = numbers.map(function(x){
    return x*x;
})
document.write(squareNumbers + "<br/>");



//filter

document.write("<br/> filter use: <br/>");
var numbers_filter = [1, 21, 31, 41, 67, 97];
var filterednumbers  = numbers_filter.filter(function(x){
    return x>20 && x<40;
})
document.write(filterednumbers + "<br/>");

//arrow fucntion

const display = () => {
    document.write("<br/> Hello from arrow function");
    }
display();
function abc(){
    return "hello with retrn keyworkd" + "<br/>";
}
document.write(abc());


//without return keyword
//but if use retun then use "{return....}"

var display2 = () => "Hellow without return keyword";
document.write("<br/>" + display2() + "<br/>");


//arrow, map, filter
students = [
    {
        id : 1,
        name : "karim",
        cgpa : 3.67
    },
    {
        id : 2,
        name : "rahim",
        cgpa : 4.00
    }
];
//one way
function showStudnetNames(){
    return students.filter(function(x){
        return x.cgpa >3.67
    }).map(function(y){
        return y.name;
    });
}
document.write("<br/>" + showStudnetNames() + "<br/>");

//another

const showStudnetNameswithArrow = () => students.filter((x) =>
x.cgpa >3.67).map((y) => y.name);
document.write("<br/>" + showStudnetNameswithArrow() + "<br/>");
*/


/*
//event object
console.clear();
console.log(window);

const input = document.querySelector("input");
input.addEventListener("change", changeHandler);
*/



/*
//checkbox
const programs = document.querySelectorAll("input[name=program]");
console.log(programs);

Array.from(programs).map((proram) =>{
    program.addEventListener("change", programHandler);
});
function programHandler(e){
    console.log("checked");
    if(e.target.checked){
        console.log(e.target.value);
        console.console.log(e.target.required);
     }
}
*/


//select
const selectDivision = document.querySelector("#division");
console.log(selectDivision);
selectDivision.addEventListener("change", divisionHandler);

function divisionHandler(e){
    console.log("selected");
    console.log(e.target.value);
}