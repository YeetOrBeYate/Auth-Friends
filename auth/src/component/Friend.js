import React from "react"

const Friend = (props)=>{
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <button onClick={()=>props.del(props.id)}>Delete</button>
        </div>
    );
}

export default Friend;