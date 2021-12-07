function getMilk(product, money, costPerBottle) {
    milk = Math.floor(money / costPerBottle);
    console.log("Buy " + milk + " bottles of " 
+ product + ".");
    change = money % costPerBottle;
    console.log("You have " + change + " naira change.")
}

getMilk(prompt("What should I get for you sir?"), 
prompt("Give me some money Sir."), 
prompt("How much, does a bottle cost Sir?"));
