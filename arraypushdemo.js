//build an array that stores first & last names. The defult value of the array will be empty
var studentsFirst = [];
var studentsLast =[];
//ask user for a first name, and store it in the first names array.
var firstName = prompt("What is your first name?");
studentsFirst.push(firstName);
//ask user for last ame, and store it in the last names array.
var lastName = prompt("What is your last name?");
studentsLast.push(lastName);
//display to the window both first and last name from the array with the length of the both arrays.
window.alert(studentsFirst[0] + " " + studentsLast[0] + " " + studentsFirst.length + studentsLast.length);
