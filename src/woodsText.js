import React from 'react';
import './Home.css';
import { WoodsMessages } from './data';

export default function Text (){
	const textList = WoodsMessages.map((row) =>
		<p>{row}</p>
    );
    return (
            <tbody id="body">{textList}</tbody>
    )
}