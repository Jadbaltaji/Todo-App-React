import React from 'react'


const Todos=({todos, deleteList}) => {

const toList=todos.length ? (
        todos.map(todo=> {
            return (
                <div className="collection-item" Key={todo.id}>

                <span onClick={() => {deleteList(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center"> Nothing to do </p>
    )
    return(
        <div className="todos collection">
        {toList}
        </div>
    )
}

export default Todos
