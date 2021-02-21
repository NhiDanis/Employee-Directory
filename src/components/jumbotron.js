import React from 'react';
import "../styles/jumbotron.css"

function Jumbotron () {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container">
                    <h1 className="display-4"><b>Employee Directory</b></h1>
                        <p className="lead">Search by first or last name or select a column heading to sort.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Jumbotron;
