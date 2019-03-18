//welcome to my javascript (attempt)
$(document).ready(function () {

//step 1, define the variables
var userScore = 0
var wins = 0 
var losses = 0 

//step 2, create randomization of crystal values and sum total
    var target = Math.floor((Math.random() * 120) + 19);
    $("#random-number").text(target)

    var rubyNumber = Math.floor((Math.random() * 12) + 1);
    $("#ruby").text(rubyNumber)

    var amethystNumber = Math.floor((Math.random() * 12) + 1);
    $("#amethyst").text(amethystNumber)

    var sapphireNumber = Math.floor((Math.random() * 12) + 1);
    $("#sapphire").text(sapphireNumber)

    var roseNumber = Math.floor((Math.random() * 12) + 1);
    $("#rose").text(roseNumber)

    //step 3, assign the functions for the maths (randomization) and restart
    
    function newRandomNumber() {
        target = Math.floor((Math.random() * 120) + 19);
        console.log(target);
        $("#random-number").text(target);
    }

    function newCrystalNumber() {
        rubyNumber = Math.floor((Math.random() * 12) + 1);
        amethystNumber = Math.floor((Math.random() * 12) + 1);
        sapphireNumber = Math.floor((Math.random() * 12) + 1);
        roseNumber = Math.floor((Math.random() * 12) + 1);
        newClickNumbers();
    }

    function reset() {
            userScore = 0;
            console.log(userScore);
            console.log($("#"));
            $("#showScore").text(userTally);
    }

    //step 3.5 assgning functions for win or lose
    function winOrLose() {
        if (userScore === target) {
            wins++;
            alert("You won! Rock on!");
            $("#wins").text(wins);
            reset();
            newRandomNumber();
            newCrystalNumber();
        }

        else if (userTally > target) {
            losses++;
            alert("You lost! Try again?");
            $("#losses").text(losses);
            reset();
            newRandomNumber();
            newCrystalNumber();
        }
    }

    //Step 3.5.5 'on click' functions... Ah?

    function HardRockClick() {
        $("#ruby").on("click", function () {
            userScore = userScore + rubyNumber
            console.log(userScore)
            $("#showScore").text(userScore)
            winOrLose()
        })

        $("#amethyst").on("click", function () {
            userScore = userScore + amethystNumber
            console.log(userScore)
            $("#showScore").text(userScore)
            winOrLose()
        })

        $("#sapphire").on("click", function () {
            userScore = userScore + sapphireNumber
            console.log(userScore)
            $("#showScore").text(userScore)
            winOrLose()
        })

        $("#rose").on("click", function () {
            userScore = userScore + roseNumber
            console.log(userScore)
            $("#showScore").text(userScore)
            winOrLose()
        })
    }
    HardRockClick()

})