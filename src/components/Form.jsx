import { useState } from "react";
import styles from "./Form.module.css"

export default function Form ({todos,setTodos}){
  const [todo,setTodo]= useState({
    name:"",
    isComplete:false
  });
  
  function handleSubmit(event){
    event.preventDefault();
    setTodos([...todos,todo]);
    setTodo("");
  }

  function handleChange(event){
    setTodo({name:event.target.value,
            isComplete:false
    })
  }


  return (
    <form className={styles.todoform}onSubmit={handleSubmit}>
      <div className={styles.itemContainer}>
          <input className={styles.modernInput}onChange={handleChange}
          placeholder="Enter Todo Item..."
          /*{(event)=>setTodo(event.target.value)}*/
                type="text"
                value={todo.name}/>
          <button className={styles.modernButton}
                type="submit">Add
          </button>
      </div>
  </form>
  )
}