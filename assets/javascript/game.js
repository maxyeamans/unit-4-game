$(document).ready(function () {

    var arrCrystalImages = ["assets/images/crystal-1.png", "assets/images/crystal-2.png", "assets/images/crystal-3.png", "assets/images/crystal-4.png"];
    var numRandomNumber;
    var numCurrentTotal = 0;
    var numWins = 0;
    var numLosses = 0;

    // Add crystals to the page
    for (var i = 0; i < arrCrystalImages.length; i++) {
        var imgCrystal = $("<img>");
        imgCrystal.addClass("crystal-image px-2");
        imgCrystal.attr({
            "src": arrCrystalImages[i],
            "id": "crystal-" + i
        });
        $("#crystals-section").append(imgCrystal);
    };

    InitializeGame();

    function InitializeGame() {
        // Set the game's random number between 19 and 120
        numRandomNumber = Math.floor(Math.random() * 101) + 19;
        $("#random-number").text(numRandomNumber);
        console.log("This game's random number: ", numRandomNumber);

        // Set the crystals' random numbers between 1 and 12
        $(".crystal-image").each(function (index) {
            $(this).attr("value", Math.floor(Math.random() * 12) + 1);
            console.log("Crystal " + (index + 1) + " value:", $(this).attr("value"));
        });

        // Set the current total to 0
        numCurrentTotal = 0;
        $("#number-total").text(numCurrentTotal);
    };

    // On crystal click, add the crystal's value to running total
    $(".crystal-image").on("click", function () {
        console.log($(this).attr("value"));
        numCurrentTotal += parseInt($(this).attr("value"));
        $("#number-total").text(numCurrentTotal);
        CheckForWin();
    });

    function CheckForWin() {
        if (numCurrentTotal > numRandomNumber) {
            alert("Too high. You LOSE!");
            numLosses++;
            $("#losses").text(numLosses);
            InitializeGame();
        }
        else if (numCurrentTotal === numRandomNumber) {
            alert("By Poseidon's beard, you did it!");
            numWins++;
            $("#wins").text(numWins);
            InitializeGame();
        }
    }
});