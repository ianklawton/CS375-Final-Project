import React from 'react';
import './Home.css';
import { HomeMessages } from './data';

export default function Text (){
	const textList = HomeMessages.map((row) =>
		<p>{row}</p>
    );
    return (
            <tbody id="body">{textList}</tbody>
    )
}