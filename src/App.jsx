/* eslint-disable no-unused-vars */
import React,{useState,useEffect, useRef} from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function App() {
  const[todo,setTodo]=useState("");
  const[todos,setTodos]=useState([]);
  const [completed, completeTask] = useState([]);
  const comlist=useRef(null);
  useEffect(() => {
    let todolist = localStorage.getItem("todos");
    let completedList = localStorage.getItem("completed");
    if (todolist) {
        setTodos(JSON.parse(todolist));
    }
    if (completedList) {
        completeTask(JSON.parse(completedList))
    }
  }, []);
  const handleChange=(e)=>{
    setTodo(e.target.value);
  };
  const handleEdit=(e)=>{
    const k=e.target.accessKey;
    let tl=[...todos];
    tl[k]=e.target.value;
    setTodos(tl);
  };
  const handleDelete=(index)=>{
    localStorage.setItem("todos",JSON.stringify(todos.filter((_,i)=> index!=i)));
    setTodos(t=>t.filter((_,i)=> index!=i));
    
  };
  const handleAdd=()=>{
    if(todo.trim()!==""){
      localStorage.setItem("todos",JSON.stringify([todo,...todos]));
      setTodos(t=>[todo,...t]);
      setTodo("");

    }
  };
  const taskdone=(index)=>{
    let l=completed;
    if (completed.length > 2) {
      l = completed.slice(0, -1)
    }
    localStorage.setItem("completed",JSON.stringify([todos[index],...l]));
    completeTask([todos[index],...l]);
    handleDelete(index);
    console.log(completed);
  };
  const moveup=(index)=>{
    if(index>0){
      const updtodos=[...todos];
      //Swapping
      const t=updtodos[index];
      updtodos[index]=updtodos[index-1];
      updtodos[index-1]=t;
      localStorage.setItem("todos",JSON.stringify(updtodos));
      setTodos(updtodos);

    }
  };
  const movedown=(index)=>{
    if(index<todos.length-1){
      const updtodos=[...todos];
      //Swapping
      const t=updtodos[index];
      updtodos[index]=updtodos[index+1];
      updtodos[index+1]=t;
      localStorage.setItem("todos",JSON.stringify(updtodos));
      setTodos(updtodos);
      
    }
  };
  const showCompletetasks=()=>{
    if(completed.length>0){
      if(comlist.current.style.visibility=="hidden"){
        comlist.current.style.visibility="visible";

      }
      else{
        comlist.current.style.visibility="hidden";
      }
    }
  };
  const removeCompletetasks=(index)=>{
    localStorage.setItem("completed",JSON.stringify(completed.filter((_,i)=> index!=i)));
    completeTask(t=>t.filter((_,i)=> index!=i));
  };
  return (
    <>
    <Navbar/>
      <div className="container my-3 rounded-xl bg-yellow-200 mx-auto min-h-[75vh]">
      <h2 className="text-lg font-bold p-1">Add a Task:</h2>
        <div className="add-todo my-4 flex flex-row">
          <input type="text" className= "text-black w-1/2 rounded-lg bg-blue-200 p-3 py-1 text-center" onChange={handleChange} value={todo} placeholder="Enter a task"></input>
          <button className="bg-black text-white p-3 py-1 rounded-lg mx-5" onClick={handleAdd}><script src="https://cdn.lordicon.com/lordicon.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/hqymfzvj.json"
                            trigger="hover"
                            colors="primary:#ffffff">
                        </lord-icon></button>
        </div>
          <h1 className="text-lg font-bold p-2"><img src="/src/assets/Todoicon.png" alt="Default" className="w-5 h-5 inline mx-1"></img>Your Todo Tasks:</h1>
        
        <div className="todos">
          <ol className="list flex flex-col">
            {todos.map((todo,index)=>
              <li key={index} className="element flex flex-row py-1">
                <textarea accessKey={index} id="task-info" value={todo} onChange={handleEdit} className= "text-black text-center w-1/2 rounded-lg bg-red-600">

                </textarea>
                <span className="buttons">
                <button className="bg-black text-white p-3 py-1 rounded-lg mx-1" onClick={()=>taskdone(index)}><script src="https://cdn.lordicon.com/lordicon.js"></script>
                                          <lord-icon
                                              src="https://cdn.lordicon.com/oqdmuxru.json"
                                              trigger="morph"
                                              state="morph-check-in-1"
                                              colors="primary:#ffffff">
                                          </lord-icon></button>
                <button className="bg-black text-white p-3 py-1 rounded-lg mx-1" onClick={()=>handleDelete(index)}><script src="https://cdn.lordicon.com/lordicon.js"></script>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/wpyrrmcq.json"
                                        trigger="morph"
                                        state="morph-trash-full"
                                        colors="primary:#ffffff"
                                    >
                                    </lord-icon></button>
                <button className="bg-black text-white p-3 py-1 rounded-lg mx-1" onClick={()=>moveup(index)}><script src="https://cdn.lordicon.com/lordicon.js"></script>
                                      <lord-icon
                                          src="https://cdn.lordicon.com/dwoxxgps.json"
                                          trigger="hover"
                                          colors="primary:#ffffff">
                                      </lord-icon></button>  
                <button className="bg-black text-white p-3 py-1 rounded-lg mx-1" onClick={()=>movedown(index)}><script src="https://cdn.lordicon.com/lordicon.js"></script>
                                      <lord-icon
                                          src="https://cdn.lordicon.com/rmkahxvq.json"
                                          trigger="hover"
                                          colors="primary:#ffffff">
                                      </lord-icon></button>    
                </span>
              </li>
            )}
          </ol>
        </div>
        <br></br>
        <h2 className="text-lg font-bold p-2"><img src="/src/assets/CompletedIcon.png" alt="Default" className="w-5 h-5 inline mx-1"></img>Completed Tasks:</h2>
        <div className="completed">
          <button className="bg-black text-white p-3 py-1 rounded-lg mx-1" onClick={showCompletetasks}>Show Completed Tasks</button>
          <ul className="comlist flex flex-col" ref={comlist}>
            {completed.map((todo,index)=>
              <li key={index} className="element flex flex-row py-1">
                <p className="bg-green-400 text-black w-1/2 rounded-lg text-center">{todo}</p>
                <button onClick={()=>removeCompletetasks(index)} className="bg-black text-white p-3 py-1 rounded-lg mx-1"><script src="https://cdn.lordicon.com/lordicon.js"></script>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/wpyrrmcq.json"
                                        trigger="morph"
                                        state="morph-trash-full"
                                        colors="primary:#ffffff"
                                    >
                                    </lord-icon></button>

              </li>
            )}
          </ul>
        </div>
      </div>
      <Footer/>
    </>
    
  );
  
}

export default App;
