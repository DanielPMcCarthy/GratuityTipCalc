$(document).ready(function(){
  function tipCalculator() {

    // pull HTML values needed for calculations and store in JS variables
    let amount = $("#amount").val();
    let percentage = $("#percentage").val();

    // calculate the tip and store in JS variable
    let tip = amount * (percentage / 100);

    // calculate the total and store in JS variable
    let total = +amount + tip;

    // fix the output value out to the 100th decimal place (two zeroes)
    $("#tip").text(tip.toFixed(2));
    $("#total").text(total.toFixed(2));
  };

    // create a click event to initiate the tipCalculator function
    $("#calculate").click(tipCalculator);
});
