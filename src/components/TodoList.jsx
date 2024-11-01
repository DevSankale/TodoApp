import styles from "./todoList.module.css"


export default function TodoList({todos,setTodos}){

const sortedTodos = todos.slice().sort((a,b)=>Number(a.isComplete)-Number(b.isComplete))

  console.log(todos)
  function handleDelete(todo){
    setTodos( todos.filter((t)=>t!==todo));
  }

  function handleClick(clickedTodo){
  console.log("item name clicked",clickedTodo)
  const newArray=todos.map((todo)=>todo=== clickedTodo ? {...todo, isComplete:!todo.isComplete} : todo)
  setTodos(newArray)
  }
 
  return (
    <div className={styles.todoListContainer}>
          {sortedTodos.map((item)=>(
          <div className={styles.todoItem} key={item.name}>
            <span  className = {item.isComplete ? styles.completed : ""}
             onClick={()=>handleClick(item)}>{item.name} </span>
          <button onClick={()=>handleDelete(item)}className={styles.delete}>X</button>
          </div>
          
      ))}
    </div>
    
  )
  
}
