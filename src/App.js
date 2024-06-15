import React,{useState} from 'react'
import "./App.css"

const App = () => {
    
  //  This state is for single Todo
  const [todo, setTodo] = useState("");

  // This State is for mutliple Todos That is why is Array[]
  const [todos, setTodos] = useState([]);
  

  const handleSubmit =(e)=>{
     e.preventDefault();
  }
  
  return (
    <div className='App'>
    <div className='container'>
      <h1>Todo List App</h1>
      <form className='todoform' onSubmit={handleSubmit}>
        <input type='text' onChange={(e)=>setTodo(e.target.value)} />      
        <button type='submit'>GO</button>

      </form>

      <ul className='alltodo'>
        <li className='singletodo'>
          <span className='todotext'>Learn React</span>
          <button>Edit</button>
          <button>Delete</button>
        </li>
        {/* <li>
          <span>Learn React</span>
          <button>Edit</button>
          <button>Delete</button> */}
        {/* </li> */}
      </ul>

    </div>


</div>

    
  );  
};

export default App
