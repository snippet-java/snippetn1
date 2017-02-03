var students = ['Jim', 'Jhon', 'James'];

//filter is applied on students.
console.log("Element of array students after filter is applied")
var filtered = students.filter(function (student) {
  return (student !== 'James');
});

console.log(filtered)

console.log("Using for each")
var numbers = [35,45,90,80]

function printNum(item) {
   console.log(item)
}

//forEach is used to call the function printNum on all the elements of the array 'numbers'
numbers.forEach(printNum);
