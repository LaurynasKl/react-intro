export function Student({name, age}){
    const style = {
        display: 'inline-block',
        border: '2px solid #ccc',
        padding: '1rem',
        margin: '1rem',
    }
    return (
        <div style={style}>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );
}