import React from "react"
import { useRef } from "react"

export default function Form({setProjects, setMode, setCurrent}){

    let title = useRef('')
    let description = useRef('')
    let date = useRef('')

    function handleClick(e){
        e.preventDefault();
        let Title = title.current.value;
        let Description = description.current.value;
        let Date = date.current.value;

        let temp = {
            'title': Title,
            'description': Description,
            'date': Date,
            'tasks': []
        }

        if(Title.length === 0 || Description.length === 0 || Date.length === 0){
            return
        }
        setProjects((projects) => {
            return [temp, ...projects]
        })
        setCurrent(Title);
        setMode(false);
    }

    return (
        <form style={{width:'50rem', paddingLeft:'20rem', paddingTop:'8rem', color:'#3a5a40'}}>
        <div className="mb-3">
            <label htmlFor="Title" className="form-label fw-bold">Title</label>
            <input ref={title} type="text" className="form-control" id="Title" aria-describedby="Title"/>
        </div>
        <div className="mb-3">
            <label htmlFor="Description" className="form-label fw-bold">Description</label>
            <input ref={description} type="text" className="form-control" id="Description"/>
        </div>
        <div className="mb-3">
            <label htmlFor="Date" className="form-label fw-bold">Date</label>
            <input ref={date} type="date" className="form-control" id="Date"/>
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}