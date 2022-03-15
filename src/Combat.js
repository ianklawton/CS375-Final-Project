

export function battleSequence(player, enemy, action){
  let userDefend;
  let enemyDefend;
  if (player.speed >= enemy.speed){ //user attacks then enemy attacks
    userDefend = false;
    if (action === "attack"){
      enemy = attack(player, enemy, enemyDefend);
      console.log(player)
      console.log(enemy)
    } else if(action === "defend"){
      userDefend = true;
    } else{
      player = heal(player);
    }
    if (player.health <= 0 || enemy.health <=0){
      return player, enemy;
    }

    enemyDefend = false;
    if (action === "attack"){
      player = attack(enemy, player, userDefend);
      console.log(player)
      console.log(enemy)
    } else if(action === "defend"){
      enemyDefend = true;
    } else{
      enemy = heal(enemy);
    }
    if (player.health <= 0 || enemy.health <=0){
      return player, enemy;
    }

  } else { //enemy attacks then user attacks
    enemyDefend = false;
    if (action === "attack"){
      player = attack(enemy, player, userDefend);
      console.log(player)
      console.log(enemy)
    } else if(action === "defend"){
      enemyDefend = true;
    } else{
      enemy = heal(enemy);
    }
    if (player.health <= 0 || enemy.health <=0){
      return player, enemy;
    }

    userDefend = false;
    if (action === "attack"){
      enemy = attack(player, enemy, enemyDefend);
      console.log(player)
      console.log(enemy)
    } else if(action === "defend"){
      userDefend = true;
    } else{
      player = heal(player);
    }
    if (player.health <= 0 || enemy.health <=0){
      return player, enemy;
    }
  }
  player.health -= 10;
  return [player, enemy];
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
  console.log(first)
  return second;
}

function heal(user){
  if (user.hasOwnProperty("monster")){
    let rNum = Math.floor(Math.random() * 10);
    if (rNum > 3){ //heal 5
      user.health += 5;
    } else if (rNum <= 3 && rNum > 8){ //heal 10
      user.health += 10;
    } else{ //heal 50
      user.health += 50;
    }
  } else { //if the player heals

  }

  return user;
}
