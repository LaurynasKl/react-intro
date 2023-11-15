export function User(props){
    const style = {
        display: 'inline-block',
        border: '2px solid #ccc',
        padding: '1rem',
        margin: '1rem',
    }
    return (
        <div style={style}>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
        </div>
    );
}