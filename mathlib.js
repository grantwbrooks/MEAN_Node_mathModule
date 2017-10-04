module.exports = function (){
    return {
      add: function(num1, num2) {
        let _ = num1 + num2;
        console.log(_);
        return _;
      },
      multiply: function(num1, num2) {
        let _ = num1 * num2;
        console.log(_);
        return _;
      },
      square: function(num) {
        let _ = num * num;
        console.log(_);
        return _;
      },
      random: function(num1, num2) {
        let _ = Math.floor(Math.random()*(num2+1-num1)+num1);
        console.log(_);
        return _;
      }
    }
  };