const removeFromArray = function(array, ...args) {
   for (let arg of args) {
        for(let i = 0 ; i <= array.length - 1 ; i++) {
            if (arg === array[i]) {
                array[i] = null;
            }
        }
   }

   const arrayToBeReturned = [];
   for(element of array) {
    if (element != null){
        arrayToBeReturned.push(element);
    }
   }

   return arrayToBeReturned;
};

// Do not edit below this line
module.exports = removeFromArray;
