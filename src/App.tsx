import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
// import Counter from './components/Counter/Counter';
import List from './components/List/List';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';

function App() {

  const list:string[] = ["Write a blog", "Choose an api"];

  const [toDoList, setToDoList] = useState(list)

  

  const handleSubmit = (e: React.SyntheticEvent)=>{
    e.preventDefault();
    console.log(e.target.todo.value);
    const newToDo = e.target.todo.value;
    setToDoList(prev => [...prev, newToDo]);

  }

  return (
    <main>
      <Heading title={'First Typescript project'}/>
      <Section>
        <div title= "subsection">
          <p> This is children </p>
        </div>
      </Section>
      <Form handleSubmit={handleSubmit}/>
      <List items={toDoList} render={(item: string)=> <span>{item}</span>}/>
    </main>

  )
}

export default App
