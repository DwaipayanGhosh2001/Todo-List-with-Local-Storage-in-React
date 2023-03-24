import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {RxCross1, RxCross2} from "react-icons/rx"

const Todos =({todoitems, removeTodos}) => {
return (
    <ListGroup className="mt-5 items mx-auto">
{todoitems.map(todo => (
    <ListGroupItem key={todo.id}>
{todo.todoStr}
<span className="float-end">
    <RxCross2 style={{color:"red", marginRight: "10px"}} onClick={()=> removeTodos(todo.id)} />
</span>
    </ListGroupItem>
))}
    </ListGroup>
)
}
export default Todos;