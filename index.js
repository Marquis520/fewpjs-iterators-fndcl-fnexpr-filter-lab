// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, query){
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query){
    return drivers.filter(driver => driver[0].toLowerCase() === query[0].toLowerCase());
}

function matchName(drivers, query){
    return drivers.filter(driver => driver.name === query);
}