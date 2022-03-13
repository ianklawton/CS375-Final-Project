import React from 'react';
import './Home.css';
import { materials } from './data';

export default function Materials (){
	const materialsRow = materials.map((row) =>
		<tr>
			<td>
				<span>{row.mat}</span>
			</td>
			<td>
				<span>{row.quantity}</span>
			</td>

		</tr>
    );
    return (
            <tbody id="body">{materialsRow}</tbody>
    )
}
