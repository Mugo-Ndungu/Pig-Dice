// User Interface Logic
var minNum = 1;
var maxNum = 6;
var randomTotal = 0;
var randomNum = function() {
  return Math.floor(Math.random() * (+maxNum - +minNum)) + +minNum;
}
var random = randomNum();
var totalRandom = randomTotal += random;

// Business Logic
function rollDice() {

  if (random != 1) {
    $("#p1points").text(random);
    $("#totalRan1").text(totalRandom);
  } else {
    $("#p2points").text(random);
    $("#totalRan2").text(totalRandom);
  }
};
