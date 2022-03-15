// export const inventoryData = [
// 	{ "item": 'Wooden Sword', quantity: 3, type: 'weapon', description: '+5 Attack',attack: 5, speed: 0},
// 	{ "item": 'Wooden Hammer', quantity: 1, type: 'weapon', description: '+5 Attack', attack: 5, speed: 0},
// 	{ "item": 'Wooden Shield', quantity: 1, type: 'weapon', description: '+5 Defence', defence: 5, speed: 0},
//     ]

export var HomeMessages = [
	"Welcome to your home",
];

export var CaveMessages = [
	"You are in the caves",
];

export var WoodsMessages = [
	"You are in the woods",
];

export var MountainMessages = [
	"You are on a mountain",
];

export function collectItems(t){

  fetch("http://localhost:8080/collect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(t)
  })
}

export function craftItems(t){

  fetch("http://localhost:8080/craft", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(t)
  })
}

export function equipItems(t){

  fetch("http://localhost:8080/equip", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(t)
  })
}

export function exploreCave(){
	var object = []
	return(fetch("http://localhost:8080/cave").then(function (response) {
			return response.json();
	}).then(function (data){
		console.log(data)
		return data;

	})
	)

}

export function getActiveStats(){
	return(fetch("http://localhost:8080/stats").then(function (response) {
			return response.json();
	}).then(function (data){
		console.log(data)
		return data;

	})
	)
}

export function setActiveStats(stats){
		fetch("http://localhost:8080/setStats", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json"
	    },
	    body: JSON.stringify(stats)
	  })
}
