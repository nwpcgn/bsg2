function throwDice(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
 }
 // console.log(throwDice(1,10))
 let turn = 1;
 
 let playerHealth = 30;
 let playerHealthMax = 30;
 let playerPoints = 'player_points';
 let playerHealthBar = 'player_bar';
 
 function opponent(name, health, maxHealth, pointsId, healthbarId, hardAttackDamage, hardAttackDice, weakAttackDamage, weakAttackDice) {
   this.name = name;
   this.health = health;
   this.maxHealth = maxHealth;
   this.pointsId = pointsId;
   this.healthbarId = healthbarId;
   this.attack = async function(){
     let x = throwDice(1,10);
     attackMessage = name + ' attempt to attack...'
     logText(attackMessage);
     await sleep(1000);
     if(x >= hardAttackDice)
     {
       damageTaken('attacke','enemyBox');
       playerHealth = playerHealth - hardAttackDamage;
       healthBarUpdate(playerHealth,playerHealthMax,playerPoints,playerHealthBar);
       // logText('The enemy waves his spear at you');
       damageText = '⚔️ You take ' + hardAttackDamage + ' points of critical damage'
       logText(damageText, 'damage');
       damageTaken('damages','playerBox');
     }
     else if(x > weakAttackDice && x < hardAttackDice)
     {
       damageTaken('attacke','enemyBox');
       playerHealth = playerHealth - weakAttackDamage;
       healthBarUpdate(playerHealth,playerHealthMax,playerPoints,playerHealthBar);
       // logText('The enemy charges at you with a spear');
       damageText = '⚔️ You take ' + weakAttackDamage + ' points of damage'
       logText(damageText, 'damage');
       damageTaken('damages','playerBox');
     }
     else
     {
       logText('💫 The opponent stumbles over his own feet', 'miss');
       damageTaken('attacke','enemyBox');
       damageTaken('playermiss','playerBox');
     }
   };
 }
 
 //Enemies
 var goblin = new opponent('👾 Goblin Warrior', 12, 12, 'enemy_points','enemy_bar' , 4, 8, 2, 3);
 
 let playerAttacks = [
   // ['Attack Name','Base Damage', 'Base Dice success', 'Attack Description', 'Miss Description'],
   ['Shield Bash',2,3,'🛡️ You are trying to bash the opponent away with your shield ...', '💫 The enemy dodges your attack ...' ],
   ['Mace Attack',6,6,'🔨 You are trying hit the enemy with a huge mace ...', '💫 The enemy dodges your attack ...' ],
   ['Magic Attack',1,4,'🌀 You are trying to cast a spell on your opponent ...', '💫 The enemy dodges your attack ...' ]
 ]
 
//  window.onload = function(){
//    healthBarUpdate(goblin.health,goblin.maxHealth,goblin.pointsId,goblin.healthbarId);
//    healthBarUpdate(playerHealth,playerHealthMax,playerPoints,playerHealthBar);
//    nameUpdate(goblin.name,'enemyName');
//    turnCounterUpdate(turn);
//  };
 
 function nameUpdate(name, headerId){
   document.getElementById(headerId).innerHTML = name;
 }
 
 async function damageTaken(animationClass, targetId){
   document.getElementById(targetId).classList.add(animationClass);
   await sleep(300);
   document.getElementById(targetId).classList.remove(animationClass);
 }
 
 function lockActionButtons(condition){
   buttons = document.getElementsByClassName("actionbutton");
   buttonslenght = buttons.length;
   for (i = 0; i < buttonslenght; i++) {
     buttons[i].disabled = condition;
   }  
 }
 
 
 function turnCounterUpdate(turn){
   counter = "⌛ Turn " + turn;
   logText(counter,'end');
 }


 function healthBarUpdate(objectHealth,objectHealthMax,pointsClass,healthBar){
   document.getElementById(pointsClass).innerHTML = objectHealth;
   // x = 10 * objectHealth;
   let x = (objectHealth / objectHealthMax) * 100;
   document.getElementById(healthBar).style.width = x + '%';
 }

 
 
 function logText(string, objectClass){
   var newItem = document.createElement("p");
   newItem.classList.add(objectClass);
   var textnode = document.createTextNode(string);
   newItem.appendChild(textnode);
   var line = document.getElementById("log");
   line.insertBefore(newItem, line.childNodes[0]);
 }
 
 function resetHealth(){
   turn = 0;
   logText('-------------------');
   logText('RESET');
   logText('-------------------');
   goblin.health = goblin.maxHealth; healthBarUpdate(goblin.health,goblin.maxHealth,goblin.pointsId,goblin.healthbarId);
   playerHealth = playerHealthMax;
   healthBarUpdate(playerHealth,playerHealthMax,playerPoints,playerHealthBar);
 }
 
 function sleep(ms) {
   return new Promise(
     resolve => setTimeout(resolve, ms)
   );
 }
 
 
 
 async function weaponAttack(attackDescription,successDice,damage,missDescription){
   lockActionButtons(true);
   turn = turn + 1;
   x = throwDice(1,10);
   if(goblin.health > 0){
     logText(attackDescription);
     await sleep(1000);
     damageTaken('swing','playerBox');
     if(x > successDice)
     {
       goblin.health = goblin.health - damage;
       damageTaken('damages','enemyBox');
       healthBarUpdate(goblin.health,goblin.maxHealth,goblin.pointsId,goblin.healthbarId);
       damagedeal = '⚔️ You successfully deal ' +  damage + ' points of damage to the opponent';
       logText(damagedeal, 'success');
     }
     else
     {
       logText(missDescription, 'miss');
       damageTaken('enemymiss','enemyBox');
     }
     await sleep(1000);
     if (goblin.health > 0)
     {
       goblin.attack();
     }
     else
     {
       logText("☠️ Creatura is dead", 'damage');
     }
   await sleep(2000);
   turnCounterUpdate(turn);
   lockActionButtons(false);
   }
   else
   {
     logText("☠️ Creatura is dead", 'damage');
     lockActionButtons(false);
   }
 };