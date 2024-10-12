import React from "react";
import { useRef } from "react";

export default function Mainpage({currentProject, setProjects, setMode, setCurrent}){

    let task = useRef('')

    function handleClick(){
        setProjects((projects) => {
            let newProjects = projects.filter(project => project.title !== currentProject.title)
            setProjects(newProjects);
            setCurrent(undefined)
            setMode(true)
        })
    }

    function handleAddTask(){
        let Task = task.current.value
        task.current.value = '';
        if(Task === 0){
            return 
        }
        setProjects((projects) => {
            let updatedProjects = projects.map((project) => {
                if(project.title === currentProject.title){
                    return {
                        ...project,
                        'tasks': [...project.tasks, Task]
                    }
                }
                return project
            })
            return updatedProjects
        })
    }

    function handleClearTask(currenttask){
        setProjects((projects) => {
            let updatedProjects = projects.map((project) => {
                if(project.title === currentProject.title){
                    let updatedTasks = project.tasks.filter((task) => task !== currenttask)
                    return {
                        ...project,
                        'tasks': updatedTasks
                    }
                }
                return project
            })
            return updatedProjects
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-9"><h2>{currentProject.title}</h2></div>
                <div className="col-3 d-flex flex-row-reverse">
                    <button onClick={handleClick} className="btn btn-secondary">Delete</button>
                </div>
            </div>
            <div className="row">
                <p className="fw-bold text-secondary ms-3">{currentProject.date}</p>
            </div>
            <div className="row">
                <div className="mt-2 ms-2">
                    {currentProject.description}
                </div>
            </div>
            <hr style={{border:'1px solid #ccc', margin:'20px'}} />
            <div className="row">
                <h3>Tasks</h3>
            </div>
            <div className="row mt-2">
            <div class="input-group mb-3 d-flex flex-row">
                <input ref={task} type="text" className="ms-3 rounded" placeholder="Task Name" aria-label="Task" style={{border:'none'}}/>
                <button onClick={handleAddTask} className="btn btn-outline-secondary ms-2 fw-bold rounded" type="button">ADD</button>
            </div>
            <div className="row">
                {currentProject.tasks.map(task => {
                    return (
                        <div className="row">
                            <div className="col-8 fw-bold" style={{color:'#353535'}}><p className="ms-5">{task}</p></div>
                            <div className="col-4">
                                <button onClick={() => handleClearTask(task)} className="btn custom-button fw-bold ms-5" style={{color:"white"}}>Clear</button>
                            </div>
                        </div>
                    )         
                })}
            </div>
            </div>
        </div>
    )
}