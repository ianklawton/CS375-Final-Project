import React from 'react';
import './Home.css';
import { inventoryData } from './data';

export default function Inventory (){
	const inventoryRow = inventoryData.map((row) =>
		<tr>
			<td>
				<span>{row.item}</span>
			</td>
			<td>
				<span>{row.quantity}</span>
			</td>
			<td>
				<span>{row.description}</span>
			</td>

		</tr>
    );
    return (
            <tbody id="body">{inventoryRow}</tbody>
    )
}

export function collectItems(t){
  console.log(t)

  fetch("http://localhost:8080/collect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      item: t,
    })
  })
}
