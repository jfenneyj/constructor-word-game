var letterCons = require("./letter");

function word(value){
    this.value = value;
    this.letters = [];
    this.guessesMade = "";
    for(var i = 0; this.value.length; i++){
        this.letters.push(new letterCons.letter(this.value[i]));
    }
};

word.prototype.isComplete = function(){
    for(var i = 0; i < this.letters.length; i++){
        if(this.letters[i].show) return false;
    }
        return true;
}

word.prototype.findLetter = function(letter){
    var lowerLetter = letter.toLowerCase();
    if(this.guessesMade.indexOf(lowerLetter) != -1){
        return console.log("\nDuplicate letter, try again.");
    }
        this.guessesMade += lowerLetter;
        for(var i = 0; i < letters.length; i++){
            if(this.letters[i].value.toLowerCase()== lowerLetter){
                this.letters[i].show = true;
            }
        }
};
