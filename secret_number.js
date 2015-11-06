'use strict';
module.exports = function() {
  var currentNumber;

  return function () {
    if (!currentNumber) {
      currentNumber = Math.floor(Math.random() * 1000000 + 1) + 0;
    }
    return currentNumber;
  };
};

// THESE 2 THINGS DO THE SAME THING

// 'use strict';
// module.exports = function() {
//   var currentNumber;

//   var secretNumberGenerator = function () {
//     if (!currentNumber) {
//       currentNumber = Math.floor(Math.random() * 1000000 + 1) + 0;
//     }
//     return currentNumber;
//   };
  
//   return secretNumberGenerator;
// };