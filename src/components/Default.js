import React from "react";
import defaultimage from '../images/defaultimage.jpg'

export default function Default(){
    return (
        <div className="container" style={{marginTop:'9rem'}}>
            <div className="row justify-content-center">
                <p className="col-6 text-center fw-bold">No projects available</p>
            </div>
            <div className="row justify-content-center">
                <img src={defaultimage} style={{height:'15rem', width:'15rem', borderRadius: '40px'}}></img>
            </div>
            <div className="row justify-content-center">
                <p className="col-6 text-center fw-bold mt-3">Add some projects to start</p>
            </div>
        </div>
    )
}