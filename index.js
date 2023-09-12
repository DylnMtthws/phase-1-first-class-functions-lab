// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function () {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
        return function(fare) {//returns an anonymous function that multiplies fare * integer (for this example we would quadruple it so integer would be passed as an argument of 4)
            return fare * integer
        }
}

const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)


// function selectDifferentDrivers(drivers, returnFunction) {
//     if (returnFunction = returnFirstTwoDrivers) {
//         return returnFirstTwoDrivers()
//     } else if (returnFunction = returnLastTwoDrivers) {
//         return returnLastTwoDrivers()
//     }
// }

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };