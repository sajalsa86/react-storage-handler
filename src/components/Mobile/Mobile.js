import React from 'react';
import './Mobile.css';
import { add, division, multiyer } from '../utilitis/calculate';

const Mobile = () => {
    const first = 10;
    const secound = 10;
    const multi = multiyer(first, secound);
    const sum = add(first, 40);
    const devided = division(multi, sum);
    return (
        <div className='mobile'>
            <h2>Hello Form Mobile Compo</h2>
            <h3>Multiplayer Result is : {multi}</h3>
            <h3>Sum Result is : {sum}</h3>
            <h3>Division Result is : {devided}</h3>
        </div>
    );
};

export default Mobile;