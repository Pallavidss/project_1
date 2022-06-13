// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  // return num after multiplying it by ten
  // code here
  console.log(num*10)
  
};
multiplyByTen(10);


const subtractFive = (num) => {
  // return num after subtracting five
  // code here
  console.log(num-5);
};
subtractFive(20);

const areSameLength = (str1, str2) => {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if(str1.length===str2.length)
  {
    console.log(true);
  }
  else{
    console.log(false);
  }
};
areSameLength("pallu","anu");

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if(x == y)
  {
    console.log(true);
  }
  else{
    console.log(false);
  }
  
};
areEqual(3,3);


const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  // code here
  if(num < 90)
  {
    console.log(true);
  }
  else{
    console.log(false);
  }
};
lessThanNinety(92);

const greaterThanFifty = (num) => {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if(num>50)
  {
    console.log(true);
  }
  else{
    console.log(false);
  }
};
greaterThanFifty(23);
const add = (x, y) => {
  // add x and y together and return the value
  // code here
  let sumis = x+y;
  console.log(sumis);
};
add(3,9);

const subtract = (x, y) => {
  // subtract y from x and return the value
  // code here
  let subtis = x-y;
  console.log(subtis);
};
subtract(8,4);

const divide = (x, y) => {
  // divide x by y and return the value
  // code here
  let dividis = x/y;
  console.log(dividis);
};
divide(12,6);

const multiply = (x, y) => {
  // multiply x by y and return the value
  // code here
  const mult=x*y;
  console.log(mult);
};
multiply(6,9);

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
  // code here
  const remainde=x%y;
  console.log(remainde);
};
getRemainder(9,4);

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  // code here
  if(num%2==0)
  {
    console.log(true);
  }
  else{
    console.log(false);
  }
};
isEven(7);

const isOdd = (num) => {
  // return true if num is odd
  // otherwise return false
  // code here
  if(num%2==0)
  {
    console.log(true)
  }
  else{
    console.log(false);
  }
};

const square = (num) => {
  // square num and return the new value
  // code here
  const newvalue=num*num;
  console.log(newvalue);
};
square(4);


const cube = (num) => {
  // cube num and return the new value
  // code here
  const newvalue=(num*num*num);
  console.log(newvalue);
};
cube(8);

const raiseToPower = (num, exponent) => {
  // raise num to whatever power is passed in as exponent
  // code here
  console.log((Math.pow(num,exponent)));
  
};
raiseToPower(7,2);



const roundNumber = (num) => {
  // round num and return it
  // code here
  console.log((Math.round(num)));
  
};
roundNumber(8.7);

const roundUp = (num) => {
  // round num up and return it
  // code here
  console.log((Math.ceil(num)));
};
roundUp(3.6)


const addExclamationPoint = (str) => {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  console.log(str+'!');
};
addExclamationPoint("sky");


const combineNames = (firstName, lastName) => {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  console.log(firstName+" "+lastName);
};
combineNames("pallavi","d S");

const getGreeting = (name) => {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  console.log("ABC"+name);
};
getGreeting("java");


// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  // code here
  console.log("area of rectangle is "+ length*width);
};
getRectangleArea(2,4);

const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  // code here
  console.log(2*base*height);
};
getTriangleArea(1,2);
const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  // code here
  console.log(3.1456*radius*radius);
};
getCircleArea(3);
const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  console.log(length*width*height);
};
getRectangularPrismVolume(2,3,4);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
