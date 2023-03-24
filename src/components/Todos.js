import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {RxCross1, RxCross2} from "react-icons/rx"

const Todos =({todoitems, removeTodos}) => {
return (
    <ListGroup className="mt-5 items mx-auto">
{todoitems.map(todo => (
    <ListGroupItem key={todo.id} className="d-flex p-2">
        
<span>
<p style={{marginRight: "20px"}}>{new Date().toLocaleString("en-US", { day : '2-digit', month: '2-digit', year:"2-digit"})} </p>  </span> 
{todo.todoStr}
        
<span style={{marginLeft: "auto"}}>

    <RxCross2 style={{color:"red", marginRight: "10px"}} onClick={()=> removeTodos(todo.id)} />
</span>
    </ListGroupItem>
))}
    </ListGroup>
)
}
export default Todos;