import React, { useEffect, useState } from 'react';
import './Cosmetics.css';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../utilitis/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            // fetch('https://cosmetisc.free.beeceptor.com')
            .then(res => res.json())
            .then(data => setCosmetics(data))

    }, [])
    const total = getTotal(cosmetics);
    return (
        <div className='cosmetics'>
            <h2>Hello Form Cosmetics Compo</h2>
            <h3>Total Price : {total}</h3>
            {cosmetics.map(cosmetic => <Cosmetic
                key={cosmetic.id}
                cosmetic={cosmetic}
            ></Cosmetic>)}
        </div>
    );
};

export default Cosmetics;