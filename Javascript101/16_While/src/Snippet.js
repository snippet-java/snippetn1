//initialize currentNum with zero
var currentNum = 0;
var maxNum = 40;

//Even number between 0 and maxNum to be printed
console.log("Prining all even numbers between 0 and "+maxNum)
while (currentNum <= maxNum) {
	  //If the reminder of 'i/2' is zero , then its even
	  if(currentNum%2 == 0) {
	   console.log(currentNum);
	  }
	  //Increment the value of currentNum
	  currentNum++;
}
