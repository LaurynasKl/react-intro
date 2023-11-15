import { useState } from 'react';
import style from './Todo.module.css'

export function Todo(){
    const [text, setText] = useState('')
    const [tasks, setTasks] = useState([]);

    const empty = <div className={style.empty}>Nera uzduociu</div>;

    const taskList = tasks.map(task => (
            <li key={task} className={style.task}>
                <p className={style.text}>{task}</p>
                <div className={style.action}>
                <button className={style.btn} type='button'>Veiksmas</button>
            </div>
        </li>
    ));

    function update(event){
        setText(event.target.value);
    }
    function addTask(event){
        event.preventDefault();
        setText('');
        setTasks((prev) => [...prev, text]);
        // setTasks([...tasks, text]);
    }
    return(
        <div className={style.todo}>
            <form onSubmit={addTask} className={style.form}>
                <input value={text} onChange={update} className={style.input}  type="text" />
            </form>
            <ul className={style.list}>{tasks.length ? taskList : empty}</ul>
        </div>
    );
}