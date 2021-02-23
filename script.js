var money = 10.00;
var cokes = 1.50;
var chips = 1.25;

$(".buy").click(function() {
  let item = $("#item").val();
  if(item === "") {
    $(".message").text("you must enter an item");
    
  } else if (item === "coke" && money >= cokes) {
    money = money - cokes;
    $("#moneyleft").html(money);
    
  } else if (item === "chips" && money >= chips) {
    money = money - chips;
    $("#moneyleft").html(money);
  }
});
