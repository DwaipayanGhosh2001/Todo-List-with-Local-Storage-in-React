import React, {useState} from "react";
import {
    Button,
    Form, FormGroup, Input, InputGroup
} from "reactstrap"
import {v4} from "uuid"
 const Todoform = ({addTodos}) => {
    const [todoStr, setTodoStr] = useState("");
const todoSubmit= (e) => {
e.preventDefault();

if(todoStr === "")
{
    return alert("Todo is empty");
}

const todo = {
    id: v4(),
    todoStr
}
addTodos(todo);

setTodoStr("");
}

    return (
        <Form onSubmit={todoSubmit} className="mx-auto">
            <FormGroup>
                <InputGroup>
                <Input 
                className="input"
                type="text"
                name="todo"
                id="todo"
                placeholder="Enter your todo"
                value={todoStr}
                onChange={e => setTodoStr(e.target.value)}
                />
                <Button color="success" style={{borderTopRightRadius: "20px", border: "1px solid black"}}>Add Todo</Button>
                </InputGroup>
            </FormGroup>
        </Form>

    )
 }
 export default Todoform;