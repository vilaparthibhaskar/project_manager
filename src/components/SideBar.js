import React from "react";

export default function SideBar({projects, setMode, mode, setCurrent}){

    function handleClick(){
        if(!mode){
            setMode(true)
        }
    }

    function handleClickButton(title){
        setCurrent(title);
        if(mode){
            setMode(false)
        }
    }
    

    return (
        <div className="container text-center" style={{color:'white'}}>
            <div className="row justify-content-center mt-5">
            <h3 className="col-8">Your projects</h3>
            </div>
            <div className="row justify-content-end">
                <button onClick={handleClick} className="btn btn-secondary col-5 mt-3 mb-3" style={{borderRadius:'10px'}}>ADD PROJECT</button>
            </div>
            <div className="row d-flex flex-column align-items-center">
                {projects.map((project) => {
                    return <button className="col-8 fw-bold rounded btn custom-button mt-2" key={project.title} onClick={() => handleClickButton(project.title)} >{project.title}</button>
                })}
            </div>
        </div>
    )
}