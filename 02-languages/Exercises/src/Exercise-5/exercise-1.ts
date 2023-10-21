//SLOT MACHINE

class SlothMachine {
  private coins: number = 0;
  private rouletteValues: boolean[] = [false, false, false];

  play(): void {
    ++this.coins;
    const roulettResult = this.getRandomRouletteResult().every((item) => item);
    console.log(roulettResult);
    if (roulettResult) {
      console.log(`Congratulations!!!, You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
    this.rouletteValues = [false, false, false];
  }

  private getRandomRouletteResult(): boolean[] {
    return this.rouletteValues.map((_) => Math.random() < 0.5);
  }
}

const slothMachine1 = new SlothMachine();

slothMachine1.play();
slothMachine1.play();
slothMachine1.play();
