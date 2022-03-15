
import './Home.css';
//import { inventoryData } from './data';
import { getActiveStats } from './data';



export default async function Inventory (){
	let inventory = await getActiveStats();
	let inventoryData = JSON.parse(inventory.inventory)
	console.log(inventoryData)
	const inventoryRow = inventoryData.map((row) =>
		<tr>
			<td>
				<span>{row.item}</span>
			</td>
			<td>
				<span>{row.quantity}</span>
			</td>
			<td>
				<span>{row.type}</span>
			</td>
			<td>
				<span>{row.description}</span>
			</td>

		</tr>
    );
		console.log(inventoryRow)
    return (
            <tbody id="body">{inventoryRow}</tbody>
    )
}
//let inventory = i()
//console.log(inventory)
//let inventoryData = inventory.inventory;
//console.log(inventoryData)
