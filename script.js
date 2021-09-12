var cash = 0;
var cursor = 0;
var multiplier = 1;

var grandma = 0;
var farm = 0;
var mine = 0;
var factory = 0;
var bank = 0;
var temple = 0;
var portal = 0;

var upg1_cost = 10;
var upg2_cost = 100;
var upg3_cost = 500;
var upg4_cost = 1000;
var upg5_cost = 10000;
var upg6_cost = 100000;
var upg7_cost = 500000;
var upg8_cost = 100000000;


$("#cookie").click(function() {
    $("#cookie").css({
        width: "295px"}); 

    setTimeout(function() {
        $("#cookie").css({
            width: "300px"
        });
    });
    
    cash = 1 * multiplier + cash;
    $("#number").empty();
    $("#number").append(cash);
});


$("#upg-1").click(function() {
    if(cash >= upg1_cost) {
        multiplier = multiplier + 1;
        cash = cash - upg1_cost;
        upg1_cost = upg1_cost * 1.2;
        cash = Math.round(cash);
        upg1_cost = Math.round(upg1_cost);
        $("#number").empty();
        $("#number").append(cash);
        $("#cost-1").empty();
        $("#cost-1").append(upg1_cost);
    } else {
        console.log("Nie masz wystarczająco ciasteczek");
    }
        
});

$("#upg-2").click(function() {
    if(cash >= upg2_cost) {
        grandma++
        cash = cash - upg2_cost;
        upg2_cost = upg2_cost * 1.1;
        cash = Math.round(cash);
        upg2_cost = Math.round(upg2_cost);
        $("#number").empty();
        $("#number").append(cash);
        $("#cost-2").empty();
        $("#cost-2").append(upg2_cost);

        $("#grandma").append('<img src="grandma.png">')
    } else {
        console.log("Nie masz wystarczająco ciasteczek");
    }
        
});

$("#upg-3").click(function() {
    if(cash >= upg3_cost) {
        farm++
        cash = cash - upg3_cost;
        upg3_cost = upg3_cost * 1.05;
        cash = Math.round(cash);
        upg3_cost = Math.round(upg3_cost);
        $("#number").empty();
        $("#number").append(cash);
        $("#cost-3").empty();
        $("#cost-3").append(upg3_cost);

        $("#farm").append('<img src="farm.png">')
    } else {
        console.log("Nie masz wystarczająco ciasteczek");
    }
        
});


$("#upg-4").click(function() {
    if(cash >= upg4_cost) {
        mine++
        cash = cash - upg4_cost;
        upg4_cost = upg4_cost * 1.05;
        cash = Math.round(cash);
        upg4_cost = Math.round(upg4_cost);
        $("#number").empty();
        $("#number").append(cash);
        $("#cost-4").empty();
        $("#cost-4").append(upg4_cost);

        $("#mine").append('<img src="mine.png">')
    } else {
        console.log("Nie masz wystarczająco ciasteczek");
    }
        
});

$("#upg-5").click(function() {
    if(cash >= upg5_cost) {
        factory++
        cash = cash - upg5_cost;
        upg5_cost = upg5_cost * 1.05;
        cash = Math.round(cash);
        upg5_cost = Math.round(upg5_cost);
        $("#number").empty();
        $("#number").append(cash);
        $("#cost-5").empty();
        $("#cost-5").append(upg5_cost);

        $("#factory").append('<img src="factory.png">')
    } else {
        console.log("Nie masz wystarczająco ciasteczek");
    }
        
});

$("#upg-6").click(function() {
    if(cash >= upg6_cost) {
        bank++
        cash = cash - upg6_cost;
        upg6_cost = upg6_cost * 1.05;
        cash = Math.round(cash);
        upg6_cost = Math.round(upg6_cost);
        $("#number").empty();
        $("#number").append(cash);
        $("#cost-6").empty();
        $("#cost-6").append(upg6_cost);

        $("#bank").append('<img src="bank.png">')
    } else {
        console.log("Nie masz wystarczająco ciasteczek");
    }
        
});

$("#upg-7").click(function() {
    if(cash >= upg7_cost) {
        temple++
        cash = cash - upg7_cost;
        upg7_cost = upg7_cost * 1.05;
        cash = Math.round(cash);
        upg7_cost = Math.round(upg7_cost);
        $("#number").empty();
        $("#number").append(cash);
        $("#cost-7").empty();
        $("#cost-7").append(upg7_cost);

        $("#temple").append('<img src="temple.png">')
    } else {
        console.log("Nie masz wystarczająco ciasteczek");
    }
        
});

$("#upg-8").click(function() {
    if(cash >= upg8_cost) {
        portal++
        cash = cash - upg8_cost;
        upg8_cost = upg8_cost * 1.05;
        cash = Math.round(cash);
        upg8_cost = Math.round(upg8_cost);
        $("#number").empty();
        $("#number").append(cash);
        $("#cost-8").empty();
        $("#cost-8").append(upg8_cost);

        $("#portal").append('<img src="portal.png">')
    } else {
        console.log("Nie masz wystarczająco ciasteczek");
    }
        
});


setInterval(grandmas, 1000);

function grandmas() {
    if(grandma>0)
    cash = cash + grandma;
    $("#number").empty();
    $("#number").append(cash);
}

setInterval(farms, 500);

function farms() {
    if(farm>0)
    cash = cash + farm;
    $("#number").empty();
    $("#number").append(cash);
}

setInterval(mines, 333);

function mines() {
    if(mine>0)
    cash = cash + mine;
    $("#number").empty();
    $("#number").append(cash);
}

setInterval(factories, 1);

function factories() {
    if(factory>0)
    cash = cash + factory * 5;
    $("#number").empty();
    $("#number").append(cash);
}

setInterval(banks, 1000);

function banks() {
    if(bank>0)
    cash = cash + bank * 15;
    $("#number").empty();
    $("#number").append(cash);
}

setInterval(temples, 500);

function temples() {
    if(temple>0)
    cash = cash + temple * 50;
    $("#number").empty();
    $("#number").append(cash);
}


setInterval(portals, 1);

function portals() {
    if(portal>0)
    cash = cash + portal * 6666;
    $("#number").empty();
    $("#number").append(cash);
}