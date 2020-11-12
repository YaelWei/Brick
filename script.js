var text1 = document.getElementById("brick-form1");
var text2 = document.getElementById("brick-form2");
var text3 = document.getElementById("brick-form3")
var form = document.getElementById("form")
var brickLine1 = document.getElementById("brickLine1");
var brickLine2 = document.getElementById("brickLine2");
var brickLine3 = document.getElementById("brickLine3");
var maxChars = 20;

//dynamically places keyboard strokes into box as user types
form.addEventListener('keyup', function(e) {
    //sets length of forms at max value
    if(text1.value.length > maxChars || text2.value.length > maxChars || text3.value.length > maxChars) {
        text1.value = text1.value.substring(0, maxChars);
        text2.value = text2.value.substring(0, maxChars);
        text3.value = text3.value.substring(0, maxChars);
    }

    //Obtains only ASCII values to be printed on the bric
    printable_ASCII_only_string1 = text1.value.replace(/[^\x20-\x7E]+/g, "");
    printable_ASCII_only_string2 = text2.value.replace(/[^\x20-\x7E]+/g, "");
    printable_ASCII_only_string3 = text3.value.replace(/[^\x20-\x7E]+/g, "");

    //prints and changes all to uppercase
    brickLine1.innerHTML = printable_ASCII_only_string1.toUpperCase();
    brickLine2.innerHTML = printable_ASCII_only_string2.toUpperCase();
    brickLine3.innerHTML = printable_ASCII_only_string3.toUpperCase(); 
})




