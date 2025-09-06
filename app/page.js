'use-client'

import { use, useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm  from "../components/TaskForm";

export default function Home() {
  const[tasks,setTasks]=useState([]);
  const[filter,setFilter]=useState('all');

// Load tasks from localstorage on component mount
  useEffect(()=>{
    const savedTasks=localStorage.getItem('tasks');
    if(savedTasks){
      setTasks(JSON.parse(savedTasks));
    }
  },[]);
//save tasks to localStorage whenever task changes 
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);

  const addTask=(taskData)=>{
    
    const newTask={
      id:Date.now(),
      title:taskData.description,
      completed:false,
      createdAt:new Date().toISOString()
    };
    setTasks(prev => [newTask,...prev]);
  };

  const toggleTask=(id)=>{
    setTasks(prev => prev.map(task =>
      task.id===id ?{...task, completed:!completed}:task
    ));
  };

  const deleteTask=(id)=>{
    setTasks(prev => prev.filter(task => task.id!==id));
  }

  const filteredTasks=tasks.filter(task=>{
    if(filter === 'active') return !task.completed;
    if(filter === 'completed') return task.completed;
    return true;
  });

  const taskStats ={
    total: tasks.length,
    completed:tasks.filter(t=>t.completed).length,
    active:tasks.filter(t => !t.completed).length
  }
  return (

    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8"> 
        Task Manager 
      </h1>

    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
      <div className="flex justify-around text-center">
        <div>
          <div className="text-2xl font-bold text-blue-600">
              {taskStats.total}
          </div>
          <div className="text-sm text-gray-600">
            Total 
          </div>
        </div>
        <div className="text-2xl font-bold text-green-600">
        {taskStats.completed}
        </div>
        <div className="text-sm text-gray-600">
            Completed
          </div>

      </div>

    </div>

          {/*Task Form  */}
          <div className="mb-8">
        <TaskForm onAddTask={addTask} />
          </div>


       {   /* Filter button 

          */}

{   /* Task List  



*/}




      <p className="text-center text-gray-600 mb-8">
        Manage your daily tasks efficiently
      </p>
    </main>
);
}
