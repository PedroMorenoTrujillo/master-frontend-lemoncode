//SLOT MACHINE
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.coins = 0;
        this.rouletteValues = [false, false, false];
    }
    SlothMachine.prototype.play = function () {
        ++this.coins;
        var roulettResult = this.getRandomRouletteResult().every(function (item) { return item; });
        console.log(roulettResult);
        if (roulettResult) {
            console.log("Congratulations!!!, You won ".concat(this.coins, " coins!!"));
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
        this.rouletteValues = [false, false, false];
    };
    SlothMachine.prototype.getRandomRouletteResult = function () {
        return this.rouletteValues.map(function (_) { return Math.random() < 0.5; });
    };
    return SlothMachine;
}());
var slothMachine1 = new SlothMachine();
slothMachine1.play();
slothMachine1.play();
slothMachine1.play();
