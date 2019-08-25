var nameofProducts = [];
var productPrices = [];

$(".newItem").click(function() {
   var productnameInput = $(".itemName").val();
   var productpriceInput = $(".itemPrice").val();
   
   $(".cart").append("<div class= 'item'><p>" + productnameInput + "</p><p>$" + productpriceInput + "</p></div>");
   nameofProducts.push(productnameInput);
   $(".number").text("Items in Cart: " + nameofProducts.length);
   
   $(".purchase").click(function() {
       alert("Thank You for your purchase! Enjoy your " + nameofProducts[0] + "!");
   });
   
});