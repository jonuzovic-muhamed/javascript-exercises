const repeatString = function(string, numberOfTimeToRepeat) {
    if (numberOfTimeToRepeat < 0) {
        return 'ERROR';
    }
    let contentToReturn = '';
    for(let i = 0 ; i < numberOfTimeToRepeat ; i++) {
       contentToReturn += string; 
    }
    return contentToReturn;
};

// Do not edit below this line
module.exports = repeatString;
