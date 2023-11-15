import { useState } from 'react';
import style from './Form.module.css'

export function Form(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function updateFirstName(event){
        setFirstName(event.target.value)
    }
    function updateLastName(event){
        setLastName(event.target.value)
    }

    return (
        <div className={style.hello}>
            <form className={style.form}>
                <input value={firstName} onChange={updateFirstName} className={style.input} type="text" />
                <input value={lastName} onChange={updateLastName} className={style.input} type="text" />
            </form>
            <p className={style.sentence}>Hello: {firstName} {lastName}</p>
        </div>
    );
}