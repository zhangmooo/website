function getvalues(){
    var value1= document.querySelector('input[placeholder="First name"]').value;
    var value2= document.querySelector('input[placeholder="Last name"]').value;
    var value3= document.querySelector('input[placeholder="Email"]').value;

    return [value1,value2,value3];
 }


 function printvalues(){
    var values =getvalues();
    console.log("First name:",values[0]);
    console.log("Last name:",values[1]);
    console.log("Email:",values[2]);

 }

 document.querySelector('button').addEventListener('click',printvalues);