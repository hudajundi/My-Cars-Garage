'use strict';

console.log('i am here ');


// connect eith HTML (DOM):
var form = document.getElementById('theForm');
var container = document.getElementById ('theTable');
var table = document.createElement('table');
container.appendChild(table); 

// global var: 
var everything = [];
var min = 7000;
var max = 10000;

// constructor: 

function Car (name , year, country) {
    this.name = name;
    this.year= year;
    this.country=country;

    this.price=[];

    this.getRandomPrice();

    // this.getTotal();

    everything.push(this)
}


// the function: 
Car.prototype.getRandomPrice = function(){
   var randomPrice= Math.floor(Math.random() * (max - min + 1) ) + min;
    this.price.push(randomPrice);
}


// the form : 

form.addEventListener('submit', action);
function action (act) {
    act.preventDefault();


    var newName= act.target.name.value;
    var newYear= act.target.year.value;
    var newCountry = act.target.country.value; 

    var newCar = new Car (newName , newYear, newCountry);

    setStorage();
    getStorage();
}

///// The table :
// Table header : 

function tableHeader (){
    var trHead= document.createElement('tr');
    table.appendChild(trHead);


    var tdHead1= document.createElement('td');
    trHead.appendChild(tdHead1);
    tdHead1.textContent='Car Model '

    var tdHead2 = document.createElement('td');
    trHead.appendChild(tdHead2);
    tdHead2.textContent= 'Model Year';

    var tdHead3 = document.createElement('td');
    trHead.appendChild(tdHead3);
    tdHead3.textContent= ' Price ';

    var tdHead4 = document.createElement('td');
    trHead.appendChild(tdHead4);
    tdHead4.textContent='Manefacturer';
}


// Table body : 
function tableData (){
    for ( var i=0 ; i < everything.length ; i++) {

        var trBody = document.createElement('tr');
        table.appendChild(trBody);


        var tdBody1 = document.createElement('td');
        trBody.appendChild(tdBody1);
        tdBody1.textContent= everything[i].name;


        var tdBody2= document.createElement('td');
        trBody.appendChild(tdBody2);
        tdBody2.textContent= everything[i].year;

        var tdBody3 = document.createElement('td');
        trBody.appendChild(tdBody3);
        tdBody3.textContent=everything[i].price;
        
        var tdBody4= document.createElement('td');
        trBody.appendChild(tdBody4);
        tdBody4.textContent= everything[i].country;
    }
}

// local storage :
// to set local : 

function setStorage () {
var myJSON = JSON.stringify(everything);
localStorage.setItem('myGarage', myJSON);
}


// to get local: 

function getStorage (){
    var y = localStorage.getItem('myGarage');

    if(y){
everything = JSON.parse(y);

table.textContent='';
tableHeader();
tableData();


}
}

getStorage();

// var myTotal=0;
// the total of the random prices: 
// Car.prototype.getTotal = function(){
//     for ( var j = 0 ; j < this.price.length ; j++) {

//         myTotal+= this.price[j][1];
//     }
//     var end = document.getElementById('theEnd')

//     var theEnd = document.write( 'Total = '+ myTotal) ;  
//     end.appendChild(theEnd);

    
// }