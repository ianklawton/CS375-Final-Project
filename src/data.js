export const inventoryData = [
	{ item: 'Sword', quantity: '2', description: 'Attack'},
	{ item: 'Shield', quantity: '1', description: 'Defence'},
	{ item: 'Hammer', quantity: '1', description: 'Attack'},
	{ item: 'Armor', quantity: '3', description: 'Defence'},
    ]

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

export function collectItems(item,quantity,type,description){

  fetch("http://localhost:8080/collect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      item: item, quantity: quantity, type: type, description: description
    })
  })
}
