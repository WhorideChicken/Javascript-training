import chalk from 'chalk';
import readlineSync from 'readline-sync';

class Player {
  constructor() {
    this.hp = 100;
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
    this.hp = 100;
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
      `| 플레이어 정보`, `|Hp : ${player.hp}`
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
        default:
            logs.push(chalk.red('올바른 선택을 하세요.'));
            break;
    }

    if(monster.hp <= 0)
    {
        logs.push(chalk.green(`${stage} 번째 몬스터를 처치하셨습니다.`));
        console.log(chalk.green("Clear!!!!!!"));
        const next = readlineSync.question('[Enter] -> 다음 Stage로');
        break;
    }
  }
  
};

export async function startGame() {
  console.clear();
  const player = new Player();
  let stage = 1;

  while (stage <= 10) {
    const monster = new Monster(stage);
    await battle(stage, player, monster);

    // 스테이지 클리어 및 게임 종료 조건

    stage++;
  }
}