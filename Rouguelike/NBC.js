import chalk from 'chalk';
import readlineSync from 'readline-sync';

const printEvent = function () {
    const openingText = ["test text1", "test text2", "test text3"];
    console.clear();
  
    let textIdx = 0;

    // setInterval로 텍스트를 하나씩 출력
    const a = setInterval(function () {
        console.clear();
        console.log(chalk.green(`\n=====================`));
        console.log(openingText[textIdx]);
        console.log(chalk.green(`\n=====================`));
        textIdx++;

        // 모든 텍스트가 출력된 후 인터벌 종료 및 NextOrEnd 호출
        if (textIdx === openingText.length) {
            clearInterval(a);
            console.log(chalk.green(`1. 계속 2. 게임종료 `));
            NextOrEnd(); // 모든 텍스트가 출력된 후에 호출
        }
    }, 1500);

  

    //console.log(chalk.green(`1. 계속 2. 게임종료 `));
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
}
  printEvent();
