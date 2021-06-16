document.getElementById('game').addEventListener('load', ingametime);
document.getElementById('attack').addEventListener('click', addmoney);
document.getElementById('buyclass').addEventListener('click', buyamountclc);
document.getElementById('buysword').addEventListener('click', buysword);

//vars
var gametime = 0;
var DPS = 0;
var clickmoney = 1;
var money = 0;
var buyamount_val = 1;
var sword = 0;
var swordDPS = 10;

//classes array
classdict = {
    Assassin: {cost: 500,damage:15, amount: 0},
    Warrior: {cost: 100,damage:7, amount: 0},
    Mage: {cost: 10000,damage:40, amount: 0},
    Hunter: {cost: 10,damage:2, amount: 0},
    Priest: {cost: 30000,damage:100, amount: 0},
    Necromancer: {cost: 100000,damage:300, amount: 0},
    Lancer: {cost: 2000,damage:30, amount: 0},
}


//gametime
setInterval(ingametime, 1000);

function updatehud(){
    document.getElementById('money').innerHTML=money;
}

function ingametime(){
    gametime++;

    idlemoney();
}

function mAsclc(){
    AssassinDPS = classdict.Assassin.damage*classdict.Assassin.amount;
    WarriorDPS = classdict.Warrior.damage*classdict.Warrior.amount;
    MageDPS = classdict.Mage.damage*classdict.Mage.amount;
    HunterDPS = classdict.Hunter.damage*classdict.Hunter.amount;
    PriestDPS = classdict.Priest.damage*classdict.Priest.amount;
    NecromancerDPS = classdict.Necromancer.damage*classdict.Necromancer.amount;
    LancerDPS = classdict.Lancer.damage*classdict.Lancer.amount;

    //mAs calc
    DPS = AssassinDPS+WarriorDPS+MageDPS+HunterDPS+PriestDPS+NecromancerDPS+LancerDPS;
}

function addmoney(){
    money += clickmoney;
    updatehud()
}

function idlemoney(){
    money += DPS;
    updatehud()
}

function buyclass(class_slc, buyingamount){

    classdict[class_slc].amount +=buyingamount;
    updatehud();
    mAsclc();
}

function buyamountclc(){
    var buyamount_id = document.getElementById('amount');
    buyamount_val = buyamount_id.options[buyamount_id.selectedIndex].value;
    console.log(buyamount_val);
    if(buyamount_val == "Max"){
        buyamount_valINTMax = maxbuy();
        buyamount_valINT = Math.floor(buyamount_valINTMax);
    }else{
        buyamount_valINT = parseInt(buyamount_val);
        console.log(buyamount_valINT);
    }

    var class_slcId = document.getElementById('class');
    var class_slcIndx = class_slcId.selectedIndex;
    var class_slc = class_slcId.options[class_slcId.selectedIndex].value;
    var class_cost = classdict[class_slc].cost;

    console.log(buyamount_valINT+'pre loop');
    var buycost = class_cost*buyamount_valINT;

    if(money>=buycost){
        buyclass(class_slc, buyamount_valINT);
        money -= buycost;
        updatehud();
    }
    else{
        window.alert("You do not have enough money for that.");
    }
}

function maxbuy(){
    var class_slcId = document.getElementById('class');
    var class_slc = class_slcId.options[class_slcId.selectedIndex].value;
    var class_cost = classdict[class_slc].cost;
    var maxbuyAmount = money/class_cost;

    return maxbuyAmount;
}

function buysword(){
    if(money>=100){
        sword++
        money -=100;
        updatehud();
        dpcCalc();
    }else{
        window.alert("You do not have enough money to buy that.")
    }
}

function dpcCalc(){
    clickmoney = sword * swordDPS;
}

function safedata(str){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
    xmlhttp.open("GET", "safe.php?q=" + str, true);
    xmlhttp.send();
}
