import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {FaCheck} from "react-icons/fa"

const Todos =({todoitems, removeTodos}) => {
return (
    <ListGroup className="mt-5 items">
{todoitems.map(todo => (
    <ListGroupItem key={todo.id}>
{todo.todoStr}
<span className="float-end">
    <FaCheck onClick={()=> removeTodos(todo.id)} />
</span>
    </ListGroupItem>
))}
    </ListGroup>
)
}
export default Todos;