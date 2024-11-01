import { useState } from "react"
import Form from "./Form.jsx"
import TodoList from "./TodoList.jsx"
import Footer from "./Footer.jsx";


export default function Todo (){

  
  const [todos,setTodos]=useState([])
  const completedTodos = todos.filter((todo)=>todo.isComplete).length;
  const totalTodos = todos.length;
  return (
    <>
     <Form key={todos}todos={todos} setTodos={setTodos}/>
     <TodoList  todos={todos} setTodos={setTodos}/>
     <Footer completedTodos= {completedTodos} totalTodos = {totalTodos}/>
    </>
    
  )
}
