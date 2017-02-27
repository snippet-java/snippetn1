//Delcare and assign an array
var students = ['John', 'Edward', 'Tim'];

//Here we are checking 'somestring' is an array.
console.log(Array.isArray('somestring')); 
//Here we are checking variable pets is an array.
console.log(Array.isArray(students)); 

//Accessing array elements
//Indexing starts with '0'. Accessing first element.
console.log(students[0]);
//Accessing second element
console.log(students[1]);

console.log("**Printing array elements using for loop**");
for(var i = 0 ; i < students.length ; i++) {
  //Print every element in the array.
  console.log(students[i])
}

var students = ['Alan', 'Joe', 'Lucy'];
console.log("Length of original studens array: "+students.length); //Prints the length of array 'students'

students.push('Kate'); //Add new element at the end of the array
console.log("Length of students array after adding an element: "+students.length); //Prints the length of array 'students'

students.pop();//Remove element at the end of the array
console.log("After pop(): "+students);

students.reverse();//Reverse the order of elements in the array
console.log("After reverse(): "+students);

students.sort(); //Sorts the elements of an array
console.log("After sort(): "+students);


