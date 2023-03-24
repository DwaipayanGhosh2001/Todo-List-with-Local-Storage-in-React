import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todos from "./components/Todos";
import Todoform from "./components/TodoForm";
const App = () => {
    // Here we are setting the setState by default with an array that will help us to loop through the todos.
    const[todos, setTodos] = useState([])

    // This useEffect is used to load anything in the localStorage before the Components are loaded for the first time. 
    useEffect(() => {
        const localTodo =localStorage.getItem("todos") // Loading the existing todos in the local storage
        if(localTodo) //If there's anything in the localTodo we will go into the IF.
        {
            setTodos(JSON.parse(localTodo))
        }
        //I am trying to grab some items from the local storage and if they are available the i am grabing the using JSON. parse, which will convert the items to JS objects.
    }, [])

   // The todo is added to the state
    const addTodo = async todo => {
setTodos([...todos, todo]) // loading the state in the array and then adding the todo. 
}
// Now we will add the todo to the localstorage

useEffect(() =>{
localStorage.setItem("todos", JSON.stringify(todos))
}, [todos]) // The dependecy have todos, as the moment the todos are updated the callback is activated. 


    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id)) // discarding the id from the todolist using filter js func. 
        //code is removing a specific todo from an array of todos and updating the component's state to reflect this change.
    }
    return(
    <Container>
        <h1>Todo Application with Local Storage</h1>
        <Todos todoitems={todos} removeTodos={removeTodo} />
        <Todoform addTodos={addTodo}/>
    </Container>
    )

}
export default App;