import React from 'react';
import './Home.css';
import { MountainMessages } from './data';

export default function Text (){
	const textList = MountainMessages.map((row) =>
		<p>{row}</p>
    );
    return (
            <tbody id="body">{textList}</tbody>
    )
}