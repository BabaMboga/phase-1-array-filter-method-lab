// Code your solution here
const drivers = [  'Bobby',  'Sammy',  'Sally',  'Annette',  'Sarah',  'bobby'];

const driverObjects = [  { name: 'Bobby', hometown: 'Pittsburgh' },  { name: 'Sammy', hometown: 'New York' },  { name: 'Sally', hometown: 'Cleveland' },  { name: 'Annette', hometown: 'Los Angeles' },  { name: 'Bobby', hometown: 'Tampa Bay' }];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, newString) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(newString.toLowerCase()));
}

function matchName(driverObjects, name) {
  return driverObjects.filter(driverObjects => driverObjects.name === name);
}

// Example usage:
console.log(findMatching(drivers, 'bobby')); 
console.log(fuzzyMatch(drivers, 'Sa')); 
console.log(matchName(driverObjects, 'Bobby')); 