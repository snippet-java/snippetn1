//Function to determine if the 'num' is even or odd
function isEven(num)
{
  if(num%2 == 0)
  {
    return true;
  } else {
    return false;
  }
}

//Call function isEven
num = 10;
console.log("is "+num+" even? "+ isEven(num));

num = 9;
console.log("is "+num+" even? "+ isEven(num));
