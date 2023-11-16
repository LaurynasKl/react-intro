import { useState } from 'react';
import style from './Cart.module.css';
import { CartItem } from './CartItem';

export function Cart(){
    const [count, setCount] = useState(0);

    function telefonas(diff, preke){
        setCount(count + diff);
        if(diff === -1){
            console.log('isimta', preke);
        } else{
            console.log('prideta', preke);
        }
    }

    return (
        <div className={style.cart}>
            <h2 className={style.title}>Vido: {count}</h2>

            <CartItem title= 'Pomidoras' skambutis={telefonas} />
            <CartItem title= 'Agurkas' skambutis={telefonas} />
        </div>
    );
}