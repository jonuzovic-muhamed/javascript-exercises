const findTheOldest = function(people) {
    let oldest;
    let currentOldestAge;
    for (let person of people) {
        let age;
        if (person.yearOfDeath == undefined) {
            age = new Date().getFullYear - person.yearOfBirth;
            if (age > currentOldestAge) {
                currentOldestAge = age;
                oldest = person.name;
            }
        } else {
            age = yearOfDeath - yearOfBirth;
            if (age > currentOldestAge) {
                currentOldestAge = age;
                oldest = person.name;
            }
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
