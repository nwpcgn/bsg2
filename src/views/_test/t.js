/** @typedef {object} json
 * @property {object[]} enemys
 * @property {string} enemys.name
 * @property {number} enemys.health
 * @property {number} enemys.maxHealth
 * @property {string} enemys.pointsId
 * @property {string} enemys.healthbarId
 * @property {number} enemys.hardAttackDamage
 * @property {number} enemys.hardAttackDice
 * @property {number} enemys.weakAttackDamage
 * @property {number} enemys.weakAttackDice
 */
const enemys = [{
  name: "👾 Goblin Warrior",
  health: 12,
  maxHealth: 12,
  pointsId: "enemy_points",
  healthbarId: "enemy_bar",
  hardAttackDamage: 4,
  hardAttackDice: 8,
  weakAttackDamage: 2,
  weakAttackDice: 3,
}, ];

let turn = 1;

let playerHealth = 30;
let playerHealthMax = 30;
let playerPoints = "player_points";
let playerHealthBar = "player_bar";



function healthBarUpdate(
  objectHealth,
  objectHealthMax,
  pointsClass,
  healthBar
) {
  document.getElementById(pointsClass).innerHTML = objectHealth;
  // x = 10 * objectHealth;
  x = (objectHealth / objectHealthMax) * 100;
  document.getElementById(healthBar).style.width = x + "%";
}




/**
 * Description
 * @param {any} name
 * @param {any} health
 * @param {any} maxHealth
 * @param {any} pointsId
 * @param {any} healthbarId
 * @param {any} hardAttackDamage
 * @param {any} hardAttackDice
 * @param {any} weakAttackDamage
 * @param {any} weakAttackDice
 * @returns {any}
 */

function opponent(
  name,
  health,
  maxHealth,
  pointsId,
  healthbarId,
  hardAttackDamage,
  hardAttackDice,
  weakAttackDamage,
  weakAttackDice
) {
  this.name = name;
  this.health = health;
  this.maxHealth = maxHealth;
  this.pointsId = pointsId;
  this.healthbarId = healthbarId;
  this.attack = async function () {};
}

//Enemies                 {name: '👾 Goblin Warrior', health: 12, maxHealth: 12, pointsId: 'enemy_points', healthbarId: 'enemy_bar', hardAttackDamage: 4, hardAttackDice: 8, weakAttackDamage: 2, weakAttackDice: 3}



var goblin = new opponent(
  "👾 Goblin Warrior",
  12,
  12,
  "enemy_points",
  "enemy_bar",
  4,
  8,
  2,
  3
);

window.onload = function () {
  healthBarUpdate(
    goblin.health,
    goblin.maxHealth,
    goblin.pointsId,
    goblin.healthbarId
  );
  healthBarUpdate(playerHealth, playerHealthMax, playerPoints, playerHealthBar);
  nameUpdate(goblin.name, "enemyName");
  turnCounterUpdate(turn);
};

playerAttacks = [
  // ['Attack Name','Base Damage', 'Base Dice success', 'Attack Description', 'Miss Description'],
  [
    "Shield Bash",
    2,
    3,
    "🛡️ You are trying to bash the opponent away with your shield ...",
    "💫 The enemy dodges your attack ...",
  ],
  [
    "Mace Attack",
    6,
    6,
    "🔨 You are trying hit the enemy with a huge mace ...",
    "💫 The enemy dodges your attack ...",
  ],
  [
    "Magic Attack",
    1,
    4,
    "🌀 You are trying to cast a spell on your opponent ...",
    "💫 The enemy dodges your attack ...",
  ],
];

function nameUpdate(name, headerId) {
  document.getElementById(headerId).innerHTML = name;
}

async function damageTaken(animationClass, targetId) {
  document.getElementById(targetId).classList.add(animationClass);
  await sleep(300);
  document.getElementById(targetId).classList.remove(animationClass);
}

function turnCounterUpdate(turn) {
  counter = "⌛ Turn " + turn;
  logText(counter, "end");
}

function healthBarUpdate(
  objectHealth,
  objectHealthMax,
  pointsClass,
  healthBar
) {
  document.getElementById(pointsClass).innerHTML = objectHealth;
  // x = 10 * objectHealth;
  x = (objectHealth / objectHealthMax) * 100;
  document.getElementById(healthBar).style.width = x + "%";
}