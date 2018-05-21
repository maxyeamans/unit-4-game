$(document).ready( function() {
    var arrCrystalImages = ["assets/images/crystal-1.png","assets/images/crystal-2.png","assets/images/crystal-3.png","assets/images/crystal-4.png"];
    var numRandomNumber;
    var numCurrentTotal = 0;

    // Add crystals to the page
    for (var i = 0; i < arrCrystalImages.length; i++) {
        var imgCrystal = $("<img>");
        var numCrystalValue = Math.floor(Math.random() * 12) + 1;
        imgCrystal.addClass("crystal-image px-2");
        imgCrystal.attr({
            "src" : arrCrystalImages[i],
            "value" : numCrystalValue
        });
        $("#crystals-section").append(imgCrystal);
        console.log("Crystal ", (i + 1), "value: ", numCrystalValue);
    };

    // Set the game's random number
    numRandomNumber = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(numRandomNumber);
    console.log("This game's random number: ", numRandomNumber);

    // On crystal click, add the crystal's value to running total
    $(".crystal-image").on("click", function() {
        console.log( $(this).attr("value") );
        numCurrentTotal += parseInt($(this).attr("value"));
        $("#number-total").text(numCurrentTotal);
        if( numCurrentTotal > numRandomNumber) {
            alert("Too high. You LOSE!");
        }
        else if (numCurrentTotal === numRandomNumber) {
            alert("By Poseidon's beard, you did it!");
        }
    });
});