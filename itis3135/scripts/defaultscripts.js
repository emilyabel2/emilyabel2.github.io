function scriptTest()
{
    alert("Script is running");
}
function greeting()
{
    let name = document.getElementById('name').value;
    let feeling = document.getElementById('feeling').value;
    let welcome = "Ebony Axolotl welcomes you, " + name + "!\nIt's great/unfortunate that you're feeling " + feeling + "!";
    document.getElementById("greetingmessage").innerHTML = welcome;
}

function findAxolotls()
{
    let uInput1 = prompt("How many axolotls do you have?")
    uInput1 = parseInt(uInput1);
    let uInput2 = prompt("How many axolotls do you want?");
    uInput2 = parseInt(uInput2);
    var sum = uInput2 - uInput1;
    alert("You need " + sum + " axolotls!");
}

function addAxolotls()
{
    let uInput1 = prompt("How many axolotls do you have?")
    uInput1 = parseInt(uInput1);
    let uInput2 = prompt("How many axolotls do you add?");
    uInput2 = parseInt(uInput2);
    var sum = uInput1 + uInput2;
    alert("You have " + sum + " axolotls!");
}

function calcAxolotlsPrice()
{
    let uInput1 = prompt("Axolotls cost about 50 dollars, how many axolotls would you like to purchase?");
    uInput1 = parseInt(uInput1);
    var total = uInput1 * 50;
    alert("The total cost of " + uInput1 + " axolotls will be $" + total + "!");
}

function feedAxolotl()
{
    let uInput1 = prompt("Axolotls should be fed an earthworm every other day, how many Axolotls do you own?")
    uInput1 = parseInt(uInput1);
    var feed = uInput1 / 2;
    var weeklyFeed = feed * 7
    alert("Your axolotl(s) eat an average of " + feed + " per day, and require " + weeklyFeed + " earthworms per week.")
}

function tankSpace()
{
    let uInput1 = prompt("Axolotls need at least 10 gallons, and should be housed seperately when young.\nHow many axolotls do you want?")
    uInput1 = parseInt(uInput1);
    var adultTanks = Math.ceil(uInput1 / 2);
    var youthTanksGallons = uInput1 * 10;
    var adultTanksGallons = uInput1 * 5;
    alert("You should have " + uInput1 + " tank(s) for adolescents, which is " + youthTanksGallons + " total gallons\nOr you can have " 
    + adultTanks + " tank(s) for the adult pair(s) which is " + adultTanksGallons + " total gallons!")
}
fuunction 
