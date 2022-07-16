import React from "react";
import "./Main.css";
const Main = () =>{
    return(
        <div className="Main">
            <div className="todo card">
                <h2>ToDo:</h2>
            </div>
            <div className="doing card">
                <h2>Doing:</h2>
            </div>
            <div className="done card">
                <h2>Done:</h2>
            </div>

        </div>
    )
}
export default Main;