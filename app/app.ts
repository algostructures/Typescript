function startGame() {
  let playerName: string | undefined = getInputValue("playerName");
  logPlayer(playerName);
  postScore(100, playerName);
}

function logPlayer(name: string = "MultiMath Player"): void {
  console.log(`New game starting for the player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  if (inputElement.value === "") {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(
  score: number,
  playerName: string = "MultiMath Player"
): void {
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }
  const scoreElement: HTMLElement | null =
    document.getElementById("postedScores");
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score : ${score}`);
}

document.getElementById("startGame")!.addEventListener("click", startGame);

const logMessage = (message: string): void => console.log(message);

function logError(err: string): void {
  console.error(err);
}

let myResult: Result = {
  playerName: "Marie",
  score: 5,
  problemCount: 5,
  factor: 7,
};

let player: Person = {
  name: "Daniel",
  formatName: () => "Dan",
};
