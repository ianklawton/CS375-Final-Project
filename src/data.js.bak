export const inventoryData = [
	{ item: 'Wooden Sword', quantity: 3, type: 'weapon', description: '+5 Attack',attack: 5, speed: 0},
	{ item: 'Wooden Hammer', quantity: 1, type: 'weapon', description: '+5 Attack', attack: 5, speed: 0},
	{ item: 'Wooden Shield', quantity: 1, type: 'weapon', description: '+5 Defence', defence: 5, speed: 0},
	{ item: 'Wooden Armor', quantity: 1, type: 'weapon', description: '+5 Defence', defence: 5, speed: 0},
	{ item: 'Metal Shield', quantity: 1, type: 'weapon', description: '+10 Defence', defence: 10, speed: 0},
	{ item: 'Metal Armor', quantity: 3, type: 'weapon', description: '+10 Defence', defence: 10, speed: 0},
	{item: 'Metal Sword', quantity: 1, type: 'weapon', description: '+10 Attack', attack: 10, speed: 0},
	{item: 'Metal Hammer', quantity: 1, type: 'weapon', description: '+10 Attack', attack: 10, speed: 0},
	{item: 'Cooked Deer', quantity: 1, type: 'food', description: '+5 Health', defence: 0, speed: 0, health: 5}
    ]


export const materials = [
	{ mat: "Wood", quantity: 30 },
	{ mat: "Metal", quantity: 30 },
	{ mat: "Skin", quantity: 30 },
	{ mat: "Meat", quantity: 30 },
];

export const craftItems = [
	{ label: "Item1", value: 1 },
	{ label: "Item2", value: 2 },
	{ label: "Item3", value: 3 },
	{ label: "Item4", value: 4 },
	{ label: "Item5", value: 5 },
	{ label: "Item6", value: 6 },
      ];

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
		fetch("http://localhost:8080/collect", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json"
	    },
	    body: JSON.stringify(stats)
	  })
}
