import chalk from 'chalk';
import readlineSync from 'readline-sync';
import {start} from "./server.js";
class Player {
  constructor(isRun) {
    this.hp = 100;
    this.atk = 3;
    this.def = 8;
    this.isRun = isRun;
  }

  attack() {
    // 플레이어의 공격
  }

  run()
  {


  }
}

class Monster {
  constructor(stage) {
    this.hp = 100 + (stage * 10);
    this.atk = 1 + stage;
    this.def = 5 + (stage*0.5);
    this.stage = stage;
  }

  attack() {
    // 몬스터의 공격
  }
}

function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  console.log(
    chalk.cyanBright(`| Stage: ${stage} `) +
    chalk.blueBright(
      `| 플레이어 정보`, `|Hp : ${player.hp}`, `|Hp : ${player.isRun}`
    ) +
    chalk.redBright(
      `| 몬스터 정보 |`, `|Hp : ${monster.hp}`, `|Stage : ${monster.stage}`
    ),
  );
  console.log(chalk.magentaBright(`=====================\n`));
}

const battle = async (stage, player, monster) => {
  let logs = [];

  while(player.hp > 0 ) {
    console.clear();
    displayStatus(stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
        `\n1. 공격한다 2. 도망친다. 3. 아무것도 하지않는다.`,
      ),
    );
    const choice = readlineSync.question('당신의 선택은? ');

    // 플레이어의 선택에 따라 다음 행동 처리
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));
    switch(choice)
    {
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "cheat":
            monster.hp = 0;
            break;
        case "cheat_2":
            player.hp = 0;
            break;
        default:
            logs.push(chalk.red('올바른 선택을 하세요.'));
            break;
    }
  }
  
};

export async function startGame(isRun = false, startStage = 1) {
  console.clear();
  const player = new Player(isRun);
  let stage = startStage;
  console.log(isRun);
  while (stage <= 10) {
    const monster = new Monster(stage);
    await battle(stage, player, monster);

    // 스테이지 클리어 및 게임 종료 조건
    stage++;
  }
}

function restart()
{
    start();
}


function InputEnter(message)
{
    const next = readlineSync.question(`[Enter] : ${message}`);
}
