const game = {
  team1: "Bayern munich",
  team2: "Borrussia Dortmud",
  players: [
    [
      "neuser",
      "pavard",
      "martinez",
      "alaba",
      "davies",
      "kimmich",
      "goretzka",
      "coman",
      "muller",
      "gnarby",
      "Lewandowski",
    ],
    [
      "burki",
      "schulz",
      "hummels",
      "akanji",
      "hakimi",
      "weigl",
      "witsel",
      "hazard",
      "brandt",
      "sancho",
      "gotzu",
    ],
  ],

  score: "4.0",
  scored: ["Lewandowski", "gnarby", "Lewandowski", "hummels"],
  Date: "Nov 9th 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//Q1
const [player1, player2] = game.players;
console.log(player1);
console.log(player2);