import './App.css';
import SideBar from './components/SideBar';
import React from 'react';
import { useState} from 'react';
import Form from './components/Form';
import Mainpage from './components/Mainpage';
import Default from './components/Default';

function App() {
  let [projects, setProjects] = useState([]);
  let [mode, setMode] = useState(false);
  let [current, setCurrent] = useState(undefined);

  let currentProject = undefined
  if(current !==   undefined){
    projects.forEach((project) => {
      if(project.title === current){
          currentProject = project
      }
    })
  }

  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-3' style={{backgroundColor:'black', height:'50rem', borderTopRightRadius:'25px'}}>
            <SideBar projects={projects} setMode={setMode} mode={mode} setCurrent={setCurrent}/>
        </div>
        <div className='col-9 mt-5'>
            {mode ? <Form setProjects={setProjects} setCurrent={setCurrent} setMode={setMode}/> : currentProject !== undefined ? <Mainpage setProjects={setProjects} currentProject={currentProject} setMode={setMode} setCurrent={setCurrent}/> : <Default/>}
        </div>
      </div>
    </div>
  );
}

export default App;
