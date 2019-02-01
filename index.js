// ------------------------ USING JQUERY -------------------------------
$(document).ready(function(){
  bindEvents();
})

function bindEvents(){
  $('#addressForm').on('submit',submitForm);
};

function submitForm(e){
  e.preventDefault();
  // console.log($(e.target).serialize())
  var serArr = $(e.target).serializeArray()
  console.log(serArr);
  var myObj = {};
  for (var i = 0; i < serArr.length; i++) {
    if(serArr[i].name === 'check') {
      myObj[serArr[i].name] = serArr[i].value;
    }else{
      myObj[serArr[i].name] = true;
    }
  }
  this.reset();
  // console.log(myObj);
}
// ------------------------ END OF JQUERY EXAMPLE ----------------------


//
// // ------------------------ WITHOUT JQUERY BELOW -----------------------
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('addressForm').addEventListener('submit', submitForm); //this applys a submit event to our form if you click the submit button that will trigger the event
//     //IMPORTANT: *****The submit event happens on our form*****
//     //in order for a form to trigger the submit event we have to include a <button type="submit"></button> tag somewhere within our form tags (bottom usually makes sense but it's not always there depending on the ui)
// });
//
// function submitForm(e) {
//     e.preventDefault(); //
//     // console.log(e); //this is our event object it contains a ton of information about the submit event that was triggered when the forms submit button is clicked.
//     // console.log(e.target)//this contains the target of the event in our case it will be the <form id="addressForm"> tag
//     // console.log(e.target.length);//hmmm our target has a length lets look at why?
//     var myObj = {};
//     for (var i = 0; i < e.target.length - 1; i++) { //notice the e.target.length-1 were cutting off the button from our loop since it holds no valuable data within it.  This will have to be handled differently if the button is not the last tag on your form
//         // console.log(e.target[i]) //here we can look at every immediate child tag within our form
//         // console.log(e.target[i].name) //we placed name attributes on every input within our form this will give us the ability to route additional logic if we need to handle certain inputs slightly differently like a file upload for example.
//         // console.log(e.target[i].value) //this will grab the value out of the input field from our form we can combine e.target.name and e.target.value to create an object dynamically from the form.
//         if (e.target[i].name === 'check') { //we can use if statements to branch our code execution to handle the form input differently if needed
//             myObj[e.target[i].name] = e.target[i].checked;
//         } else {
//             myObj[e.target[i].name] = e.target[i].value; //here we are creating a key/value pair on an object using the input name attribute as the key and the input value as the value
//         }
//         console.log(myObj); //this is myObj at every iteration of the for loop uncomment to watch it build over every iteration
//     };
//     // console.log(myObj); //this is the finished myObj it should hold all your keys and values for your form
//     document.getElementById('addressForm').reset();
//     return true;
// };
