const palindromes = function (text) {

    let filteredOutText = text.replace(/[^a-zA-Z0-9]/g, '');
    let stringLength = filteredOutText.length;

    let firstStringHalf = '';
    let secondsStringHalf = '';

    // string length even number
    if (stringLength % 2 == 0) {

        firstStringHalf = filteredOutText.substring(0, (stringLength / 2)).toLowerCase();

        secondsStringHalf = filteredOutText.substring((stringLength / 2), stringLength).split("").reverse().join("").toLowerCase();

    // string length uneven number
    } else {

        firstStringHalf = filteredOutText.substring(0, Math.ceil(stringLength / 2)).toLowerCase();

        secondsStringHalf = filteredOutText.substring(Math.floor(stringLength / 2), stringLength).split("").reverse().join("").toLowerCase();

    }

    if (firstStringHalf == secondsStringHalf) {
        return true;
    } else {
        return false;
    }

};

palindromes('racecar!')

// Do not edit below this line
module.exports = palindromes;
