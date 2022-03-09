import React from 'react';
import './Home.css';
import { CaveMessages } from './data';

export default function Text (){
	const textList = CaveMessages.map((row) =>
		<p>{row}</p>
    );
    return (
            <tbody id="body">{textList}</tbody>
    )
}