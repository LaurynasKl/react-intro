import './App.css';
import { Item } from './components/component/Item';
import { Student } from './components/comp-param/Student'
import { User } from './components/comp-param/User';
import { ListWithForLoop } from './components/list/ListWithForLoop';
import { ListWithMap } from './components/list/ListWithMap';
import { SimpleList } from './components/list/SimpleList';
import { Counter } from './components/counter/Counter';
import { Form } from './components/form/Form';
import { Todo } from './components/todo/Todo';


function App() {
  return(
    <div className='App'>

      <h2>useState() hooks'as</h2>
        <h5>Todo</h5>
          <Todo />
        <h5>Counter</h5>
          <Counter />
        <h5>Form</h5>
          <Form />

      <h2>Sarasu generavimas</h2>
        <h5>Simpe</h5>
          <SimpleList />
        <h5>Map</h5>
          <ListWithMap />
        <h5>For Loop</h5>
          <ListWithForLoop />

      <h2>Komponentas su parametrais</h2>
        <h5>Props</h5>
          <User name='Jonas' age={88}/>
          <User name="Maryte" age={77}/>
          <User name="petras" age='66'/>

        <h5>Destruktizuoti props</h5>
          <Student name='Antanas' age={55}/>
          <Student name="Ona" age={44}/>
          <Student name="Tomas" age='33'/>

        <h2>Tiesiog komponento panaudojimas</h2>
          <Item />
          <Item> </Item>
    </div>
  );
}

export default App;
