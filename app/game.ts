/// <reference path="utility.ts"/>
/// <reference path="result.ts"/>
/// <reference path="player.ts"/>
/// <reference path="scoreboard.ts"/>

class Game {
  private scoreboard: ScoreBoard = new ScoreBoard();
  constructor(
    public newPlayer: Player,
    public problemCount: number,
    public factor: number
  ) {}

  displayGame() {
    let gameForm: string = "";
    for (let i = 1; i <= this.problemCount; i++) {
      gameForm += '<div class="form-group">';
      gameForm += '<div class="form-group">';
      gameForm += '<div class="form-group">';
      gameForm += '<div class="form-group">';
      gameForm += '<div class="form-group">';
    }
  }
}
