function Display() {
    let lyrics = "";
    for (let i = 99; i >= 0; i--) {
        if (i > 2) {
            
            lyrics += (i + " bottles of beer on the wall," + i + " bottles of beer!\n")
            lyrics += ("Take one down,"+ "Pass it around," +  (i - 1) + " bottles of beer on the wall!\n");
             }
         else if (i === 2) {
            lyrics += (i + " bottles of beer on the wall," +  i + "  bottles of beer!\n")
            lyrics += ("Take one down,"+ "Pass it around," +  i + "  bottles of beer on the wall!\n");
         }


            
         else if (i === 1) {
            lyrics += (i + " bottle of beer on the wall,"+ i + " bottle of beer!\n");
           
            lyrics += ("Take one down," + "Pass it around," + "no  bottles of beer on the wall!\n")
        }
    }
    lyrics+=("No more bottles of beer on the wall, no more bottles of beer."+"\n"+"Go to the store and buy some more, 99 bottles of beer on the wall.\n");
    document.getElementById("message").innerText = lyrics;
}
