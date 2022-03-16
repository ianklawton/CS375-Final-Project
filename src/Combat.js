

export function battleSequence(player, enemy, action){
  let userDefend;
  let enemyDefend;
  let enemyAction;
  let userTxt;
  let enemyTxt;
  let damageTxt;
  let healTxt;
  let enemyActionNum = Math.floor(Math.random() * 10);
  if (enemyActionNum > 5){
      enemyAction = "attack";
    } else if (enemyActionNum <= 5 && enemyActionNum > 8){
      enemyAction = "defend";
    } else{
      enemyAction = "heal";
    }
  if (player.speed >= enemy.speed){ //user attacks then enemy attacks
    userDefend = false;
    if (action === "attack"){
      [enemy, damageTxt] = attack(player, enemy, enemyDefend);
      //console.log(player)
      //console.log(enemy)
	  userTxt = `You delt ${damageTxt} to the enemy`;
    } else if(action === "defend"){
      userDefend = true;
	  userTxt = "You hold a defensive stance";
    } else{
      [player, healTxt] = heal(player);
	  userTxt = `You healed ${healTxt} health`;
    }
    if (player.health <= 0 || enemy.health <=0){
      return [player, enemy];
    }

    enemyDefend = false;
    if (enemyAction === "attack"){
      [player, damageTxt] = attack(enemy, player, userDefend);
      //console.log(player)
      //console.log(enemy)
	  enemyTxt = `The enemy delt ${damageTxt} to you`;
    } else if(enemyAction === "defend"){
      enemyDefend = true;
	  enemyTxt = "The enemy holds a defensive stance";
    } else{
      [enemy, healTxt] = heal(enemy);
	  enemyTxt = `The enemy healed ${healTxt} health`;
    }
    if (player.health <= 0 || enemy.health <=0){
      return [player, enemy];
    }

  } else { //enemy attacks then user attacks
    enemyDefend = false;
    if (enemyAction === "attack"){
      [player, damageTxt] = attack(enemy, player, userDefend);
      //console.log(player)
      //console.log(enemy)
	  enemyTxt = `The enemy delt ${damageTxt} to you`;
    } else if(enemyAction === "defend"){
      enemyDefend = true;
	  enemyTxt = "The enemy holds a defensive stance";
    } else{
		[enemy, healTxt] = heal(enemy);
		enemyTxt = `The enemy healed ${healTxt} health`;
    }
    if (player.health <= 0 || enemy.health <=0){
      return [player, enemy];
    }

    userDefend = false;
    if (action === "attack"){
      [enemy, damageTxt] = attack(player, enemy, enemyDefend);
      //console.log(player)
      //console.log(enemy)
	  userTxt = `You delt ${damageTxt} to the enemy`;
    } else if(action === "defend"){
      userDefend = true;
	  userTxt = "You hold a defensive stance";
    } else{
      [player, healTxt] = heal(player);
	  userTxt = `You healed ${healTxt} health`;
    }
    if (player.health <= 0 || enemy.health <= 0){
      return [player, enemy];
    }
  }
  
  return [player, enemy, userTxt, enemyTxt];
}

function attack(first, second, opponentDefend){
  let baseA = first.attack;
  let baseD = second.defense;
  if (opponentDefend === true){
    baseD *= 1.5
  }
  let damage = baseA - baseD;
  if (damage <= 0){
    damage = 0;
  }
  second.health -= damage;
  if (second.health <= 0){
	second.health = 0;
  }
  console.log(first)
  return [second, damage];
}

function heal(user){
	let healVal;
  if (user.hasOwnProperty("monster")){
    let rNum = Math.floor(Math.random() * 10);
    if (rNum > 3){ //heal 5
      user.health += 5;
	  healVal = 5;
    } else if (rNum <= 3 && rNum > 9){ //heal 10
      user.health += 10;
	  healVal = 10;
    } else{ //heal 50
      user.health += 30;
	  healVal = 30;
    }
  } else { //if the player heals
	let tempInv = JSON.parse(user.inventory);
	for (let x = 0; x < tempInv.length; x++){
		if (tempInv[x].item === "food"){
			tempInv[x].quantity -= 1;
			if (tempInv[x].quantity === 0){
				delete tempInv[x];
			user.inventory = JSON.stringify(tempInv);
			user.health += 30;
			healVal = 30
			return [user, healVal];
			}
			
		}
	}
  }

  return [user, healVal];
}
