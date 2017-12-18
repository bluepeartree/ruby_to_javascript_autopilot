var apples = 14
console.log(apples);
console.log(`I have ${apples} apples`);


//


var materials = ['wood', 'metal', 'stone'];
var words = {elephant: "The world's largest land mammal",
              school: "A Place of learning",
              "ice cream": "A delicious milk-based dessert"}

console.log(materials);
console.log(words);


//


var num = 5;
if (num > 10)
  {
    console.log(`${num} is greater than 10.`);
  }
else if (num === 10)
  {
    console.log(`${num} is exactly 10.`);
  }
else
{
  console.log(`${num} must be less than 10.`);
}


//

for (var times = 0; times < 10; times ++){
  console.log(`Doing the same thing over and over ${times}`);
}

//


var base = 5
for (var num = 0; num < 20; num ++){
  console.log(base + num);
}


//

var total = 0
for (var num = 1; num <= 100; num ++){
  total += num;
}

console.log(total);


//

for (var height = 3; height <=15; height ++ ) {
  if (height > 9) {
    console.log(`At ${height} you can get on the rollercoaster`);
  }
  else {
    console.log(`At ${height} you are too short for this rollercoaster`);
  }
}

//


containers = ['purse', 'wallet', 'backpack'];

for (var num = 0; num < containers.length; num++){
  console.log(containers[num]);
}

//

function helloWorld() {
  console.log('Hello World!');
}

helloWorld()

//

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

amount = add(5,7)
console.log(amount);
