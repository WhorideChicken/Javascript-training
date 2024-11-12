const printEvent = function () {
    const openingText = ["test text1", "test text2", "test text3"];
    console.clear();
    console.log(chalk.magentaBright(`\n=====================`));
  
    let textIdx = 0;
    let printText = async function () {
      console.log(openingText[textIdx]);
    };
  
    const a = setInterval(async function () {
      if (textIdx === openingText.length - 1) clearInterval(a);
      await printText();
      textIdx++;
    }, 1500);
  
    console.log(chalk.magentaBright(`=====================`));
    console.log(chalk.green(`1. 계속 2. 게임종료 `));
    const NextOrEnd = function () {
      const next_or_end = readlineSync.question("입력 : ");
      switch (next_or_end) {
        case "1":
          startGame();
          break;
        case "2":
          process.exit(0); // 게임 종료
        default:
          console.log(chalk.red("1과 2만 입력 가능합니다"));
          NextOrEnd();
      }
    };
    NextOrEnd();
  };

  printEvent();