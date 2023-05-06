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
let enemys = [
	{
		name: '👾 Goblin Warrior',
		health: 12,
		maxHealth: 12,
		pointsId: 'enemy_points',
		healthbarId: 'enemy_bar',
		hardAttackDamage: 4,
		hardAttackDice: 8,
		weakAttackDamage: 2,
		weakAttackDice: 3
	}
]
let player = {
	name: '👾 Goblin Warrior',
	health: 30,
	maxHealth: 30,
	pointsId: 'player_points',
	healthbarId: 'player_bar',
	hardAttackDamage: 4,
	hardAttackDice: 8,
	weakAttackDamage: 2,
	weakAttackDice: 3
}

 
