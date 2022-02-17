// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Princess Johnson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
// gb=Gingerbread
 // cc=Chocolate Chip
// ss=Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// sadd
const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
// minus 
const ccMinusBtn = document.querySelector('#minus-cc')
const gbMinusBtn = document.querySelector('#minus-gb')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
   let gb = (function () {
        let gb = 0;
        return function () {gb += 1; return gb;}
    })();
           function myFunction (){
        document.getElementById("qty-gb").innerHTML += gb();
      };
// HINT: You can delete this console.log after you no longer need it!
console.log (myFunction (".qty-gb")

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

)})

ccPlusBtn.addEventListener('click', function() {
    let cc = (function () {
         let cc = 0;
         return function () {cc += 1; return cc;}
     })();
            function myFunction (){
         document.getElementById("qty-cc").innerHTML += cc();
       };
 // HINT: You can delete this console.log after you no longer need it!
 console.log (myFunction (".qty-cc")
 

 
 )})

 sugarPlusBtn.addEventListener('click', function() {
    let sugar = (function () {
         let sugar = 0;
         return function () {sugar += 1; return sugar;}
     })();
            function myFunction (){
         document.getElementById("qty-sugar").innerHTML += sugar();
       };
 // HINT: You can delete this console.log after you no longer need it!
 console.log (myFunction (".qty-sugar")
 )})


 sugarMinusBtn.addEventListener('click', function() {
    let sugar = (function () {
         let sugar = 0;
         return function () {sugar = 1-1 ; return sugar;}
     })();
            function myFunction (){
         document.getElementById("qty-sugar").innerHTML = sugar();
       };
 // HINT: You can delete this console.log after you no longer need it!
 console.log (myFunction (".qty-sugar")
 

 )})
 


    
   
