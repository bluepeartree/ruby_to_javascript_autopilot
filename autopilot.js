function getNewCar() {
  var car = {city: 'Toronto',passengers: 0, gas: 100};
  return car;
}

function addCar(cars, newCar) {
  cars.push(newCar);
  console.log( `Adding new car to the fleet. Fleet size is now ${cars.length}.`);
}

function pickUpPassenger(car) {
  car['passengers'] +=1;
  car['gas'] -=10;
  console.log( `Picked up passenger. Car now has ${car['passengers']} passengers.`);
}

function getDestination(car) {
  if (car['city'] === 'Toronto') {
    return 'Mississauga';
  }
  else if (car['city'] === 'Mississauga') {
    return 'London';
  }
  else if (car['city'] === 'London') {
    return 'Toronto';
  }
}

function fillUpGas(car) {
  var oldGas = car['gas'];
  car['gas'] = 100;
  console.log( `Filled up to ${getGasDisplay(car['gas'])} on gas from ${getGasDisplay(oldGas)}.`);
}

function getGasDisplay(gasAmount) {
  return `${gasAmount}%`
}

function drive(car, cityDistance) {
  if (car['gas']<cityDistance){
    fillUpGas(car)
  }

  car['city']= getDestination(car);
  car['gas']-= cityDistance;
  return `Drive to ${car['city']}. Remaining gas: ${getGasDisplay(car['gas'])}.`;
}

function dropOffPassengers(car) {
  var previousPassengers = car['passengers'];
  car['passengers']=0;
  return `Dropped off ${previousPassengers} passengers.`;
}

function act(car) {
  distanceBetweenCities = 50;

  if (car['gas'] < 20) {
    fillUpGas(car);
  }
  else if (car['passengers'] < 3)
  {
    pickUpPassenger(car)
  }
  else if (car['gas'] < distanceBetweenCities) {
      fillUpGas(car);
    }
    var droveTo = drive(car, distanceBetweenCities);
    passengersDropped = dropOffPassengers(car);
    return `${droveTo} ${passengersDropped}`;
  }

function commandFleet(cars) {
  for(var index = 0; index < cars.length; index ++ ){
    var action = act(cars[index]);
    console.log(`Car ${index + 1}: ${action}`);
  }
  console.log('...');
}

function addOneCarPerDay(cars, numDays) {
  for(var index = 0; index < numDays; index ++) {
    newCar = getNewCar();
    addCar(cars, newCar);
    commandFleet(cars);
  }
}

cars = [];
addOneCarPerDay(cars, 10);
