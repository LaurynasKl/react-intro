import { ListItem } from "./ListItem";

export function ListWithForLoop(){
    const dictionary = ['labas', 'rytas', 'Lietuvas','labas'];
    const items = [];
    let idx = 0

    for(const word of dictionary){
        items.push(<ListItem key={(idx++) + '_' + word} text={word} />)
    }
    return (
        <ul>{items}</ul>
    );
}